---
date: '1'
title: 'Dynamic Memory Allocator'
cover: './Dynamic_Memory_Allocator_Image.png'
github: 'https://gitfront.io/r/suhaas55/uziwxGhpREse/MemAlloc/'
external: 'https://gitfront.io/r/suhaas55/uziwxGhpREse/MemAlloc/'
tech:
  - C (gcc)
  - Make
  - GNU Debugger (GDB)
  - Valgrind
  - Bash / Linux CLI
  - Custom Test Harness
---

I built a custom dynamic memory allocator in C that implements my own versions of malloc, free, and realloc within a single mm.c file. Using GCC and a Makefile on Linux, I automated compilation and testing with a trace-driven harness that exercises edge cases and varied allocation patterns. To guarantee correctness and performance, I developed a heap consistency checker—leveraging GDB for in-depth debugging and Valgrind to detect leaks and alignment errors—ensuring proper coalescing of free blocks and strict 16-byte alignment. This project deepened my understanding of low-level memory management, pointer arithmetic, and systems-level optimizations, resulting in an allocator that is both fast and space-efficient.
