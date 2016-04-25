# Usage

To execute this playbook, run:

`ansible-playbook bootstrap.yml --ask-pass --sudo --ask-sudo-pass -i hosts`

Be sure to edit your SSH keys, as well as the hosts file, I strongly advise you look through the roles before executing on a live system, as this is designed for my needs, probably not yours.

This has crude support for RedHat systems, but I primarily use Debian on servers, so this will likely work as designed with Debian or a derivative (such as Ubuntu).

## Roles

* ***mark2*** - Install mark2, this role is also included in [mark2-ansible](https://github.com/lukeflynn/mark2-ansible), which was designed for public use.
* ***java*** - Install Oracle Java 8, also included in mark2-ansible.
* ***security-init***  - Lock down SSH (I use key auth only) and install fail2ban.
* ***upgrades*** - Perform full or package upgrades based on variable in `bootstrap.yml`
* ***common*** - Common tasks such as useful packages and MOTD generation.
* ***workstation*** - an empty role that I plan to build for Fedora desktops, probably not soon.


