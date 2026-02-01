# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository explores implementations and best practices for login authentication and session management.

## Rules and Skills Structure

- **Rules** (`.claude/rules/`): Automatically loaded based on file paths. Source of truth for project conventions.
- **Skills** (`.claude/skills/`): Manually invoked for specific integrations.

## Available Rules

| Rule                    | Applies To | Description                                |
| ----------------------- | ---------- | ------------------------------------------ |
| **typescript-patterns** | `**/*.ts`  | TypeScript coding patterns and conventions |

_Note: Rules will be added as the project evolves._

## Available Skills

| Skill                          | When to Use                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| **frontend-design**            | Building web components, pages, or applications with distinctive, production-grade design |
| **vercel-react-best-practices** | Writing, reviewing, or refactoring React/Next.js code for optimal performance patterns    |

## Work Rules

1. Propose implementation plan
1. Wait for approval
1. Start implementation

## Tool Usage Policy

**Always use dedicated tools for file operations:**

- File reading → `Read` tool
- File search → `Glob` tool
- Content search → `Grep` tool
- File editing → `Edit` tool
- File writing → `Write` tool

## Language Settings

- Responses: Japanese
- Thinking: English (for token reduction)
