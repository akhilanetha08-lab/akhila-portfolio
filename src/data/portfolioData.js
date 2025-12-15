import { Cloud, Server, Container, Code, Database, Shield } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Akhila A",
        role: "CyberSecurity Specialist",
        email: "akhila.netha08@gmail.com",
        phone: "+91-7670989013",
        location: "India",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/akhila-a/",
            github: "https://github.com/akhila-cybersec/",
            gmail: "mailto:akhila.netha08@gmail.com"
        }
    },
    hero: {
        title: "CyberSecurity Specialist",
        subtitle: "Securing the Digital World",
        description: "Specialized in penetration testing, vulnerability assessment, and network security, with expertise in ethical hacking and web application security. Proficient in using tools like BurpSuite, Wireshark, Metasploit, and Nmap to identify, exploit, and mitigate security risks.",
        floatingIcons: [
            { icon: Cloud, label: 'Cloud Security' },
            { icon: Shield, label: 'Network Security' },
            { icon: Server, label: 'Infrastructure Security' },
            { icon: Code, label: 'Ethical Hacking' },
            { icon: Database, label: 'Database Security' },
            { icon: Container, label: 'Container Security' },
        ]
    },
    about: {
        bio: [
            "Passionate and skilled cybersecurity professional with hands-on experience in penetration testing, vulnerability management, and network security. Skilled in identifying system weaknesses and securing digital infrastructures using ethical hacking techniques.",
            "Proficient in a wide range of security tools such as BurpSuite, Wireshark, SQLmap, and Metasploit. Well-versed in various cybersecurity domains, including cloud security, application security, and threat intelligence. Dedicated to staying updated on emerging cybersecurity trends and best practices."
        ],
        focusAreas: [
            "Penetration Testing",
            "Vulnerability Assessment",
            "Network Security",
            "Web Application Security",
            "Threat Intelligence",
            "Cryptography"
        ]
    },
    experience: [
        {
            title: "CyberSecurity Analyst",
            role: "Security Operations Center (SOC) Analyst",
            responsibilities: [
                "Monitored network traffic and identified potential security threats using tools like Wireshark and Snort.",
                "Performed vulnerability assessments and penetration tests on web applications and network infrastructure.",
                "Assisted in the response to security incidents and implemented necessary remediation actions."
            ],
            achievements: [
                "Reduced security incident response time by 30% through proactive monitoring and early threat detection.",
                "Identified and mitigated multiple vulnerabilities in a live production environment, enhancing overall security posture."
            ],
            tools: ["Wireshark", "Metasploit", "Nmap", "BurpSuite"]
        },
        {
            title: "Vulnerability Assessment",
            role: "Penetration Tester",
            responsibilities: [
                "Conducted manual and automated penetration tests on networks, servers, and web applications to identify vulnerabilities.",
                "Provided detailed reports with exploitation techniques, risks, and remediation advice.",
                "Worked with development teams to fix security issues and enhance the overall application security."
            ],
            achievements: [
                "Successfully discovered critical vulnerabilities, including SQL injection and XSS, leading to faster remediation and patching.",
                "Improved the security posture of client systems by implementing industry best practices in vulnerability management."
            ],
            tools: ["BurpSuite", "SQLmap", "Nikto", "OWASP ZAP"]
        },
        {
            title: "Cloud Security",
            role: "Cloud Security Specialist",
            responsibilities: [
                "Secured cloud infrastructures using AWS and Azure security services, focusing on IAM, encryption, and data protection.",
                "Audited cloud environments for compliance with security frameworks like GDPR and HIPAA.",
                "Implemented network security measures, including VPNs, firewalls, and encryption protocols."
            ],
            achievements: [
                "Enhanced cloud infrastructure security by implementing encryption and access controls, reducing potential attack vectors.",
                "Successfully helped achieve 100% compliance with security regulations in cloud deployments."
            ],
            tools: ["AWS", "Azure", "Terraform", "CloudWatch"]
        },
        {
            title: "Web Application Security",
            role: "Security Tester",
            responsibilities: [
                "Conducted security audits and assessments of web applications to identify OWASP Top 10 vulnerabilities.",
                "Developed and executed attack simulations to identify and exploit potential security flaws.",
                "Collaborated with development teams to ensure secure coding practices."
            ],
            achievements: [
                "Reduced the occurrence of critical vulnerabilities by 25% through proactive penetration testing.",
                "Improved overall application security by incorporating security best practices during the development lifecycle."
            ],
            tools: ["OWASP ZAP", "Nikto", "BurpSuite", "Kali Linux"]
        }
    ],
    skills: [
        {
            title: "Penetration Testing & Ethical Hacking",
            skills: ["BurpSuite", "Metasploit", "OWASP ZAP", "SQLmap", "Kali Linux", "Nmap", "Nikto"]
        },
        {
            title: "Network Security",
            skills: ["Wireshark", "Snort", "Firewalls", "VPNs", "IDS/IPS"]
        },
        {
            title: "Web Application Security",
            skills: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "Web Application Firewalls"]
        },
        {
            title: "Cryptography & Data Security",
            skills: ["SSL/TLS", "AES", "RSA", "Encryption", "Hashing", "PGP"]
        },
        {
            title: "Cloud Security",
            skills: ["AWS Security", "Azure Security", "IAM", "CloudFirewalls", "Encryption in Cloud"]
        },
        {
            title: "Vulnerability Management",
            skills: ["Nessus", "OpenVAS", "Vulnerability Scanning", "Patch Management"]
        }
    ],
    resume: {
        currentVersion: "v1",
        versions: {
            v1: {
                pdf: "/resumes/Akhila_A_Resume_v1.pdf",
                docx: "/resumes/Akhila_A_Resume_v1.docx"
            }
        }
    }
};
