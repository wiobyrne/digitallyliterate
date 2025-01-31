---
{"dg-publish":true,"permalink":"/02-curate/notes/fundamental-principles-of-cybersecurity/","title":"Fundamental Principles of Cybersecurity","tags":["information-security","cybersecurity"]}
---

# Fundamental Principles of Cybersecurity 

Security, particularly in the digital realm, is guided by several key principles that are critical to maintaining the integrity, confidentiality, and availability of data. Here are some fundamental security principles:

1. **Least Privilege Principle**: This principle implies that a user should have the minimum levels of access – or permissions – necessary to complete his/her job functions.

2. **Defense in Depth Principle**: This strategy involves layering multiple security measures to protect resources, ensuring that if one control fails, another can prevent an attack.

3. **Fail-Safe Defaults Principle**: This principle means that the default access to a system should be no access at all; only explicit permission grants access.

4. **Economy of Mechanism Principle**: This principle stresses simplicity in designing security systems; more complex systems have more potential weaknesses.

5. **Complete Mediation Principle**: Every request for accessing an object should be checked against the access controls each time.

6. **Open Design Principle**: The design of a security system should not be kept secret; a system's security should not depend on the secrecy of its design or implementation.

7. **Separation of Privilege Principle**: This principle implies that multiple conditions should be met before an action is approved.

8. **Psychological Acceptability Principle**: Systems should be designed for ease of use; users will avoid security measures that aren't intuitive or user-friendly.

9. **Work Factor Principle**: The cost of circumventing a security mechanism should exceed the value of the protected resources.

10. **Compromise Recording Principle**: Sometimes it's better to let an attack happen and observe it rather than preventing it outright; this can provide valuable information about threats and vulnerabilities.


External Links:
1. [Information Security Principles](https://www.sciencedirect.com/topics/computer-science/information-security-principles)
2. [Core Principles of Cyber Security](https://www.youracclaim.com/blog/the-7-basic-principles-of-it-security)
3. [Principles of Information Security](https://www.tutorialspoint.com/information_security_cyber_law/principles_of_information_security.htm)

## Notes from FPF training
> 
> Although we will be looking at many concepts associated with cybersecurity in this module, three key principles are: **least privilege, need to know,** and the **separation of duties**.  The first two require that all stakeholders are supplied with the minimum amount of privilege and information to get their work done well.  To access information beyond the scope of an employee's need, the employee needs to justify the request to his/her manager.  Manager approval of the request should be documented and retained for audit purposes.  
> 
> The separation of duties is intended to make sure no single individual can execute a critical task (e.g. asset acquisition) by him or herself.  This principle often prevents major security failures.  For example, in payroll, you may have one person compiling the gross and net pay and another person verifying the calculations.  This prevents a clerk from accidentally or intentionally increasing the compensation of certain employees or paying fake employees.  
> 
> An IT example would be to ensure that database administrators ([DBAs (Links to an external site.)](https://en.wikipedia.org/wiki/Database_administrator)) only have DBA authority, not root or administrator authority.  Root authority should be provided to a manager or the CTO.  Outsourced consulting or maintenance personnel should be restricted to the systems they are working on by creating a VLAN or using [privileged identity management solutions (Links to an external site.)](https://en.wikipedia.org/wiki/Privileged_identity_management).  Lastly, to illustrate what separation of duties may look like in IT, application developers should NOT have access to production data or production source code. Limiting this access will prevent them from accidentally changing your production environment while developing software.

> -    B.4 - The school system ensures that enforceable data privacy and security requirements are in place around all business processes that involve student data.
> -   DS.4 - The school system utilizes a documented, role-based process when granting educators, staff and contractors access rights to data and technology system.