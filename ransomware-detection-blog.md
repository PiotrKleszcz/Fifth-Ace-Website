# How to Detect Ransomware Before It's Too Late: A Practical Guide for UK SMEs

By Piotr Kleszcz, Fifth Ace · 6 min read · July 2026

---

By the time you see a ransom note, the damage is already done. Your files are encrypted, your backups are the only thing standing between you and a payout decision, and every hour of downtime is costing money.

The real question isn't "how do we recover after encryption?" It's "how do we catch it *while it's happening* — before it spreads past a handful of files?"

We built a detection lab to test exactly that, using the same techniques a monitoring system would rely on in a live environment.

> **Important:** No backup strategy replaces early detection. Backups tell you how to recover. Detection tells you *when to stop the bleeding* — often the difference between losing a folder and losing a file server.

## Two Signals That Catch Ransomware Early

Ransomware behaves in predictable ways, and two signals show up well before an attacker finishes the job:

**1. Extension changes.** Ransomware renames files as it encrypts them — `.txt` becomes `.locked`, `.docx` becomes `.encrypted`, and so on. A script watching for unexpected extension changes across a file system catches this in seconds, no specialised threat intelligence required.

**2. Shannon entropy.** Encrypted data looks statistically different from normal data — more "random" at a byte level. This is measured using Shannon entropy, a way of scoring how unpredictable a file's contents are. Normal text and office documents sit in a low-to-moderate range. Encrypted files spike toward the maximum. A detector that calculates entropy across files can flag encryption in progress, even on files that haven't been renamed yet.

## What We Found When We Tested It

We simulated ransomware behaviour safely — no real encryption, just realistic file renaming — against a set of sample documents, then ran a detection script against the result.

| Check | Result |
|---|---|
| Files affected | 9 |
| Suspicious extensions detected | 8 |
| Verdict | **CRITICAL — Ransomware indicators detected** |
| Recommended response | Isolate system, preserve disk image, check backups, report incident |

The detector flagged 8 of 9 affected files on extension changes alone — before entropy analysis was even needed. In a live environment, that's the difference between catching an incident in its first minute and finding out from a ransom note the next morning.

## Why This Matters for NIS2

Two articles in the NIS2 directive are directly relevant here:

- **Article 21** requires organisations to have risk management measures in place — and detection is a measure, not a policy document. Having a plan for *after* an incident doesn't satisfy the requirement if you have no way of noticing the incident is happening.
- **Article 23** requires significant incidents to be reported within 24 hours of becoming aware of them. That clock doesn't start when you decide to investigate — it starts when detection should have flagged the problem. You can't report what you never detected.

## What This Means for Your Business

Most SMEs we talk to have backups. Very few have anything actively watching for the early signs of ransomware — file renames, encryption-like entropy spikes, unusual access patterns. That gap is exactly what a structured security review is designed to close: not just "do you have backups," but "would you know within minutes if something started encrypting your files right now."

If the answer is no, that's a gap worth closing before it becomes an incident report.

---

<div class="cta-box">

### Ready to find out where you stand?

Our NIS2 Business Audit gives you a complete picture of your compliance posture — including detection and response readiness — with a clear plan to fix what's missing. Fixed price. No surprises.

**[Book Your NIS2 Audit — £799 →]**

</div>

<div class="cta-box">

### Download our free NIS2 Readiness Checklist

Not ready to book an audit yet? Take our free 5-minute self-assessment and get the PDF checklist straight to your inbox.

**[Download our free NIS2 Readiness Checklist →]**

</div>
