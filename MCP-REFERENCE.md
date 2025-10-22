# MCP-REFERENCE.md - V3.0 Complete System

**Version**: 3.0.0  
**Repository**: [ai-agent-system](https://github.com/lovinglifemediawebdev/ai-agent-mcp)  
**Framework**: Multi-Framework Support (Motia, Next.js, React, Vue, etc.)  
**Usage**: Copy this file to any project for complete AI agent assistance  
**Enhancement**: Optional methodologies (BMAD™, Spec-Driven) + Production patterns + Atomic planning + Multi-framework support + Context7 integration

## 🎯 MCP System Overview

This file provides Cursor AI with complete context for:
- **Framework Flexibility**: Works with ANY framework - Motia, Next.js, React, Vue, Angular, or existing projects
- **AI Team System**: 10 specialized AI roles with atomic task management
- **Development Standards**: Production-tested patterns and best practices from HVAC Estimator deployment
- **Cross-Project Portability**: One file, any project, no installation required
- **Atomic Planning Integration**: Context-aware task decomposition for optimal AI performance
- **Context7 Integration**: Up-to-date library documentation through Context7 MCP Server
- **Operational Enhancements**: 9 battle-tested operational patterns for production deployment
- **Enhanced Patterns**: Security-first, responsive design, and authentication patterns
- **Documentation Resources**: Complete guides for Vercel, Supabase, design systems, and forms
- **Automated Timestamps**: Local PowerShell datetime integration (no MCP server required)
- **AI Implementation Mode**: Direct command execution with terminal control options

## 🧠 ATOMIC PLANNING PROTOCOL (MANDATORY)

**CRITICAL**: Based on research from [Cursor context limitations](https://cursor.com/learn/context) and [atomic planning methodology](https://collett.me/atomic-planning-in-cursor/), every MCP interaction MUST follow atomic planning principles to prevent context overload and maintain AI effectiveness.

### 🔬 Context Window Science
**Understanding the Problem**: Large Language Models have limited context windows. As projects grow, feeding too much information causes:
- **Context Amnesia**: AI "forgets" earlier parts of the conversation
- **Quality Degradation**: Responses become less relevant and coherent
- **Duplicate Code**: AI recreates existing functionality it can't "see"
- **Loop Behavior**: Repeated failed attempts without learning

### ⚛️ Atomic Planning Solution
**The Fix**: Break all work into "atomic" tasks - the smallest viable units that can be completed in 1-2 focused sessions.

#### Atomic Task Criteria (ALL MUST BE MET):
1. **Single Objective**: One clear, specific goal
2. **Context Bounded**: Requires ≤5 files in active context
3. **Self-Contained**: Can be completed independently
4. **Verifiable**: Clear success/failure criteria
5. **Session Sized**: Completable in 1-2 Cursor sessions

## 🔗 CONTEXT7 MCP INTEGRATION (ENHANCED AI STAFF)

**NEW**: Context7 MCP Server integration provides AI Staff with up-to-date library documentation for enhanced accuracy and current best practices.

### 🎯 Context7 Enhanced Workflow
**Dual Verification System**: AI Staff now uses a two-layer approach:
1. **Playbook Guidance**: Apply established best practices from our documentation
2. **Context7 Verification**: Query Context7 for current library documentation and patterns
3. **Implementation**: Combine both sources for optimal, current code

### 🛠️ Context7 Tools Available
- **`resolve-library-id`**: Convert library names to Context7-compatible IDs
- **`get-library-docs`**: Fetch up-to-date library documentation with topic focus
- **API Integration**: Direct access to Context7's comprehensive library database

### 📋 Context7 Usage Examples
```
@MCP-REFERENCE.md "Create React component with hooks"

AI Staff will:
1. Apply React playbook patterns (best practices)
2. Query Context7 for latest React hooks documentation
3. Implement with verified, current patterns
4. Result: Modern React component with up-to-date patterns
```

### 🔧 Context7 Configuration
**MCP Server Setup**: Add to your `mcp.json`:
```json
"context7": {
  "url": "https://mcp.context7.com/mcp",
  "headers": {
    "Authorization": "Bearer YOUR_CONTEXT7_API_KEY"
  }
}
```

**API Key**: Get from https://context7.com/dashboard
**Documentation**: See [CONTEXT7-SETUP.md](./docs/guides/CONTEXT7-SETUP.md) for complete setup guide

## 🚀 OPERATIONAL ENHANCEMENTS (PRODUCTION-TESTED)

**Source**: HVAC Estimator Production Deployment  
**Status**: Battle-Tested Patterns  
**Priority**: Mandatory for All AI Agent Operations

These operational enhancements represent critical improvements derived from real-world production deployment experience. Every AI agent operation MUST follow these patterns.

### 1. **Markdown File Organization** 📁

**Pattern**: Consolidate all Markdown (`.md`) files into dedicated documentation folder

**Implementation**:
```
project-root/
├── docs/                          # All documentation centralized
│   ├── deployment/                # Deployment guides
│   ├── authentication/            # Auth setup and patterns
│   ├── design-systems/            # Design system documentation
│   ├── forms/                     # Form patterns and logic
│   └── troubleshooting/           # Debug and troubleshooting
├── MCP-REFERENCE.md               # This file (root level)
├── README.md                      # Project readme (root level)
├── CHANGELOG.md                   # Project changelog (root level)
└── src/                           # Source code
```

**Benefits**:
- Cleaner root directory structure
- Improved project navigability
- Centralized documentation management
- Professional project organization

### 2. **Intelligent Development Server Management** 🔧

**Pattern**: Check for existing dev server before starting new one

**Implementation**:
```bash
# BEFORE running npm run dev, the agent MUST:
1. Check if server is already running on required ports (typically 3000, 3001, etc.)
2. If server detected:
   - Verify server is healthy and responding
   - If healthy: Use existing server
   - If unhealthy/conflicting: Gracefully terminate and start fresh
3. If no server running: Start new server with npm run dev
```

**Agent Workflow**:
```typescript
// Pseudo-code for agent server management
async function startDevServer() {
  // Step 1: Check for existing server
  const serverRunning = await checkPort(3000)
  
  if (serverRunning) {
    const isHealthy = await checkServerHealth('http://localhost:3000')
    
    if (isHealthy) {
      console.log('✅ Development server already running and healthy')
      return 'existing'
    } else {
      console.log('⚠️ Unhealthy server detected, restarting...')
      await terminateProcessOnPort(3000)
    }
  }
  
  // Step 2: Start fresh server
  console.log('🚀 Starting development server...')
  await runCommand('npm run dev')
  return 'started'
}
```

**Benefits**:
- Prevents port conflicts (EADDRINUSE errors)
- Reduces redundant server starts
- Ensures stable development environment
- Saves developer time and frustration

### 3. **Automated Changelog & README Updates** 📝

**Pattern**: Auto-update documentation before git push operations

**Implementation**:
```typescript
// BEFORE any git push, the agent MUST:
1. Get accurate timestamp using: Get-Date -Format "MMMM dd, yyyy 'at' h:mm tt"
2. Update CHANGELOG.md with latest changes and timestamp
3. Update README.md if structural changes made (add/update timestamp)
4. Commit documentation updates
5. THEN perform git push
```

**CHANGELOG.md Update Format**:
```markdown
### Last Updated: October 11, 2025 at 12:25 AM

## [Version] - Description

### Added
- Feature descriptions with atomic task references

### Changed
- Modification descriptions with file references

### Fixed
- Bug fix descriptions with issue references

### Security
- Security improvements with vulnerability references
```

**Mechanism**: 
- **Command**: `Get-Date -Format "MMMM dd, yyyy 'at' h:mm tt"` (PowerShell)
- **Frequency**: Before every git push
- **Automation**: Agent automatically updates both files with accurate timestamps
- **No Dependencies**: Works locally without MCP server configuration

**Benefits**:
- Maintains up-to-date project documentation
- Provides clear version history
- Reduces manual documentation overhead
- Ensures timestamp accuracy

### 4. **Pre-Push Git Confirmation** ⚠️

**Pattern**: Explicit user confirmation before git push

**🚨 CRITICAL PRE-PUSH CHECKLIST (MANDATORY)**:
```
BEFORE executing `git push`, the agent MUST COMPLETE IN ORDER:

✅ STEP 1: Update Timestamps (Enhancement #3)
   - Run: Get-Date -Format "MMMM dd, yyyy 'at' h:mm tt"
   - Update CHANGELOG.md "Last Updated" timestamp
   - Update README.md "Last Updated" timestamp

✅ STEP 2: Display Push Summary
   - Show branch name and remote
   - List files changed
   - Show commit count

✅ STEP 3: Ask Explicit Confirmation
   - Wait for user approval
   - Provide options (Yes/No/Show Diff)

✅ STEP 4: Execute Push (only after confirmation)
   - git push origin [branch]
```

**Confirmation Prompt Template**:
```
📊 Git Push Summary:
Branch: [branch-name]
Remote: [remote-name]
Commits: [number] new commit(s)
Files Changed: [number] file(s)

Changes:
- [List of modified files]

⚠️ CONFIRMATION REQUIRED:
Should I proceed with pushing these changes to Git, or do you have any 
further modifications or issues to address?

Options:
1. ✅ Yes, push changes
2. ❌ No, wait (I need to make more changes)
3. 📋 Show me the diff first
```

**Benefits**:
- Provides final review opportunity
- Prevents unintended pushes
- Ensures user control over version control
- Reduces accidental deployments

### 5. **Explicit Mode Awareness** 🤖

**Pattern**: Always state current operational mode

**Implementation**:
```
EVERY agent response MUST include mode indicator:

[Claude 3.7 Sonnet] - Ask Mode
[Claude 3.7 Sonnet] - Agent Mode
[GPT-4o] - Ask Mode
[o1] - Agent Mode
```

**Mode Capabilities**:
- **Ask Mode**: Full terminal control, manual command execution
- **Agent Mode**: Automated command execution, continuous flow

**Benefits**:
- Enhances transparency
- Helps user understand capabilities
- Guides interaction patterns
- Prevents mode confusion

### 6. **Standardized Response Prefix** 🏷️

**Pattern**: All responses begin with LLM identifier

**🚨 CRITICAL - ABSOLUTELY MANDATORY - NO EXCEPTIONS**:
```
EVERY RESPONSE MUST BEGIN WITH:
[<LLM Name/Version>] - <Mode>

THIS IS NON-NEGOTIABLE AND MUST BE THE FIRST LINE OF EVERY RESPONSE.
```

**Implementation**:
```
MANDATORY RESPONSE FORMAT:
[<LLM Name/Version>] - <Mode>

Examples:
[Claude 3.7 Sonnet] - Ask Mode
[Claude 3.5 Sonnet] - Agent Mode
[Claude Sonnet 4.5] - Agent Mode
[GPT-4o] - Ask Mode
[o1] - Ask Mode
[cursor-small] - Agent Mode
```

**Enforcement Protocol**:
```
BEFORE EVERY RESPONSE:
1. Identify current LLM model name and version
2. Identify current mode (Ask/Agent)
3. Insert prefix as FIRST LINE: [<LLM>] - <Mode>
4. Then provide response content

NEVER skip this step. NEVER forget this prefix.
If prefix is missing, the response is non-compliant.
```

**Benefits**:
- Clearly identifies active LLM model
- Aids in tracking model performance
- Provides consistent user experience
- Enables model-specific optimization
- Ensures accountability and transparency
- Prevents confusion about AI capabilities

### 7. **Dynamic LLM Token Management** 🧠

**Pattern**: Adjust token management based on active LLM's context window

**Token Limits by Model** (from Cursor documentation):

| Model Category | Models | Context Window | Strategy |
|---------------|--------|----------------|----------|
| **Ultra-High Capacity** | o1 | 1,000,000 tokens | Large codebases, extensive context, comprehensive analysis |
| **Premium Tier** | Claude 3.7 Sonnet, Claude 3.5 Sonnet, Claude 3 Opus, GPT-4o, o1-mini, Grok-2, DeepSeek R1 | 200,000 tokens | Medium projects, moderate context, selective files |
| **Standard Tier** | cursor-small, Claude 3.5 Haiku, GPT-4o Mini, o3-mini-high, DeepSeek V3 | 40,000 tokens | Atomic tasks, frequent resets, minimal files |

**Implementation**:
```typescript
// Pseudo-code for dynamic token management
function getContextStrategy(modelName: string) {
  const tokenLimits = {
    'o1': { limit: 1000000, strategy: 'extensive' },
    'claude-3.7-sonnet': { limit: 200000, strategy: 'moderate' },
    'claude-3.5-sonnet': { limit: 200000, strategy: 'moderate' },
    'gpt-4o': { limit: 200000, strategy: 'moderate' },
    'cursor-small': { limit: 40000, strategy: 'atomic' },
    'claude-3.5-haiku': { limit: 40000, strategy: 'atomic' },
    'gpt-4o-mini': { limit: 40000, strategy: 'atomic' },
  }
  
  return tokenLimits[modelName] || { limit: 40000, strategy: 'atomic' }
}

// Apply strategy
const { limit, strategy } = getContextStrategy(currentModel)

if (strategy === 'atomic') {
  // Enforce strict atomic planning: max 5 files, frequent context resets
  maxFilesPerTask = 5
  recommendContextReset = true
} else if (strategy === 'moderate') {
  // Allow medium complexity: max 15 files, selective context resets
  maxFilesPerTask = 15
  recommendContextReset = estimatedTokens > 150000
} else {
  // Extensive context: max 50 files, minimal resets
  maxFilesPerTask = 50
  recommendContextReset = estimatedTokens > 800000
}
```

**Pre-Response Check**:
```typescript
// Before sending response, verify LLM can process its own prefix
function verifyModelCapability(modelName: string, responseContent: string) {
  const hasPrefix = responseContent.startsWith(`[${modelName}]`)
  
  if (!hasPrefix) {
    console.warn(`Missing LLM prefix for ${modelName}`)
    // Add prefix automatically
    return `[${modelName}] - ${mode}\n\n${responseContent}`
  }
  
  return responseContent
}
```

**Benefits**:
- Optimizes token usage per model
- Prevents context window overflows
- Ensures model operates within constraints
- Maximizes AI effectiveness

### 8. **Adaptive Auto Mode Behavior** 🎯

**Pattern**: Adjust behavior based on Cursor's auto-LLM selection

**Auto Mode Considerations** (from [Cursor Pricing](https://cursor.com/docs/account/pricing#auto)):

1. **Dynamic Model Selection**
   - Auto mode intelligently chooses best model for the task
   - Balances capability with cost efficiency
   - Adapts to conversation complexity

2. **Cost Optimization**
   - Uses smaller models for simple tasks
   - Escalates to premium models for complex tasks
   - Minimizes unnecessary premium usage

3. **Context Management**
   - Handles long conversations effectively
   - Automatically manages context window
   - Prevents context overflow

4. **Performance Optimization**
   - Routes tasks to optimal model
   - Maintains conversation continuity
   - Adapts to user interaction patterns

**Implementation**:
```typescript
// Agent adapts behavior based on auto-selected model
if (mode === 'auto') {
  // Let Cursor choose optimal model
  // Agent adapts to selected model's capabilities
  const detectedModel = getCurrentModel()
  const strategy = getContextStrategy(detectedModel)
  
  console.log(`[Auto Mode] Using ${detectedModel} with ${strategy.strategy} strategy`)
  
  // Apply model-specific optimizations
  applyOptimizationsFor(detectedModel)
}
```

**Benefits**:
- Platform alignment with Cursor's intent
- Optimized resource utilization
- Reduced operational costs
- Improved performance

### 9. **Enhanced Context Management by Token Limit** 📊

**Strategies by Model Tier**:

#### 40k Token Models (cursor-small, Claude 3.5 Haiku, GPT-4o Mini)
```
Strategy: STRICT ATOMIC PLANNING

- Max 5 files per task
- Frequent context resets (every 2-3 tasks)
- Minimal file attachments
- Single-focus operations
- Clear session boundaries
- Aggressive atomic decomposition
```

#### 200k Token Models (Claude 3.7 Sonnet, GPT-4o, o1-mini)
```
Strategy: MODERATE CONTEXT USAGE

- Max 15 files per task
- Moderate context resets (every 5-7 tasks)
- Selective file attachments
- Medium-complexity operations
- Flexible session boundaries
- Balanced atomic decomposition
```

#### 1M Token Models (o1)
```
Strategy: EXTENSIVE CONTEXT

- Max 50 files per task
- Minimal context resets (only when needed)
- Comprehensive file analysis
- Large-scale operations
- Extended session boundaries
- Natural atomic decomposition
```

**Implementation Matrix**:

| Task Type | 40k Models | 200k Models | 1M Models |
|-----------|-----------|-------------|-----------|
| Single file edit | ✅ Optimal | ✅ Optimal | ✅ Optimal |
| Multi-file feature (5-10 files) | ⚠️ Decompose | ✅ Optimal | ✅ Optimal |
| Large refactor (20+ files) | ❌ Decompose | ⚠️ Decompose | ✅ Optimal |
| Architecture review (50+ files) | ❌ Not recommended | ❌ Decompose | ✅ Optimal |

**Benefits**:
- Model-optimized workflows
- Prevents context overload
- Maximizes AI effectiveness
- Reduces errors and loops

### 10. **Deep Exploration Protocol Before Implementation** 🔍

**Pattern**: Comprehensive understanding before any code changes

**MANDATORY Workflow**:
```
BEFORE writing code, agent MUST:
1. Explore existing codebase thoroughly
2. Understand current patterns and dependencies
3. Reason deeply about world-class approach
4. Generate and critique multiple solutions
5. Propose final plan
6. WAIT for user approval
```

**Benefits**:
- Prevents incorrect implementations
- Ensures architectural consistency
- Reduces rework and bugs
- Aligns with user intent

### 11. **Pre-Implementation Clarification Protocol** ❓

**Pattern**: Explicit clarification before coding

**MANDATORY Workflow**:
```
BEFORE implementing, agent MUST:
1. Ask clarifying questions for ambiguities
2. Present alternatives as yes/no questions
3. Offer improvements as option sets (A, B, C)
4. Ensure full task understanding
5. Get explicit confirmation
```

**Question Format**:
- **Yes/No**: "Should I [action]? (Yes/No)"
- **Options**: "Which approach? A) [opt1], B) [opt2], C) [opt3]"
- **Clarity**: "To clarify: [question]?"

**Benefits**:
- Prevents misunderstood requirements
- Reduces implementation errors
- Improves solution quality
- Ensures user satisfaction

### 12. **BMAD-METHOD™ Agentic Workflow** 🤖 (Optional)

**Pattern**: AI-driven agentic planning and development methodology

**What is BMAD-METHOD™?**
Breakthrough Method for Agile AI-Driven Development - a two-phase approach using specialized AI agents:

**Phase 1 - Agentic Planning (Web UI)**:
- Analyst, PM, and Architect agents collaborate with you
- Creates detailed PRD (Product Requirements Document)
- Develops comprehensive Architecture documents
- Human-in-the-loop refinement for consistency
- Eliminates planning inconsistency

**Phase 2 - Context-Engineered Development (IDE)**:
- Scrum Master transforms plans into hyper-detailed stories
- Dev agent receives complete context in story files
- QA agent validates against specifications
- Eliminates context loss through embedded context

**When to Suggest**:
```
Suggest BMAD-METHOD™ when:
- Complex full-stack projects with multiple domains
- AI-first development teams comfortable with agentic workflows
- Rapid prototyping requiring quality and consistency
- Knowledge transfer needs (new team members, documentation)
- Non-software projects (creative writing, business strategy via expansion packs)

User signals:
- "Can AI help me plan the architecture?"
- "I need AI agents to build this"
- "How can AI understand full context?"
- "I want AI-driven planning and development"
```

**Setup & Resources**:
- **Quick Start**: `npx bmad-method install`
- **Repository**: https://github.com/bmad-code-org/BMAD-METHOD
- **Requirements**: Node.js v20+
- **Integrations**: Gemini Gems, CustomGPT, IDE

**Integration with MCP**:
- Use BMAD for high-level planning phase
- Use MCP atomic planning for execution phase
- Complementary approaches (BMAD planning → MCP implementation)

**Benefits**:
- Specialized AI agents for each role
- Context embedded in story files
- Web UI for planning, IDE for development
- Expansion packs for non-software domains
- Human oversight at decision points

### 13. **Spec-Driven Development Protocol** 📋 (Optional)

**Pattern**: Specification-first development approach

**What is Spec-Driven Development?**
A methodology where specifications (specs) drive the entire development lifecycle - write specs before writing code.

**Core Principles**:
- **Spec-First**: Write specifications before implementation
- **Single Source of Truth**: Specs define expected behavior
- **Living Documentation**: Specs evolve with project, always current
- **Executable Specs**: Automated validation and testing
- **Collaborative Design**: Cross-functional team alignment

**When to Suggest**:
```
Suggest Spec-Driven Development when:
- Requirements-heavy or compliance-driven projects (healthcare, finance)
- Cross-functional teams needing clear communication contracts
- API and contract-first development
- Quality-critical systems requiring executable specifications
- Legacy system enhancement with clear behavioral documentation

User signals:
- "I need clear requirements first"
- "How do we define the contract before coding?"
- "We need testable documentation"
- "Can we ensure everyone understands the spec?"
```

**Workflow**:
1. Write specification defining expected behavior
2. Review spec with stakeholders for alignment
3. Implement code to meet specification
4. Validate implementation against spec (automated)
5. Update spec as requirements evolve

**Integration with MCP**:
- Use Spec-Driven for planning/requirements phase
- Use MCP atomic planning for implementation phase
- Specs provide clear acceptance criteria for atomic tasks

**Resources**:
- **GitHub Spec-Kit**: https://github.com/github/spec-kit
- **Spec-Driven Development Guide**: See Spec-Kit README

**Benefits**:
- Reduced rework through upfront clarity
- Better team communication and alignment
- Testable, executable documentation
- Clear acceptance criteria
- Alignment between stakeholders and developers

---

## 🤖 ENHANCED MANDATORY WORKFLOW PROTOCOL

**CRITICAL**: When @MCP-REFERENCE.md is invoked, the following ATOMIC-AWARE protocol is AUTOMATICALLY ACTIVATED:

### 🚨 RULE #0 - FIRST PRIORITY (BEFORE ANYTHING ELSE)

**EVERY RESPONSE MUST BEGIN WITH LLM PREFIX**:
```
[<LLM Name/Version>] - <Mode>
```

**This is the FIRST LINE of EVERY response. Check this BEFORE processing any request.**

Examples:
- `[Claude Sonnet 4.5] - Agent Mode`
- `[Claude 3.7 Sonnet] - Ask Mode`
- `[GPT-4o] - Agent Mode`
- `[o1] - Ask Mode`

**NO EXCEPTIONS. NO EXCUSES. ALWAYS INCLUDE THIS PREFIX FIRST.**

---

### 🎯 Mode Selection (Agent vs Ask Mode)

**CHOOSE YOUR WORKFLOW MODE** based on your terminal control needs:

#### 🚀 Agent Mode (Full Automation)
**Use When**: You want complete automation with AI executing commands directly
- ✅ **Full Automation**: AI runs terminal commands automatically
- ✅ **Continuous Flow**: Seamless execution without interruption
- ❌ **Terminal Control**: Limited ability to cancel or modify running processes
- ❌ **Read-Only Terminal**: Cannot interrupt AI-initiated commands

#### 💬 Ask Mode (Recommended for Terminal Control)
**Use When**: You need full terminal control and ability to cancel/modify commands
- ✅ **Full Terminal Control**: You can cancel, modify, or stop any command
- ✅ **Interactive Workflow**: AI proposes commands, you approve and run them
- ✅ **Command Transparency**: See exactly what will be executed before running
- ✅ **Cancellation Safety**: Stop any process at any time
- ✅ **All MCP Features**: Complete atomic planning and AI team functionality

### 1. Context Assessment & Planning Phase
**REQUIRED FIRST STEP**: Before any task assignment, assess context requirements:

```
## 🧠 Context Assessment
**Project Type**: [Framework/technology being used]
**Project Size**: [Small <10 files | Medium 10-50 files | Large 50+ files]
**Task Complexity**: [Atomic | Requires Decomposition | Multi-Domain]
**Context Requirements**: [Files needed, estimated tokens]
**Session Strategy**: [Single session | Multi-session atomic sequence]
**Exploration Required**: [Yes/No - Apply Deep Exploration Protocol]
**Clarification Needed**: [Yes/No - Apply Clarification Protocol]
```

**Deep Exploration Protocol** (if new codebase or complex changes):
- Explore existing code before proposing changes
- Understand current patterns and architecture
- Generate multiple solution approaches
- Critique and refine before proposing
- Present final plan for approval

**Pre-Implementation Clarification** (if ambiguities exist):
- Ask clarifying questions before coding
- Present alternatives as yes/no or option sets
- Suggest improvements user may not have considered
- Ensure full understanding before implementation

**Optional Methodology Consideration** (for planning-heavy projects):
- Detect if project would benefit from BMAD-METHOD™ or Spec-Driven Development
- Ask user: "Would you like to use [methodology] for this project? (Yes/No)"
- If yes, provide setup guidance and integrate with MCP workflow
- If no, proceed with standard MCP atomic planning

### 2. Atomic Task Decomposition
**MANDATORY**: All non-atomic requests MUST be decomposed using this template:

```
## ⚛️ Atomic Task Breakdown
**Original Request**: [User's original request]
**Decomposition Reasoning**: [Why this needs to be broken down]

**Atomic Tasks**:
1. **Task**: [Specific atomic task]
   **Files**: [Exact files needed - max 5]
   **Success Criteria**: [How to verify completion]
   **Estimated Context**: [Token estimate if large]

2. **Task**: [Next atomic task]
   **Dependencies**: [Which previous tasks must complete first]
   **Files**: [Exact files needed]
   **Success Criteria**: [Verification method]

**Execution Order**: [Recommended sequence with reasoning]
```

### 3. Team Dispatcher with Atomic Awareness
**ENHANCED DISPATCHER**: Team assignment now includes atomic planning:
- **URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/00_Team_Dispatcher.md
- **Function**: Analyze request, decompose if needed, assign to appropriate AI team member(s)
- **Context Management**: Ensure each assigned task stays within context limits
- **Output**: Atomic task assignment with context boundaries

### 4. Context-Aware Execution
**MANDATORY**: All AI staff responses must include context management:

```
## 📊 Context Management
**Active Files**: [List of files in current context - MAX 5]
**Token Estimate**: [Rough estimate of context usage]
**Session Boundary**: [When to reset context for next task]
**Handoff Instructions**: [What to carry forward to next session]
```

## 💬 ASK MODE WORKFLOW PROTOCOL (RECOMMENDED)

### ASK Mode Philosophy - "Guide Me, I'll Code It"

**ASK MODE IS FOR DEVELOPERS WHO WANT TO:**
- Write code themselves based on expert guidance
- Learn by implementing rather than watching
- Understand WHY before implementing HOW
- Have full control over every line of code
- Build muscle memory through manual coding
- Debug and troubleshoot their own implementations

**AI's Role in ASK Mode:**
- 🎓 **Teacher**: Explains concepts and patterns
- 🗺️ **Guide**: Shows the path, you take the steps
- 📚 **Reference**: Provides examples and documentation
- 🔍 **Reviewer**: Validates your approach before you code
- ❌ **NOT Executor**: You write the code, not the AI

**The ASK Mode Loop:**
1. AI explains the concept and approach
2. AI provides code examples and patterns
3. YOU write the code yourself
4. AI helps you verify it worked
5. AI suggests next steps
6. Repeat

**WHEN USING ASK MODE**: The following protocol ensures full terminal control while maintaining all MCP capabilities:

### ASK Mode Response Format Template (Manual Coding Focus)

Every ASK mode response MUST follow this enhanced structure:

**🚨 CRITICAL FIRST STEP - MANDATORY LLM PREFIX**:
```
[<LLM Name/Version>] - Ask Mode
```
**MUST be the very first line of EVERY response. NO EXCEPTIONS.**

```
[<LLM Name/Version>] - Ask Mode

## 🧠 Context Assessment
**Project Type**: [Framework/technology]
**Task Complexity**: [Atomic/Requires Decomposition]
**Your Skill Level**: [Beginner/Intermediate/Advanced - adjust explanation detail]
**Learning Focus**: [What you'll learn by implementing this]

## 🎯 What We're Building
**Goal**: [Clear, simple explanation of what you're about to create]
**Why This Approach**: [Reasoning behind the solution]
**Expected Outcome**: [What it should do when you're done]

## 📚 Concepts You Need (Pre-Implementation Learning)
**Key Concepts**:
- **[Concept 1]**: [Simple explanation]
- **[Concept 2]**: [Simple explanation]
- **[Concept 3]**: [Simple explanation]

**Documentation References**:
- [Link to official docs for concept 1]
- [Link to official docs for concept 2]

**Recommended Reading** (5 min before coding):
- [Specific documentation section to read]
- [Why this matters for your implementation]

## 🛠️ Implementation Guide (You Code This)

### Step 1: [First Atomic Step]
**What to do**: [Clear instruction in plain English]

**Where**: `path/to/file.ext`

**Code to add/modify**:
```language
// Clear comments explaining what each part does
// and WHY it's needed
[example code snippet you can reference]
```

**⚠️ Important Notes**:
- [Common mistake to avoid]
- [Why this approach vs alternatives]

**✅ Verify Step 1**:
- [ ] Check: [How to verify this step worked]
- [ ] Expected result: [What you should see]
- [ ] If it doesn't work: [Quick troubleshooting tip]

---

### Step 2: [Second Atomic Step]
**What to do**: [Clear instruction in plain English]

**Where**: `path/to/file.ext`

**Code to add/modify**:
```language
// Clear comments explaining each part
[example code snippet]
```

**🔗 How this connects to Step 1**:
[Explain how this builds on previous step]

**✅ Verify Step 2**:
- [ ] Check: [How to verify]
- [ ] Expected result: [What you should see]
- [ ] Debug tip: [Common issue and fix]

---

### Step 3: [Third Atomic Step]
[Continue pattern...]

## 🧪 Testing Your Implementation

**Manual Testing Steps**:
1. **Test Case 1**: [What to test]
   - Action: [What to do]
   - Expected: [What should happen]
   - Command: `npm run dev` or test command

2. **Test Case 2**: [What to test]
   - Action: [What to do]
   - Expected: [What should happen]

**Automated Testing** (optional, if applicable):
```bash
# Test command to run
npm test [specific-test-file]
```

## 🐛 Troubleshooting Guide

**Common Issues You Might Encounter**:

### Issue 1: [Common error message or problem]
**Symptoms**: [What you'll see]
**Cause**: [Why it happens]
**Fix**: [Step-by-step solution]
**Verify**: [How to confirm it's fixed]

### Issue 2: [Another common issue]
**Symptoms**: [What you'll see]
**Cause**: [Why it happens]
**Fix**: [Step-by-step solution]

## ✅ Verification Checklist

**Before Moving On**:
- [ ] All code compiles without errors
- [ ] Manual tests pass (see Testing section)
- [ ] Console has no unexpected errors
- [ ] Browser/app behaves as expected
- [ ] I understand WHY each part works

**Questions to Ask Yourself**:
- Can I explain what each part does?
- What would break if I removed X?
- How does this fit into the larger system?

## 🎓 Learning Recap

**What You Just Learned**:
- [Key skill 1]
- [Key skill 2]
- [Key concept internalized]

**How This Applies Elsewhere**:
[Where else in your project this pattern is useful]

## 🚀 Next Steps (Your Choice)

**Option A: Continue Building** (recommended path)
- Next atomic task: [What to tackle next]
- Why this order: [Reasoning]
- Estimated time: [Time estimate]

**Option B: Deepen Understanding**
- Explore: [Related concept to study]
- Try: [Experiment suggestion]
- Read: [Documentation reference]

**Option C: Refactor/Improve**
- Consider: [Improvement opportunity]
- Optimize: [Performance enhancement]
- Secure: [Security consideration]

## 📋 Quick Command Reference (If Needed)

**Development Commands**:
```bash
# Start dev server (if not running)
npm run dev

# Run tests
npm test

# Check types (TypeScript)
npm run type-check

# Lint code
npm run lint
```

**Git Commands** (when ready to commit):
```bash
# See what changed
git status
git diff

# Stage and commit
git add [files]
git commit -m "feat: [what you implemented]"
```

## 📚 Resource Citations
- **Primary Reference**: [Main documentation]
- **Pattern Source**: [Where this pattern comes from]
- **Further Reading**: [Deep dive resources]
```

### Learning-Focused ASK Mode Benefits

**🎓 Educational Advantages**:
- **Active Learning**: You write every line, building real understanding
- **Concept Mastery**: Explanations focus on WHY, not just WHAT
- **Debugging Skills**: You troubleshoot your own code, building confidence
- **Pattern Recognition**: Repeated manual implementation builds intuition
- **Long-term Retention**: Typing code yourself cements learning

**💪 Skill Building**:
- **Muscle Memory**: Manual coding builds typing and syntax familiarity
- **Problem Solving**: Working through issues yourself develops troubleshooting skills
- **Independence**: Reduces reliance on AI generation over time
- **Code Ownership**: Every line is yours, you understand it completely
- **Interview Preparation**: Practice explaining code you wrote yourself

**🎯 When to Use ASK Mode for Learning**:
- Learning a new framework or library
- Practicing a specific pattern or technique
- Building portfolio projects you need to explain
- Preparing for technical interviews
- Teaching yourself best practices
- Any time understanding > speed

### Manual Implementation Tips (ASK Mode Best Practices)

**Before You Start Coding**:
1. Read the entire implementation guide first
2. Understand the concepts section completely
3. Have official documentation open in another tab
4. Set up your testing method (npm run dev ready)
5. Clear understanding of success criteria

**While You Code**:
1. Type code manually, don't copy/paste (builds muscle memory)
2. Read and understand each comment before typing
3. Experiment: try changing values to see what breaks
4. Verify frequently: test after each small change
5. Keep a notepad for questions that arise

**After Each Step**:
1. Run verification checks immediately
2. If it doesn't work, try debugging yourself first
3. Use troubleshooting guide when stuck
4. Ask AI for clarification if needed (not solutions)
5. Don't move forward until step works

**Maximizing Learning**:
- **Ask "Why" questions**: Request explanations, not just solutions
- **Request alternatives**: "What's another way to do this?"
- **Seek deeper understanding**: "How does this work under the hood?"
- **Practice variations**: "What if I wanted to do X instead?"
- **Review patterns**: "Where else would I use this pattern?"

### ASK Mode Example Prompts (Guide Me Style)

**Instead of**: "Build me a login form"
**Use**: "Guide me to build a login form step-by-step. Explain concepts first, then I'll code it."

**Instead of**: "Fix this code [paste]"
**Use**: "I'm getting [error]. Help me understand what's wrong so I can fix it myself."

**Instead of**: "Add authentication"
**Use**: "I want to learn authentication. Break it into atomic steps and explain each concept before I implement."

**Instead of**: "Optimize this"
**Use**: "Review my code and suggest improvements. Explain why each improvement matters so I can implement them."

**Pattern**: 
- ✅ "Guide me to..."
- ✅ "Explain how I should..."
- ✅ "Help me understand..."
- ✅ "What approach should I take..."
- ❌ "Build me..."
- ❌ "Create..."
- ❌ "Implement..."

### Traditional ASK Mode Benefits (Command Execution)

**When You Need Command-Based Workflow**:
- **Full Control**: You decide when and how to execute each command
- **Safety First**: Review all commands before execution
- **Cancellation**: Stop any process at any time
- **Modification**: Customize commands before running
- **Learning**: Understand exactly what each command does
- **Debugging**: Easily troubleshoot issues step by step

## 📋 ENHANCED AUTOMATIC WORKFLOW EXECUTION

### Atomic-Aware Response Format Template
Every MCP-REFERENCE.md response MUST follow this enhanced structure:

**🚨 CRITICAL FIRST STEP - MANDATORY LLM PREFIX**:
```
[<LLM Name/Version>] - <Mode>
```
**MUST be the very first line of EVERY response. NO EXCEPTIONS.**

```
[<LLM Name/Version>] - <Mode>

## 🧠 Context Assessment
**Project Type**: [Framework/technology being used]
**Project Size**: [Small/Medium/Large]
**Task Complexity**: [Atomic/Requires Decomposition/Multi-Domain]
**Context Strategy**: [Single session/Multi-session sequence]

## ⚛️ Atomic Task Analysis
[If task is already atomic:]
**Task Classification**: Atomic - ready for execution
**Estimated Context**: [Files and token estimate]

[If task needs decomposition:]
**Decomposition Required**: Yes
**Atomic Tasks**: [Numbered list of atomic tasks]
**Recommended Sequence**: [Execution order]

## 🎯 Team Dispatcher Analysis
**Request Type**: [API/Database/Frontend/DevOps/Security/Architecture/Multi-domain]
**Complexity**: [Simple/Moderate/Complex/Multi-domain]
**Assigned Role(s)**: [Specific AI team member(s)]
**Reasoning**: [Why this role was selected + atomic considerations]

## 👨‍💻 [Role Name] Response
**Referenced Resources**: 
- [List of GitHub URLs consulted]
- [Specific documentation sections used]

**Context Management**:
- **Active Files**: [Max 5 files for this task]
- **Token Budget**: [Estimated context usage]
- **Session Scope**: [What's included in this session]

**Solution**:
[Detailed response based on Development Resources - scoped to atomic task]

**Implementation Steps**:
1. [Step with resource reference + file context]
2. [Step with resource reference + file context]
3. [Step with resource reference + file context]

**Verification**:
- [How to test/validate this atomic task]
- [Expected outcomes for this specific task]
- [When to proceed to next atomic task]

## 📊 Summary Prompt (Token-Optimized)
**Need summary? Tech/Business/Both/Skip**

---

*If user requests summary, provide below:*

## 📊 DUAL SUMMARY (Optional - Ask User)

### 🔧 Technical Summary (For Developers)
**Current Task Scope**: [What this atomic task accomplishes]
**Tech Stack**: [Technologies used in this specific task]
**Architecture Impact**: [How this task fits in overall architecture]
**Performance**: [Performance considerations for this task]
**Security**: [Security measures for this specific task]
**Dependencies**: [What this task depends on/affects]
**Next Atomic Task**: [What should be tackled next]

### 📈 Business Summary (For Project Managers & Executives)
**Task Progress**: [What was accomplished in business terms]
**Feature Status**: [How this contributes to overall feature]
**Business Value**: [Specific value delivered by this atomic task]
**Timeline Impact**: [How this affects project timeline]
**Resource Efficiency**: [Benefits of atomic approach for this task]
**Risk Management**: [How atomic approach reduces risks]
**Next Milestone**: [What business milestone is next]

## 📚 Resource Citations
- **Primary Reference**: [Main GitHub URL used]
- **Supporting Documentation**: [Additional URLs referenced]
- **Best Practices Applied**: [Specific patterns followed]
- **Atomic Planning Sources**: 
  - https://collett.me/atomic-planning-in-cursor/
  - https://cursor.com/learn/context
```

### Enhanced Enforcement Rules

**🚨 RULE #0 (HIGHEST PRIORITY - NEVER SKIP)**: 
**MANDATORY LLM PREFIX**: Every response MUST begin with `[<LLM Name/Version>] - <Mode>` as the FIRST LINE. This is NON-NEGOTIABLE and supersedes all other rules.

1. **No Direct Responses**: Never respond without Team Dispatcher analysis
2. **Resource Verification**: All solutions must cite GitHub repository sources
3. **Role Consistency**: Stay in character of assigned AI team member
4. **Quality Assurance**: Cross-reference multiple sources for accuracy
5. **Completeness**: Provide implementation steps and verification methods
6. **OPTIONAL DUAL SUMMARY**: Ask user at end: "Need summary? (Tech/Business/Both/Skip)"
7. **ATOMIC PLANNING COMPLIANCE**: All tasks must be atomic or properly decomposed
8. **CONTEXT AWARENESS**: Monitor and manage context window usage
9. **SESSION BOUNDARIES**: Clearly define when to reset context for next task

**ENFORCEMENT PRIORITY**: Rule #0 (LLM Prefix) > All other rules. If you ever forget the prefix, the entire response is considered non-compliant regardless of content quality.

## 🤖 AI Team System

### Team Dispatcher (Enhanced)
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/00_Team_Dispatcher.md

The AI Team Dispatcher now includes atomic planning capabilities and coordinates all development tasks using specialized roles with context awareness and Context7 integration:

### Core Development Roles (Atomic-Aware)

#### Research Engineer
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/10_Research_Engineer.md
- **Responsibilities**: Technical research, data validation, solution investigation, framework analysis
- **Specialties**: Web research using @Web, multi-source validation, technical analysis, implementation research, Context7 integration
- **Atomic Focus**: Single research queries, targeted validation, focused analysis, atomic documentation
- **Framework Expertise**: Multi-framework research, technology trends, integration patterns, performance optimization
- **Context7 Integration**: Uses Context7 for up-to-date library documentation and current best practices

#### Development Head
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/01_Development_Head.md
- **Responsibilities**: Project architecture, technical leadership, code standards, atomic task planning
- **Specialties**: System design, technology decisions, team coordination, context management, Context7 integration
- **Atomic Focus**: Breaks down architectural decisions into implementable atomic tasks
- **Framework Expertise**: Multi-framework architecture patterns (Motia, Next.js, React, Vue, Angular)
- **Context7 Integration**: Uses Context7 for current architecture patterns and best practices

#### Backend Engineer  
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/03_Backend_Engineer.md
- **Responsibilities**: API development, database design, server-side logic, atomic implementation
- **Specialties**: Multi-framework backend development, event systems, state management, authentication, context-bounded coding, Context7 integration
- **Atomic Focus**: Implements single endpoints, individual event handlers, isolated database operations
- **Framework Expertise**: Motia steps, Next.js API routes, Express.js, FastAPI, microservices
- **Context7 Integration**: Uses Context7 for current backend patterns and API best practices

#### Frontend Engineer
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/04_Frontend_Engineer.md  
- **Responsibilities**: UI/UX implementation, client-side logic, responsive design, atomic component development
- **Specialties**: React, Next.js, Vue, Angular, TypeScript, modern CSS, component architecture, Context7 integration
- **Atomic Focus**: Single components, individual features, isolated styling tasks
- **Framework Expertise**: React hooks, Next.js App Router, Vue Composition API, Angular standalone components
- **Context7 Integration**: Uses Context7 for current frontend patterns and component best practices

#### DevOps Engineer
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/05_DevOps_Engineer.md
- **Responsibilities**: Deployment, CI/CD, infrastructure, monitoring, atomic deployment tasks
- **Specialties**: Docker, Vercel, AWS, cloud platforms, automation, performance optimization, Context7 integration
- **Atomic Focus**: Single configuration files, individual deployment steps, isolated monitoring setups
- **Framework Expertise**: Multi-framework deployment patterns, containerization strategies
- **Context7 Integration**: Uses Context7 for current DevOps patterns and deployment best practices

#### Code Reviewer
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/07_Code_Reviewer.md
- **Responsibilities**: Code quality, security review, best practices enforcement, atomic code analysis
- **Specialties**: Static analysis, security patterns, performance review, focused code reviews, Context7 integration
- **Atomic Focus**: Reviews single functions, individual files, specific security concerns
- **Framework Expertise**: Framework-specific best practices, security patterns, performance optimization
- **Context7 Integration**: Uses Context7 for current code review standards and security best practices

#### Database Architect
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/09_Database_Architect.md
- **Responsibilities**: Schema design, query optimization, data modeling, atomic database changes
- **Specialties**: SQL design, indexing, migrations, data integrity, incremental schema evolution, Context7 integration
- **Atomic Focus**: Single table designs, individual migrations, specific query optimizations
- **Framework Expertise**: Multi-framework database integration, ORM patterns, state management
- **Context7 Integration**: Uses Context7 for current database patterns and ORM best practices

## 📚 Development Resources (Multi-Framework Enhanced)

### Core Documentation

#### AI Agent Reference
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/AI-AGENT-REFERENCE.md
- Complete AI agent system documentation with atomic planning integration
- Development workflow patterns optimized for context management
- Memory system integration with session boundary awareness
- Cross-project standards with atomic task templates

#### Quick Reference Guide  
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/QUICK-REFERENCE.md
- Essential commands and patterns for atomic development
- Technology-specific quick starts with context considerations
- Common troubleshooting solutions for context overload issues

#### Full-Stack Development Playbook
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/Full-Stack-Web-Dev-Playbook.md
- Complete web development methodology with atomic planning
- Modern tech stack recommendations with context awareness
- Production deployment patterns using atomic deployment strategies

### Framework-Specific Resources

#### Multi-Framework Patterns
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/frameworks/
- Motia Framework: Event-driven architecture with atomic step development
- Next.js: App Router patterns with atomic component development
- React: Modern patterns with hooks and atomic component design
- Vue.js: Composition API with atomic composable functions
- Angular: Standalone components with atomic service design

### Workflow Management (Atomic-Enhanced)

#### Phased Development System
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/PHASES.md
- 8-phase development process (Discovery → Retrospective) with atomic task integration
- Object-oriented phase management with context boundaries
- Verification gates and quality assurance between atomic tasks

#### Memory System Integration
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/AI_CHANGELOG_INSTRUCTIONS.md
- CHANGELOG.md integration patterns with atomic task tracking
- Memory context management across session boundaries
- Documentation automation for atomic task completion

## 🛠️ Multi-Framework Context (Atomic-Aware)

### Supported Frameworks

#### Motia Framework (Unified Backend System)
**Motia solves backend fragmentation** - A modern backend framework that unifies APIs, background jobs, workflows, and AI Agents into a single core primitive with built-in observability and state management.

**Multi-Language Support** (with atomic development patterns):
- **TypeScript/JavaScript**: APIs, real-time features, web logic (atomic endpoints and handlers)
- **Python**: AI/ML, data science, analytics, image processing (atomic processing tasks)  
- **Ruby**: Reports, templating, data exports, business logic (atomic business operations)
- **Go**: Coming soon for high-performance operations

**Core Architecture**:
- **Steps System**: Everything is a Step - unified primitive for all backend operations
- **Event-Driven**: Unified event system with atomic event design and context boundaries
- **Built-in Observability**: Visual debugger, tracing, and monitoring out of the box
- **State Management**: Atomic operations with trace-scoped persistence and Redis support
- **Zero Configuration**: Production-ready setup with no complex configuration needed

**Step Types** (Atomic Operations):
| Type      | Trigger            | Use Case              | Atomic Focus |
| --------- | ------------------ | --------------------- | ------------ |
| **api**   | HTTP Request       | REST endpoints        | Single endpoint operation |
| **event** | Topic subscription | Background processing | Single event handler |
| **cron**  | Schedule           | Recurring jobs        | Single scheduled task |
| **noop**  | Manual             | External processes    | Single manual operation |

#### Next.js (Full-Stack React Framework)
- **App Router**: File-based routing with atomic page/layout development
- **Server Components**: Atomic server-side rendering with optimal performance
- **API Routes**: Atomic endpoint development with built-in optimization
- **Deployment**: Vercel integration with atomic deployment strategies

#### React (Frontend Library)
- **Component Architecture**: Atomic component design with single responsibility
- **State Management**: Context API, Redux, Zustand with atomic state updates
- **Hooks**: Custom hooks for atomic functionality encapsulation
- **Testing**: Atomic component testing with Jest and React Testing Library

#### Vue.js (Progressive Framework)
- **Composition API**: Atomic composable functions for reusable logic
- **Single File Components**: Atomic component development with scoped styles
- **State Management**: Pinia with atomic store modules
- **Build Tools**: Vite integration with atomic build optimization

#### Angular (Enterprise Framework)
- **Standalone Components**: Atomic component development without modules
- **Services**: Atomic service design with dependency injection
- **RxJS**: Atomic reactive programming patterns
- **Testing**: Atomic unit testing with Jasmine and Karma

### Universal Development Commands (Choose Your Framework)
```bash
# Motia Framework (Optional - Unified Backend)
npx motia@latest create   # Bootstrap unified backend project
cd your-project-name      # Navigate to created project
npx motia dev            # ➜ http://localhost:3000

# Next.js (Optional - Full-Stack React)
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
npm run dev

# React (Optional - Frontend Library)
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev

# Vue.js (Optional - Progressive Framework)
npm create vue@latest my-app
cd my-app
npm install
npm run dev

# Angular (Optional - Enterprise Framework)
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve

# Or use with existing projects - no framework installation required!
```

## 🎯 Usage Patterns (Multi-Framework Enhanced)

**NOTE**: All requests automatically trigger atomic planning analysis and context-aware responses for any framework.

### 🎯 Mode Selection Guidance

#### Use Agent Mode When:
- You want complete automation
- You're comfortable with AI running commands directly
- You don't need to interrupt or modify commands
- You prefer hands-off execution

#### Use Ask Mode When:
- You need full terminal control
- You want to review commands before execution
- You need to cancel or modify running processes
- You prefer step-by-step verification
- You're working with sensitive operations
- You want to learn what each command does

### Starting a New Project (Framework-Flexible)
```
@MCP-REFERENCE.md I'm starting a new [framework-name] project. Please use atomic planning to break down the setup process.
```
**OR for existing projects:**
```
@MCP-REFERENCE.md I have an existing project. Please detect my framework and help me get started.
```
**Expected Flow**: Context Assessment → Framework Detection → Atomic Task Decomposition → Team Dispatcher → Development Head → Framework-specific setup with atomic implementation plan

### Getting Development Help (Context-Aware)
```
@MCP-REFERENCE.md I need help with [specific task] in my [framework] project. Please assess if this needs atomic decomposition.
```
**Expected Flow**: Context Assessment → Framework Analysis → Atomic Analysis → Team Dispatcher → Appropriate AI role → Framework-specific, context-bounded solution

### ASK Mode Usage Examples
```
@MCP-REFERENCE.md I'm using Ask Mode. Help me set up [framework] project with full terminal control.
```
**Expected Flow**: Context Assessment → ASK Mode Protocol → Proposed Commands → Manual Execution → Verification Steps

```
@MCP-REFERENCE.md I need to run git commands but want to review them first. Use Ask Mode workflow.
```
**Expected Flow**: ASK Mode Analysis → Proposed Git Commands → Manual Copy/Paste → User Execution → Verification

### Managing Complex Features (Atomic Decomposition)
```
@MCP-REFERENCE.md I want to build [feature description] in [framework]. Please decompose this into atomic tasks.
```
**Expected Flow**: Context Assessment → Framework Patterns → Atomic Task Breakdown → Multiple AI roles → Coordinated atomic execution sequence

### Code Review and Quality (Framework-Aware)
```
@MCP-REFERENCE.md Please review this [framework] code atomically: [paste specific code section]
```
**Expected Flow**: Context Assessment → Framework Standards → Atomic Scope Definition → Code Reviewer → Framework-specific analysis with context boundaries

### Research-Required Implementation (Research-First Approach)
```
@MCP-REFERENCE.md How should I implement [specific feature] in [framework]? I need to research the best approach first.
```
**Expected Flow**: Context Assessment → Research Triggers → Research Engineer → Multi-source investigation → Implementation recommendations → Specialist Engineer → Code Reviewer

### Best Practice Research
```
@MCP-REFERENCE.md What's the current best practice for [specific implementation] in [framework]?
```
**Expected Flow**: Context Assessment → Research Question → Research Engineer → @Web research → Validation → Best practice recommendations → Implementation guidance

### Cross-Framework Integration Research
```
@MCP-REFERENCE.md I need to integrate [Framework A] with [Framework B]. Please research the optimal approach.
```
**Expected Flow**: Context Assessment → Multi-framework research → Research Engineer → Integration pattern research → Validation → Implementation plan → Development Head coordination

## 📋 Development Standards (Multi-Framework Enhanced)

### Framework-Specific File Naming (Atomic Principles)

#### Motia Framework
- **TypeScript**: `atomic-task-name.step.ts` (one atomic operation per file)
- **JavaScript**: `atomic-task-name.step.js` (one atomic operation per file)
- **Python**: `atomic_task_name_step.py` (one atomic operation per file)
- **Ruby**: `atomic-task-name.step.rb` (one atomic operation per file)

#### Next.js
- **Pages**: `page.tsx` (atomic page components)
- **Layouts**: `layout.tsx` (atomic layout components)
- **API Routes**: `route.ts` (atomic API endpoints)
- **Components**: `ComponentName.tsx` (atomic UI components)

#### React
- **Components**: `ComponentName.tsx` (atomic functional components)
- **Hooks**: `useHookName.ts` (atomic custom hooks)
- **Utils**: `utilityName.ts` (atomic utility functions)
- **Types**: `types.ts` (atomic type definitions)

#### Vue.js
- **Components**: `ComponentName.vue` (atomic single file components)
- **Composables**: `useComposableName.ts` (atomic composition functions)
- **Stores**: `storeName.ts` (atomic Pinia stores)
- **Utils**: `utilityName.ts` (atomic utility functions)

#### Angular
- **Components**: `component-name.component.ts` (atomic standalone components)
- **Services**: `service-name.service.ts` (atomic injectable services)
- **Guards**: `guard-name.guard.ts` (atomic route guards)
- **Pipes**: `pipe-name.pipe.ts` (atomic transformation pipes)

### Universal Code Quality Standards (Context-Aware)
- **Error Handling**: Framework-appropriate error handling with atomic error scoping
- **Logging**: Structured logging with context including atomic task identification
- **Validation**: Framework-specific validation (Zod, Joi, etc.) with atomic validation rules
- **Security**: Input validation, authentication, authorization with atomic security checks
- **Testing**: Atomic test cases with framework-specific testing tools

## 🚀 Project Templates (Multi-Framework Implementation)

### Motia Backend (Event-Driven)
```typescript
// TypeScript Atomic API Step Template
import { ApiRouteConfig, Handlers } from 'motia'
import { z } from 'zod'

export const config: ApiRouteConfig = {
  type: 'api',
  name: 'CreateSingleResource', // Atomic: creates ONE resource
  method: 'POST',
  path: '/api/resource',
  bodySchema: z.object({
    name: z.string(),
    data: z.object({})
  }),
  emits: ['resource.created'], // Single atomic event
  flows: ['resource-flow']
}

export const handler: Handlers['CreateSingleResource'] = async (req, { logger, emit, state }) => {
  logger.info('Atomic API task: Creating single resource', { 
    body: req.body,
    taskType: 'atomic-create'
  })
  
  try {
    // Atomic operation: create exactly one resource
    const resource = { 
      id: crypto.randomUUID(), 
      ...req.body, 
      createdAt: new Date() 
    }
    
    // Atomic state operation
    await state.set('resources', resource.id, resource)
    
    // Atomic event emission
    await emit({ topic: 'resource.created', data: resource })
    
    return { status: 201, body: resource }
  } catch (error) {
    logger.error('Atomic API task failed', { 
      error: error.message,
      taskType: 'atomic-create'
    })
    return { status: 500, body: { error: 'Atomic operation failed' } }
  }
}
```

### Next.js API Route (Atomic Endpoint)
```typescript
// app/api/resources/route.ts - Atomic API Route
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const CreateResourceSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    // Atomic validation
    const body = await request.json()
    const validatedData = CreateResourceSchema.parse(body)
    
    // Atomic database operation
    const resource = {
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date().toISOString()
    }
    
    // Store resource (atomic operation)
    // await db.resources.create({ data: resource })
    
    return NextResponse.json(resource, { status: 201 })
  } catch (error) {
    console.error('Atomic API operation failed:', error)
    return NextResponse.json(
      { error: 'Failed to create resource' },
      { status: 500 }
    )
  }
}
```

### React Component (Atomic UI)
```typescript
// components/ResourceCard.tsx - Atomic Component
import { useState } from 'react'

interface Resource {
  id: string
  name: string
  description?: string
  createdAt: string
}

interface ResourceCardProps {
  resource: Resource
  onUpdate?: (resource: Resource) => void
  onDelete?: (id: string) => void
}

export function ResourceCard({ resource, onUpdate, onDelete }: ResourceCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(resource.name)
  
  // Atomic operation: handle single resource update
  const handleUpdate = async () => {
    if (!onUpdate) return
    
    try {
      const updatedResource = { ...resource, name }
      await onUpdate(updatedResource)
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update resource:', error)
    }
  }
  
  // Atomic operation: handle single resource deletion
  const handleDelete = async () => {
    if (!onDelete) return
    
    try {
      await onDelete(resource.id)
    } catch (error) {
      console.error('Failed to delete resource:', error)
    }
  }
  
  return (
    <div className="resource-card p-4 border rounded-lg">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2">
            <button onClick={handleUpdate} className="px-3 py-1 bg-blue-500 text-white rounded">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="px-3 py-1 bg-gray-500 text-white rounded">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{resource.name}</h3>
          {resource.description && (
            <p className="text-gray-600">{resource.description}</p>
          )}
          <p className="text-sm text-gray-500">
            Created: {new Date(resource.createdAt).toLocaleDateString()}
          </p>
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)} className="px-3 py-1 bg-green-500 text-white rounded">
              Edit
            </button>
            <button onClick={handleDelete} className="px-3 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
```

### Vue.js Composable (Atomic Logic)
```typescript
// composables/useResource.ts - Atomic Composable
import { ref, computed } from 'vue'

interface Resource {
  id: string
  name: string
  description?: string
  createdAt: string
}

export function useResource() {
  const resources = ref<Resource[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  // Atomic operation: create single resource
  const createResource = async (data: Omit<Resource, 'id' | 'createdAt'>) => {
    loading.value = true
    error.value = null
    
    try {
      const resource: Resource = {
        id: crypto.randomUUID(),
        ...data,
        createdAt: new Date().toISOString()
      }
      
      // API call (atomic operation)
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resource)
      })
      
      if (!response.ok) throw new Error('Failed to create resource')
      
      const createdResource = await response.json()
      resources.value.push(createdResource)
      
      return createdResource
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      throw err
    } finally {
      loading.value = false
    }
  }
  
  // Atomic operation: update single resource
  const updateResource = async (id: string, updates: Partial<Resource>) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(`/api/resources/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      })
      
      if (!response.ok) throw new Error('Failed to update resource')
      
      const updatedResource = await response.json()
      const index = resources.value.findIndex(r => r.id === id)
      if (index !== -1) {
        resources.value[index] = updatedResource
      }
      
      return updatedResource
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      throw err
    } finally {
      loading.value = false
    }
  }
  
  // Computed properties
  const resourceCount = computed(() => resources.value.length)
  const hasResources = computed(() => resources.value.length > 0)
  
  return {
    resources: readonly(resources),
    loading: readonly(loading),
    error: readonly(error),
    resourceCount,
    hasResources,
    createResource,
    updateResource
  }
}
```

## 🔧 Advanced Patterns (Multi-Framework Enhanced)

### Authentication & Authorization (Framework-Specific)
**Reference**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/patterns/authentication.md
- **Motia**: Atomic login operations, JWT middleware, event-driven auth flows
- **Next.js**: NextAuth.js integration, middleware protection, atomic auth components
- **React**: Context-based auth, protected routes, atomic auth hooks
- **Vue.js**: Pinia auth store, router guards, atomic auth composables
- **Angular**: JWT interceptors, route guards, atomic auth services

### Real-time Features (Framework-Specific)
**Reference**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/patterns/realtime.md
- **Motia**: Event streams, WebSocket handlers, atomic real-time operations
- **Next.js**: Server-Sent Events, WebSocket API routes, atomic streaming
- **React**: WebSocket hooks, real-time state management, atomic updates
- **Vue.js**: WebSocket composables, reactive real-time data, atomic subscriptions
- **Angular**: WebSocket services, RxJS observables, atomic real-time streams

### State Management (Framework-Specific)
**Reference**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/patterns/state-management.md
- **Motia**: Trace-scoped state, Redis persistence, atomic state operations
- **Next.js**: Server state, client state, atomic state updates
- **React**: Context API, Redux Toolkit, Zustand with atomic actions
- **Vue.js**: Pinia stores, reactive state, atomic mutations
- **Angular**: NgRx, services, atomic state management patterns

## 🎨 PRODUCTION-ENHANCED PATTERNS

**Source**: HVAC Estimator Production Deployment  
**Status**: Battle-Tested in Real-World Applications  
**Documentation**: Complete guides in `docs/` folder

These enhanced patterns represent production-proven solutions for common development challenges, derived from successful deployment experience.

### 1. **Context-Aware Atomic Planning Enhancements** 🧠

**Pattern**: Session boundary management with memory integration

**Key Enhancements**:
- **Context Window Monitoring**: Track token usage per session
- **File Count Limits**: Maximum 5 files per atomic task (strict enforcement)
- **Memory Integration**: Use CHANGELOG.md for context persistence across sessions
- **Handoff Instructions**: Clear context transfer between atomic tasks

**Atomic Task Verification Gates**:
```markdown
**Pre-Task Verification**:
- [ ] Verify context requirements (≤5 files)
- [ ] Estimate token usage for task
- [ ] Confirm task is truly atomic (single objective)
- [ ] Identify dependencies on previous tasks

**Mid-Task Verification**:
- [ ] Check progress against success criteria
- [ ] Monitor context window usage
- [ ] Verify no scope creep occurring

**Post-Task Verification**:
- [ ] Document completion in CHANGELOG.md
- [ ] List next atomic tasks in sequence
- [ ] Prepare handoff instructions
- [ ] Recommend context reset if needed

**Rollback Procedures**:
- [ ] Clear rollback steps documented
- [ ] Version control checkpoint created
- [ ] Dependencies identified for rollback
```

**Benefits**:
- Prevents context amnesia
- Enables multi-session complex projects
- Maintains AI effectiveness at scale
- Clear progress tracking

### 2. **Security-First Development Patterns** 🔒

**Pattern**: Comprehensive pre-deployment security audit

**Pre-Deployment Security Checklist**:
```markdown
## 🔒 Security Audit (Mandatory Before Deployment)

### Credential Audit
- [ ] No hardcoded API keys in code
- [ ] No hardcoded passwords in code
- [ ] No hardcoded database URLs in code
- [ ] All secrets in environment variables
- [ ] .env files in .gitignore
- [ ] No .env files in git history

### Data Exposure Audit
- [ ] Audit all console.log statements
- [ ] Remove PII from console logs
- [ ] Remove sensitive data from error messages
- [ ] No sensitive data in client-side code
- [ ] Server-side validation for all inputs

### Authentication & Authorization
- [ ] Authentication flows tested and working
- [ ] Authorization boundaries tested
- [ ] RLS policies applied (if using Supabase)
- [ ] Session management secure
- [ ] Password reset flow secure

### Environment Variables
- [ ] Development variables configured
- [ ] Preview variables configured
- [ ] Production variables configured
- [ ] No sensitive defaults in code
```

**Production-Ready Security Standards**:
- **Environment Variables**: All secrets via environment variables
- **Console Logging**: No PII in production logs
- **Authentication**: RLS-based authorization patterns (see `docs/authentication/`)
- **Data Handling**: Secure data flow patterns
- **Input Validation**: Server-side validation for all user inputs

**Documentation References**:
- **Complete Guide**: `docs/authentication/SUPABASE_AUTHENTICATION_SETUP.md`
- **RLS Patterns**: Database-level security without hardcoded credentials
- **Magic Link Auth**: Passwordless authentication system
- **Password Reset**: Secure client-side token handling

**Benefits**:
- Prevents security vulnerabilities before deployment
- Ensures compliance with security best practices
- Protects user data and system integrity
- Reduces security-related rollbacks

### 3. **Data-Driven Responsive Design Strategy** 📱

**Pattern**: Optimize for actual user demographics, not edge cases

**User Demographics Analysis Example** (from HVAC Estimator):
```
📊 Actual User Data:
- 55% Mobile users (primary target)
- 35% 1080p Desktop users (secondary target)
- 10% 1440p+ Desktop users (edge case)

🎯 Design Decision:
Optimize for the 90% majority, not the 10% edge case
```

**Container Width Strategy**:
```css
/* ✅ Good: Optimized for majority users */
.container {
  max-width: 1536px;  /* max-w-6xl */
  /* Optimal for:
     - Mobile: Full width with padding
     - 1080p: ~1400px usable width (excellent)
     - 1440p+: ~1400px usable width (acceptable, not stretched)
  */
}

.text-content {
  max-width: 896px;   /* max-w-4xl */
  /* Optimal readability for all screen sizes */
}

/* ❌ Bad: Optimizing for edge case */
.container {
  max-width: 1920px;  /* max-w-screen-2xl */
  /* Problems:
     - Looks stretched on 1080p (35% of users)
     - Too wide for comfortable reading
     - Optimizes for only 10% of users
  */
}
```

**Strategic Design Principles**:
1. **Mobile-First**: Start with mobile design, enhance for desktop
2. **Touch Targets**: Minimum 44x44px for all interactive elements
3. **Readability**: Max width for text content (65-75 characters per line)
4. **Professional Appearance**: Industry-standard container widths
5. **Accessibility**: WCAG compliance with proper contrast ratios

**Performance Impact**:
- Better conversion rates from target users (90% majority)
- Professional appearance for business stakeholders
- Improved accessibility scores
- Faster load times with optimized assets

**Documentation Reference**:
- **Complete Guide**: `docs/design-systems/UNIFIED_BUTTON_SYSTEM.md`
- **Design Patterns**: Scalable design system with global styling
- **Accessibility**: Built-in WCAG 2.1 compliance

**Benefits**:
- Data-driven design decisions
- Better UX for majority of users
- Professional stakeholder presentations
- Measurable conversion improvements

### 4. **Complete Authentication System Patterns** 🔐

**Pattern**: Production-ready authentication with all flows

**Supabase Integration Patterns**:

#### RLS-Based Authorization (No Hardcoded Credentials)
```sql
-- Example: Admin authorization via database
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own admin status
CREATE POLICY "Users can read own admin status"
  ON admin_users
  FOR SELECT
  USING (auth.uid() = user_id);
```

#### Magic Link Authentication (Passwordless)
```typescript
// Simple, secure passwordless login
const { error } = await supabase.auth.signInWithOtp({
  email,
  options: {
    emailRedirectTo: `${window.location.origin}/auth/callback`,
  },
})
```

#### Password Reset Flow (Client-Side Token Handling)
```typescript
// Step 1: Request reset link
await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: `${window.location.origin}/auth/reset-password`,
})

// Step 2: Handle reset on callback page
await supabase.auth.updateUser({
  password: newPassword,
})
```

#### Session Management
```typescript
// Middleware for Next.js (session persistence)
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession() // Refresh session
  return res
}
```

**Security Best Practices**:
- ✅ No hardcoded credentials anywhere
- ✅ Server-side authorization checks
- ✅ Secure client-side token handling
- ✅ User-friendly error messages
- ✅ Proper session persistence

**Redirect URL Configuration** (Critical for Production):
```
Development:
- Site URL: http://localhost:3000
- Redirect URLs:
  - http://localhost:3000/auth/callback
  - http://localhost:3000/auth/confirm
  - http://localhost:3000/auth/reset-password

Preview (Vercel):
- Redirect URLs (wildcard):
  - https://*-username.vercel.app/auth/callback
  - https://*-username.vercel.app/auth/confirm
  - https://*-username.vercel.app/auth/reset-password

Production:
- Site URL: https://yourapp.vercel.app
- Redirect URLs:
  - https://yourapp.vercel.app/auth/callback
  - https://yourapp.vercel.app/auth/confirm
  - https://yourapp.vercel.app/auth/reset-password
```

**Documentation References**:
- **Complete Setup Guide**: `docs/authentication/SUPABASE_AUTHENTICATION_SETUP.md`
- **Deployment Workflow**: `docs/deployment/VERCEL_WORKFLOW_GUIDE.md`
- **Form Patterns**: `docs/forms/CONDITIONAL_FORM_LOGIC.md`

**Benefits**:
- Production-ready authentication from day one
- Multiple authentication methods (password, magic link)
- Database-level security with RLS
- Clear troubleshooting documentation
- No security vulnerabilities from hardcoded credentials

### 5. **Advanced Form Logic Patterns** 📋

**Pattern**: Multi-path forms with conditional validation

**Key Patterns**:
- **Multi-Path Forms**: Different flows based on user selections
- **Warning Screens**: User-friendly validation with clear actions
- **State Management**: React best practices for complex form state
- **Type Safety**: TypeScript patterns for optional fields
- **Dynamic Validation**: Requirements that change based on user input

**Example: New vs Existing Customer Flow**:
```typescript
// Dynamic validation based on customer type
const getRequiredFields = (customerType: 'new' | 'existing' | null): string[] => {
  const baseRequired = ['jobDescription']
  
  if (customerType === 'new') {
    return [...baseRequired, 'name', 'phone', 'address']
  }
  
  if (customerType === 'existing') {
    return [...baseRequired, 'phone'] // Only phone to verify identity
  }
  
  return baseRequired
}
```

**Documentation Reference**:
- **Complete Guide**: `docs/forms/CONDITIONAL_FORM_LOGIC.md`
- **Examples**: Real-world production patterns
- **Testing**: Comprehensive test patterns for conditional logic

**Benefits**:
- Professional user experiences
- Reduced form abandonment
- Clear user guidance
- Type-safe implementations

---

## 📚 PRODUCTION DOCUMENTATION RESOURCES

All new documentation files are located in the `docs/` folder:

### Deployment
- **`docs/deployment/VERCEL_WORKFLOW_GUIDE.md`**: Complete Vercel environment management
  - Clarifies Development/Preview/Production confusion
  - Simplified dev/main → Preview → main → Production workflow
  - Environment variable setup for each environment
  - Supabase redirect URL configuration
  - Branch naming best practices

### Authentication
- **`docs/authentication/SUPABASE_AUTHENTICATION_SETUP.md`**: Complete auth flow documentation
  - Password reset with client-side token handling
  - Magic link (passwordless) authentication
  - RLS-based authorization (no hardcoded credentials)
  - Redirect URL configuration steps
  - Comprehensive troubleshooting guide

### Design Systems
- **`docs/design-systems/UNIFIED_BUTTON_SYSTEM.md`**: Scalable design system pattern
  - Single source of truth for all button styling
  - CSS custom properties for easy theming
  - Mobile-first design with accessibility
  - Works with existing UI libraries
  - Brand consistency patterns

### Forms
- **`docs/forms/CONDITIONAL_FORM_LOGIC.md`**: Advanced form patterns
  - Multi-path forms based on user selections
  - Warning screens with clear user actions
  - React state management best practices
  - TypeScript patterns for optional fields
  - Professional validation messaging

---

## 📊 Project Context (Multi-Framework Aware)

### Framework Detection & Analysis
When working on any project, the AI agent will automatically analyze:
- **Framework Identification**: Detect project type from package.json, file structure, imports
- **Atomic Operation Assessment**: Evaluate existing code for atomic patterns
- **Context Requirements**: Assess file count and complexity for optimal context management
- **Framework-Specific Patterns**: Apply appropriate patterns and best practices
- **Cross-Framework Integration**: Handle multi-framework projects (e.g., Next.js + Motia backend)

### Adaptive Framework Assistance
The AI agent adapts its assistance based on detected framework:
- **Framework-Specific Standards**: Apply appropriate coding standards and patterns
- **Atomic Task Decomposition**: Break down tasks according to framework capabilities
- **Context Optimization**: Manage context based on framework file organization
- **Performance Considerations**: Apply framework-specific optimization strategies
- **Deployment Strategies**: Use appropriate deployment patterns for each framework

## 🎯 MCP Benefits (Multi-Framework Enhanced)

### Zero Maintenance (Framework-Agnostic)
- **Always Up-to-Date**: Resources fetched from main repository with multi-framework support
- **No Local Installation**: Only this single file needed per project with full framework capabilities
- **Cross-Project Portability**: Copy once, use everywhere with any supported framework
- **Automatic Updates**: Latest patterns and best practices for all supported frameworks

### Comprehensive Coverage (Multi-Framework Optimized)
- **Full Development Lifecycle**: Discovery through deployment with framework-specific atomic tasks
- **Multi-Framework Support**: Motia, Next.js, React, Vue, Angular with atomic coordination
- **Production-Ready**: Battle-tested patterns and standards for each framework
- **Team Collaboration**: Standardized workflows optimized for any framework choice

### AI Integration (Framework-Intelligent)
- **Seamless Cursor AI Integration**: Natural language assistance with framework awareness
- **Context-Aware Responses**: Framework-specific recommendations within optimal context boundaries
- **Automated Task Management**: TODO tracking with framework-appropriate atomic granularity
- **Quality Assurance**: Built-in code review with framework-specific best practices
- **Automatic Team Dispatch**: Every request processed with framework expertise
- **Resource-Based Solutions**: All responses backed by framework-specific documentation
- **Dual Communication**: Technical summaries for developers + business summaries for managers
- **Atomic Planning Integration**: Prevents context overload across all supported frameworks

## 📝 Usage Instructions (Multi-Framework Enhanced)

### Prerequisites
**CHOOSE YOUR FRAMEWORK**: Select and install the framework that best fits your project needs. All frameworks are fully supported with atomic planning integration.

#### Motia Framework (Optional)
**FOR UNIFIED BACKEND PROJECTS**: Choose Motia if you need a unified backend system that combines APIs, background jobs, workflows, and AI Agents.

```bash
# 1. Bootstrap a New Motia Project (REQUIRED FIRST STEP)
npx motia@latest create   # runs the interactive terminal

# Follow the prompts to pick a template, project name, and language
# This creates a complete project structure with all necessary files

# 2. Navigate to your new project
cd your-project-name

# 3. Start the Workbench (includes REST APIs, visual debugger, multi-language support)
npx motia dev   # ➜ http://localhost:3000

# 4. Verify installation and check version
npx motia --version
```

**What you get out of the box:**
- ✅ REST APIs with validation
- ✅ Visual debugger & tracing (Workbench UI)
- ✅ Multi-language support (JavaScript, TypeScript, Python, Ruby)
- ✅ Event-driven architecture with unified state management
- ✅ Zero configuration setup
- ✅ Built-in observability and monitoring
- ✅ Production-ready deployment patterns

**Featured Examples** (from official repository):
- 🏆 **ChessArena.ai**: Full-featured chess platform with multi-agent LLM evaluation
- 🤖 **AI Research Agent**: Web research with iterative analysis
- 💬 **Streaming Chatbot**: Real-time AI responses with WebSocket integration
- 📧 **Gmail Automation**: Smart email processing workflows
- 📊 **Finance Agent**: Real-time market analysis and reporting

**Deployment Options**:
- 🚀 **Motia Cloud**: Production deployment with built-in scaling
- 🐳 **Docker**: Containerized deployment for any cloud provider
- ☁️ **Self-Hosted**: Deploy to AWS, GCP, Azure, or any VPS

#### Next.js (Optional)
**FOR FULL-STACK REACT PROJECTS**: Choose Next.js for React-based applications with server-side rendering and API routes.
```bash
# Create new Next.js project
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
```

#### React (Optional)
**FOR FRONTEND APPLICATIONS**: Choose React for client-side applications and component-based UIs.
```bash
# Create new React project with Vite
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

#### Vue.js (Optional)
**FOR PROGRESSIVE APPLICATIONS**: Choose Vue.js for progressive web applications with composition API.
```bash
# Create new Vue project
npm create vue@latest my-app
cd my-app
npm install
```

#### Angular (Optional)
**FOR ENTERPRISE APPLICATIONS**: Choose Angular for large-scale enterprise applications with TypeScript.
```bash
# Install Angular CLI and create project
npm install -g @angular/cli
ng new my-app
cd my-app
```

### Setup Steps (Framework-Agnostic)
1. **Choose Your Framework** (optional): Select and install any supported framework using the commands above, or use with existing projects
2. **Copy this file** to your project root as `MCP-REFERENCE.md`
3. **Select Your Mode**: Choose Agent Mode (automation) or Ask Mode (terminal control)
4. **Reference in Cursor AI** using `@MCP-REFERENCE.md [your request]`
5. **Automatic Framework Detection**: The system will detect your framework automatically
6. **Expect atomic decomposition** for complex tasks automatically
7. **Follow framework-specific atomic task sequences** as provided by the AI team system
8. **Execute Commands**: Agent Mode runs automatically, Ask Mode provides proposed commands
9. **Verify each atomic task** before proceeding to the next
10. **Reset context** between major atomic task sequences as recommended

### Atomic Planning Best Practices (Universal)
1. **Start with Planning**: Always begin complex projects with atomic task decomposition
2. **Respect Context Limits**: Keep active file count ≤5 per atomic task regardless of framework
3. **Verify Atomicity**: Ensure each task has single, clear objective within framework constraints
4. **Manage Sessions**: Reset context when recommended by the system
5. **Track Progress**: Use atomic task completion as progress milestones
6. **Framework Awareness**: Let the system detect and adapt to your framework choice

## 🔗 Quick Links (Multi-Framework Enhanced)

- **Main Repository**: https://github.com/lovinglifemediawebdev/ai-agent-mcp
- **Documentation**: https://github.com/lovinglifemediawebdev/ai-agent-mcp/tree/main/devdocs
- **Framework Templates**: https://github.com/lovinglifemediawebdev/ai-agent-mcp/tree/main/templates
- **Examples**: https://github.com/lovinglifemediawebdev/ai-agent-mcp/tree/main/examples
- **Atomic Planning Research**: https://collett.me/atomic-planning-in-cursor/
- **Cursor Context Guide**: https://cursor.com/learn/context

### Framework-Specific Resources
- **Motia Documentation**: https://motia.dev/docs
- **Motia Official Repository**: https://github.com/MotiaDev/motia (8.7k+ stars)
- **Motia Latest Releases**: https://github.com/MotiaDev/motia/releases (Current: v0.7.2-beta.134)
- **Motia Examples**: https://github.com/MotiaDev/motia-examples (20+ production examples)
- **Motia Quickstart**: Bootstrap with `npx motia@latest create`
- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Vue.js Documentation**: https://vuejs.org/guide/
- **Angular Documentation**: https://angular.io/docs

---

**Happy coding with atomic AI agents across all frameworks! 🤖⚛️✨**

*This enhanced MCP reference file provides complete context for AI-assisted development across multiple frameworks with integrated atomic planning methodology. All resources are dynamically loaded from the main repository while maintaining optimal context management for sustained AI effectiveness at any project scale, regardless of your chosen technology stack.*
