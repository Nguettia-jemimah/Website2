🗓️ Day 1 Journal — Software Engineering Foundation (Extended)
📅 Date

Wednesday, November 5, 2025

💻 Focus Area

Software Engineering — Programming Environment Setup + First Lines of Code

🎯 Today’s Objectives

Install and configure Git, VS Code, and Python.

Learn Git & GitHub fundamentals.

Write and push a Python project to GitHub.

Document all Git commands and lessons learned.

🧰 Tools Installed

Visual Studio Code for coding.

Python 3.x for programming.

Git for version control.

GitHub account for online repository hosting.

🧠 Git & GitHub Commands Learned
Command	Purpose / Explanation
git config --global init.defaultBranch main	Sets default branch name to main.
git init	Initializes a new repository in the folder.
ls --force	Displays current files (including hidden ones) in the repo.
git status	Shows tracked and untracked files.
git add .	Adds all files to the staging area.
git commit -m "message"	Saves staged files to local repo with a message.
git remote add origin <repo-URL>	Connects local repo to a GitHub repo.
git branch -M main	Renames branch to main.
git remote -v	Shows which remote repository is linked.
git pull	Fetches and merges updates from GitHub to local repo.
git commit -am "message"	Adds and commits changes at once.
git clone <URL>	Copies a GitHub repo into local machine.
git branch branch-name	Creates a new branch.
git branch	Lists existing branches and highlights current branch.
git switch branch-name	Switches to an existing branch.
git switch -c feature/<name>	Creates and switches to a new branch.
git push -u origin newB1	Pushes new branch to GitHub and sets it to track origin.
git pull origin main	Pulls latest changes from the main branch.
git branch -d newB1	Deletes a branch locally.
CI/CD	Continuous Integration / Continuous Deployment — used for automating deployment pipelines.
⚙️ Troubleshooting Notes

“git is not recognized as an internal or external command”

Git isn’t added to PATH.

✅ Fix: Reinstall Git or manually add C:\Program Files\Git\bin to PATH. Restart terminal or PC.

Permission errors (“Permission denied”)

✅ Fix 1: Run Git Bash or Command Prompt as Administrator.

✅ Fix 2: Check folder permissions (Right-click → Properties → Security → Grant Full Control).

How to create an SSH key (for GitHub authentication)

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa


Then add the public key (id_rsa.pub) to GitHub → Settings → SSH and GPG keys.

💻 Project Built

Day 1 Calculator — Multi-Operation Python Program

Features:

Addition, subtraction, multiplication, division.

Error handling for division by 0.

Clean function-based structure.

GitHub Commands Used:

git init
git add calculator.py
git commit -m "Day 1: Multi-Operation Calculator"
git branch -M main
git remote add origin <repo-URL>
git push -u origin main

💪🏾 What I Learned

Core Git commands and workflow.

How branches, commits, and remotes work.

How to debug Git issues on Windows.

How Python handles input, arithmetic, and logic.

Confidence using terminal commands and GitHub interface.

🌟 What I’m Proud Of

Successfully configured my environment.

Deployed my first working Python project to GitHub.

Understood how Git ties together local and cloud code.

Started my daily learning discipline.

🔭 Goals for Tomorrow (Day 2)

Learn Variables, Data Types, and Operators in Python.

Practice writing arithmetic, string, and logic exercises.

Push all practice programs to GitHub as Day 2 Practice.

✍🏾 Reflection Quote

“Each commit I make today writes the story of who I’m becoming tomorrow.”