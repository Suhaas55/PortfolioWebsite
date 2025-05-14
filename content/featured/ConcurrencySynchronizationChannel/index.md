---
date: '2'
title: 'Concurrency Synchronization Channel'
cover: './Concurrency_Channel_Image.png'
github: 'https://gitfront.io/r/suhaas55/Pf5APUKi8ZEV/Concurrency/'
external: 'https://gitfront.io/r/suhaas55/Pf5APUKi8ZEV/Concurrency/'
tech:
  - C (gcc)
  - POSIX Threads
  - Make
  - GNU Debugger (GDB)
  - Valgrind
  - Bash / Linux CLI
  - Custom Test Harness
---

I built a multi‐threaded channel in C to safely pass messages between concurrent senders and receivers. Leveraging POSIX threads and a ring‐buffer queue, it supports both blocking and non‐blocking send/receive modes. A Makefile automates compilation and a trace‐driven test harness exercises edge cases—full‐buffer sends, empty‐buffer receives, and concurrent access patterns. I used GDB for step‐through debugging and Valgrind for memory/race‐condition checks, ensuring robust synchronization and zero data corruption. This deep dive into threading and synchronization vastly improved my understanding of systems‐level concurrency and performance tuning.