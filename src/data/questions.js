// ============================================================================
// TECHNITUDE 2026 — PASSWORD BREAKER QUESTION BANK (MISSION 1)
// ============================================================================
// Every question contains exactly 6 clues.
// Each password is a single uppercase string (alphanumeric, may include spaces).
// ============================================================================

export const questions = [
  {
    id: 1,
    password: "RACE CONDITION",
    clues: [
      "My outcome can change depending on who gets there first.",
      "I usually appear when multiple processes or threads access shared data.",
      "The problem becomes dangerous when at least one operation modifies the shared resource.",
      "Two executions of the same program can produce different results because of me.",
      "Locks, mutexes and synchronization mechanisms can help prevent me.",
      "My password has 13 letters including the space and describes a timing-dependent concurrency problem."
    ]
  },
  {
    id: 2,
    password: "DOCKER",
    clues: [
      "I help developers package applications along with their dependencies.",
      "I make it easier for software to run consistently across different environments.",
      "I use images as blueprints for creating running instances.",
      "My containers share the host operating system's kernel.",
      "I am widely used in DevOps and software deployment.",
      "My password has 6 letters and is the name of a popular containerization platform."
    ]
  },
  {
    id: 3,
    password: "BERMUDA",
    clues: [
      "I am associated with a region where stories of unexplained disappearances have fascinated people for decades.",
      "I am not the name of a ship, person, or creature.",
      "My mystery is connected with both the Atlantic Ocean and popular legends.",
      "Ships and aircraft are traditionally said to have disappeared within the region associated with me.",
      "My second word in the famous phrase is Triangle.",
      "My password has 7 letters and is the first word of that famous mysterious region."
    ]
  },
  {
    id: 4,
    password: "KUBERNETES",
    clues: [
      "I help manage applications that are packaged into lightweight, isolated environments.",
      "I can automatically scale applications when demand changes.",
      "I can restart failed application instances and distribute workloads across machines.",
      "My name is often shortened to K8s.",
      "Google originally developed the technology behind me before it became an open-source project.",
      "My password has 10 letters and I am widely associated with container orchestration."
    ]
  },
  {
    id: 5,
    password: "PHISHING",
    clues: [
      "I am a technique used by cybercriminals to deceive people.",
      "I often arrive through emails, text messages, or fake websites.",
      "I may imitate a bank, company, or trusted individual.",
      "My goal may be to steal passwords, financial details, or personal information.",
      "Checking suspicious links and verifying senders can help people avoid me.",
      "My password has 8 letters and describes a common social engineering attack."
    ]
  },
  {
    id: 6,
    password: "TCP HANDSHAKE",
    clues: [
      "I happen before reliable data transfer begins.",
      "I involve communication between two endpoints.",
      "I establish that both sides are ready to communicate.",
      "I involve the exchange of SYN and ACK messages.",
      "The classic process is commonly described as a three-step exchange.",
      "My password contains two words and is associated with establishing a TCP connection."
    ]
  },
  {
    id: 7,
    password: "DEADLOCK",
    clues: [
      "I can bring a computer program to a standstill.",
      "I often occur when multiple processes compete for resources.",
      "Each process may hold a resource while waiting for another.",
      "Circular waiting is one of the conditions associated with me.",
      "Resource allocation strategies can help prevent or avoid me.",
      "My password has 7 letters and describes a situation in which processes are permanently waiting for one another."
    ]
  },
  {
    id: 8,
    password: "BLACK HOLE",
    clues: [
      "I am a region where ordinary intuition about space and time begins to break down.",
      "My gravitational influence becomes so extreme that escaping becomes impossible beyond a certain boundary.",
      "That boundary is known as the event horizon.",
      "I am not simply an empty hole in space.",
      "Even light cannot escape once it passes my event horizon.",
      "My password contains two words and is one of the most famous phenomena in astronomy."
    ]
  },
  {
    id: 9,
    password: "TROJAN HORSE",
    clues: [
      "I take my name from a famous story in ancient Greek mythology.",
      "In computing, I disguise myself as something legitimate or useful.",
      "A user may unknowingly install or execute me.",
      "Unlike a computer virus, I do not necessarily replicate by infecting other files.",
      "I can be used to steal information or provide unauthorized access.",
      "My password contains two words and names a type of deceptive malware."
    ]
  },
  {
    id: 10,
    password: "PUBLIC KEY",
    clues: [
      "I belong to a cryptographic system where two mathematically related keys are used.",
      "One key can be distributed openly without keeping it secret.",
      "The other key must remain confidential.",
      "RSA and ECC are examples of cryptographic systems associated with me.",
      "I can be used for encryption as well as concepts such as digital signatures.",
      "My password contains two words and describes the key that can safely be shared with others."
    ]
  },
  {
    id: 11,
    password: "DARK WEB",
    clues: [
      "I am a part of the internet that ordinary search engines generally do not index.",
      "Accessing me typically requires specialized software or configurations.",
      "Some people use me to communicate with greater anonymity.",
      "I have legitimate uses, but I am also associated with illegal online marketplaces.",
      "I am often confused with the deep web, although the two terms are not identical.",
      "My password contains two words and refers to a hidden part of the internet."
    ]
  },
  {
    id: 12,
    password: "LOAD BALANCER",
    clues: [
      "I stand between users and multiple servers.",
      "My purpose is not to store the application's permanent data.",
      "I distribute incoming requests among available servers.",
      "I can help prevent one server from becoming overwhelmed while others remain underused.",
      "Some of my strategies include round-robin, least connections and weighted distribution.",
      "My password has 12 letters excluding the space and is important in scalable web applications."
    ]
  },
  {
    id: 13,
    password: "SILK ROAD",
    clues: [
      "I was not a single road.",
      "I connected distant regions across a vast part of Asia and beyond.",
      "Merchants travelled along networks associated with me for centuries.",
      "I helped exchange not only goods but also ideas, cultures and technologies.",
      "One luxury product became so strongly associated with these trade networks that it gave me my famous name.",
      "My password contains two words and refers to one of history's most famous trading networks."
    ]
  },
  {
    id: 14,
    password: "VIRTUALIZATION",
    clues: [
      "I allow one physical computing system to behave as if it were several independent systems.",
      "The physical machine is commonly called the host, while the simulated systems are called guests.",
      "A software layer called a hypervisor makes me possible.",
      "I allow different operating systems to run on the same physical hardware.",
      "Cloud platforms heavily rely on technologies based on this concept.",
      "My password has 14 letters and is fundamental to modern cloud infrastructure."
    ]
  },
  {
    id: 15,
    password: "HONEYPOT",
    clues: [
      "I am a security mechanism designed to attract suspicious activity.",
      "I may imitate a real server, database, or network service.",
      "My main purpose is observation rather than serving ordinary users.",
      "Security teams can study attackers through the activity I capture.",
      "I can help researchers understand attack techniques and behavior.",
      "My password has 8 letters and is named after something sweet that attracts insects."
    ]
  },
  {
    id: 16,
    password: "BLACK BOX",
    clues: [
      "You can understand what I do without knowing every detail of how I work internally.",
      "You provide inputs and observe the outputs.",
      "My internal implementation may be hidden or unknown.",
      "I am used as a testing approach in software engineering.",
      "Testers can use me to verify functionality against requirements.",
      "My password contains two words and describes a system examined through its inputs and outputs."
    ]
  },
  {
    id: 17,
    password: "DRAGON",
    clues: [
      "I am a legendary creature said to guard hidden treasures.",
      "I appear in stories from many different cultures.",
      "I am often depicted with wings and scales.",
      "I can breathe fire in many Western legends.",
      "Knights in fantasy stories often fight me.",
      "I am a mythical fire-breathing creature."
    ]
  }
];

export default questions;