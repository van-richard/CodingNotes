# Intro. to Supercomputers

A supercomputer is an extremely powerful and high-performance computing (HPC) machine designed to handle complex and computationally intensive tasks and simulations. These machines are among the fastest and most capable computers in the world and are typically used for scientific research, engineering simulations, weather forecasting, climate modeling, cryptography, and other demanding applications.

In simple terms, they are like giant, powerful versions of regular computers, much larger and involve many more parts. They can take up entire rooms or even buildings. Inside these machines, you'll find thousands or even millions of smaller computer processors (like the brain of the computer) and a lot of memory (like the computer's short-term memory). Think of these processors as workers and the memory as their workspace.

In Oklahoma, we have access to 2 supercomputers:

1. [Oscer (aka. Schooner) at OU](https://www.ou.edu/oscer)
2. [Pete at OSU](https://hpcc.okstate.edu/pete-supercomputer.html)

You can visit thier website to get more information, and make an account!

Hopefully, you have already made an account either supercomputers. If you recieved a confirmation email from them, the first thing you need to do is login and set your password.

Two key points when using the supercomputer:

1. To access the computers remotely we use the `ssh` command 
2. Slurm is used to manage the cluster

## What is `ssh`?

To login remotely to a supercomputer, we use the command `ssh` on the terminal. This is short for secure shell protocol and can take a few arguments. The syntax is `ssh [username]@ssh.server.example.edu`.

First, open your terminal, and follow the directions for Oscer or Pete SSH. Change the `[username]` part, to the username you created!!

## What is Slurm?

Since high-performace computing centers are composed of many parts (CPU, GPU, RAM, SSD, HDD, etc.), involving many different users (biological science, machine learning, etc.) with different needs. They require a job scheduling and resource management system. One system is Slurm.

Slurm is like a traffic cop for computers. It's a software system used in big computer clusters, like those in data centers or supercomputers. Slurm helps manage and allocate the computing resources, like processors and memory, to different tasks or jobs that people want to run on the cluster.

Imagine a busy intersection where the traffic cop directs cars to different lanes or tells them when to go. Slurm does something similar but for computer tasks, making sure they don't crash into each other and efficiently use the available resources, so everything runs smoothly. It helps coordinate and schedule who gets to use the computers and when.

For us, the users, some key points when using Slurm are:

1. Job Submission/Management
2. Resource Allocation/Utilization
3. Scripting and Automation
