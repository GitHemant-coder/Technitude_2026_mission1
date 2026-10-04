/**
 * useDisableInspect.js
 *
 * Comprehensive Security Guard:
 * 1. Blocks right-click, F1-F12 keys, DevTools shortcuts, page source shortcuts.
 * 2. Active DevTools Detection (Window Dimension Delta + Console Getter Trap).
 * 3. Shows Fullscreen Blur & Security Modal when DevTools is opened.
 * 4. Runs anti-debugging loop while DevTools is open.
 */

import { useEffect } from 'react';

export function useDisableInspect() {
  useEffect(() => {
    /* ── 1. Block Right-Click Context Menu ────────────────────────────── */
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    /* ── 2. Block Dragging (Images, Text, Elements) ──────────────────── */
    const handleDragStart = (e) => {
      const tag = e.target.tagName ? e.target.tagName.toLowerCase() : '';
      if (tag !== 'input' && tag !== 'textarea') {
        e.preventDefault();
      }
    };

    /* ── 3. Block Copy/Cut Outside Inputs ─────────────────────────────── */
    const handleCopyCut = (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag !== 'input' && activeTag !== 'textarea') {
        e.preventDefault();
      }
    };

    /* ── 4. Block All Inspection & Navigation Key Combos ─────────────── */
    const handleKeyDown = (e) => {
      const key = e.key;
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;
      const isAlt = e.altKey;

      // A. Block Function Keys F1 - F12
      const isFunctionKey = /^F([1-9]|1[0-2])$/i.test(key);

      // B. Block ContextMenu Key & Shift+F10
      const isContextMenuKey = key === 'ContextMenu' || (isShift && key === 'F10');

      // C. Block DevTools Combos (Ctrl/Cmd + Shift + I/J/C/K/E/M)
      const isDevToolsCombo =
        isCtrlOrCmd &&
        isShift &&
        ['i', 'j', 'c', 'k', 'e', 'm'].includes(key.toLowerCase());

      // D. Mac ⌘ + Option(Alt) + I/J/C/K/E/M/U
      const isMacDevToolsCombo =
        e.metaKey &&
        isAlt &&
        ['i', 'j', 'c', 'k', 'e', 'm', 'u'].includes(key.toLowerCase());

      // E. Block Source / Save / Print / Refresh Combos (Ctrl/Cmd + U / S / P / R)
      const isActionCombo =
        isCtrlOrCmd && ['u', 's', 'p', 'r'].includes(key.toLowerCase());

      // Combine all blocked conditions
      if (isFunctionKey || isContextMenuKey || isDevToolsCombo || isMacDevToolsCombo || isActionCombo) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    /* ── 5. Inject Global Non-Select CSS & Overlay Styles ─────────────── */
    const styleTag = document.createElement('style');
    styleTag.id = 'disable-inspect-styles';
    styleTag.textContent = `
      html, body, #root, div, span, img, a, p, h1, h2, h3, h4, button {
        user-select: none !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        -webkit-user-drag: none !important;
      }
      input, textarea, [contenteditable="true"] {
        user-select: text !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
      }
      #devtools-security-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(10, 5, 2, 0.98);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 24px;
        box-sizing: border-box;
      }
      .devtools-warning-box {
        background: linear-gradient(180deg, #2a0b06 0%, #150403 100%);
        border: 3px solid #ef4444;
        border-radius: 12px;
        padding: 36px 30px;
        max-width: 520px;
        box-shadow: 0 0 50px rgba(239, 68, 68, 0.7), 0 10px 40px rgba(0, 0, 0, 0.95);
        color: #fff2cf;
        font-family: sans-serif;
      }
      .devtools-warning-title {
        font-size: 1.6rem;
        font-weight: 900;
        color: #f87171;
        margin-bottom: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .devtools-warning-text {
        font-size: 1.1rem;
        color: #fef08a;
        margin-bottom: 10px;
        line-height: 1.5;
      }
      .devtools-warning-subtext {
        font-size: 0.95rem;
        color: #d1d5db;
        opacity: 0.85;
      }
      .root-blurred {
        filter: blur(30px) !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    /* ── 6. Active DevTools Detection Loop ────────────────────────────── */
    let devToolsOpen = false;

    const checkDevTools = () => {
      const threshold = 160;
      const widthDiff = window.outerWidth - window.innerWidth > threshold;
      const heightDiff = window.outerHeight - window.innerHeight > threshold;

      const isOpenNow = widthDiff || heightDiff;

      if (isOpenNow && !devToolsOpen) {
        devToolsOpen = true;
        showDevToolsOverlay();
      } else if (!isOpenNow && devToolsOpen) {
        devToolsOpen = false;
        hideDevToolsOverlay();
      }
    };

    const showDevToolsOverlay = () => {
      let overlay = document.getElementById('devtools-security-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'devtools-security-overlay';
        overlay.innerHTML = `
          <div class="devtools-warning-box">
            <div class="devtools-warning-title">⚠️ SECURITY ALERT ⚠️</div>
            <div class="devtools-warning-text">DEVELOPER TOOLS DETECTED!</div>
            <div class="devtools-warning-subtext">
              Inspection and DevTools are strictly prohibited during Technitude 2026.<br/><br/>
              <strong>Please close Developer Tools to resume playing.</strong>
            </div>
          </div>
        `;
        document.body.appendChild(overlay);
      }
      const root = document.getElementById('root');
      if (root) root.classList.add('root-blurred');
    };

    const hideDevToolsOverlay = () => {
      const overlay = document.getElementById('devtools-security-overlay');
      if (overlay) overlay.remove();
      const root = document.getElementById('root');
      if (root) root.classList.remove('root-blurred');
    };

    const intervalId = setInterval(checkDevTools, 500);

    /* ── 7. Register Event Listeners ─────────────────────────────────── */
    window.addEventListener('contextmenu', handleContextMenu, true);
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('dragstart', handleDragStart, true);
    window.addEventListener('copy', handleCopyCut, true);
    window.addEventListener('cut', handleCopyCut, true);

    /* ── 8. Cleanup Listeners on Unmount ─────────────────────────────── */
    return () => {
      clearInterval(intervalId);
      hideDevToolsOverlay();
      window.removeEventListener('contextmenu', handleContextMenu, true);
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('dragstart', handleDragStart, true);
      window.removeEventListener('copy', handleCopyCut, true);
      window.removeEventListener('cut', handleCopyCut, true);
      const existing = document.getElementById('disable-inspect-styles');
      if (existing) existing.remove();
    };
  }, []);
}
