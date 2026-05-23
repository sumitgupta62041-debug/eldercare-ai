# Design Brief: Smart Elderly Care & Emergency Assistance System

## Direction

Smart Elderly Care Platform — Premium, accessible healthcare interface combining Apple-level professionalism with futuristic medical technology and emotional warmth for elderly users.

## Tone

Modern medical minimalism with futuristic accents; every color and interaction builds trust while avoiding sterile or cold aesthetics. Soft rounded forms, gentle gradients, and ample breathing room accommodate vision and motor accessibility needs.

## Differentiation

Frosted glass cards with gradient accent borders shift from calm teal at rest to vivid emergency red during critical alerts, creating a distinctive visual language that communicates state changes instantly.

## Color Palette

| Token         | OKLCH          | Role                                     |
| ------------- | -------------- | ---------------------------------------- |
| background    | 0.98 0.008 290 | Soft off-white with cool undertone       |
| foreground    | 0.18 0.015 290 | Deep navy, high contrast                 |
| card          | 0.99 0.005 290 | Pure white, glass substrate              |
| primary       | 0.55 0.18 190  | Teal/cyan for trust, medical calm       |
| secondary     | 0.5 0.15 280   | Warm purple for emotional comfort        |
| accent        | 0.45 0.22 25   | Emergency red for critical alerts        |
| muted         | 0.92 0.01 290  | Light gray dividers, subtle elements     |
| destructive   | 0.55 0.22 25   | High-alert red (identical to accent)    |

## Typography

- Display: Space Grotesk — Modern geometric headings for dashboard sections and emergency alerts
- Body: DM Sans — Clean, warm, large default (min 16px) for elderly accessibility
- Mono: Geist Mono — Technical data, vital signs, medicine schedules
- Scale: hero `text-6xl font-bold tracking-tight`, h2 `text-3xl font-bold`, label `text-sm font-semibold`, body `text-base`

## Elevation & Depth

Glass-morphism cards with soft shadows (0.08 opacity, 4-12px blur) over subtle gradient backgrounds. No harsh shadows; depth achieved through background color shifts and frosted glass layers.

## Structural Zones

| Zone    | Background                    | Border                  | Notes                                         |
| ------- | ----------------------------- | ----------------------- | --------------------------------------------- |
| Header  | card with soft shadow         | soft gray (0.2 opacity) | Sidebar + topbar navigation                  |
| Content | background (soft cool off-white) | —                      | Main dashboard, metrics, reminders            |
| Cards   | glass effect, 0.7-0.8 opacity | border/0.2 opacity     | Health metrics, medicine, AI chat, emergency |
| Footer  | muted/0.05 opacity            | muted border            | Secondary info, minimal visual weight        |

## Spacing & Rhythm

Generous spacing for elderly users: 2rem section gaps, 1.5rem card padding, 0.5rem micro-spacing. Max-width 1200px containers ensure comfortable reading distance.

## Component Patterns

- Buttons: Rounded-lg with min-height 48px; primary (teal), secondary (purple), emergency (red); hover lifts with soft shadow
- Cards: Glassmorphism with backdrop blur, soft shadow; hover scale-up 2% with smooth transition
- Badges: Rounded pills; success (green), warning (amber), alert (red)
- Inputs: Soft border, large padding, focus ring in primary teal

## Motion

- Entrance: Slide-up 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) on page load
- Hover: Scale 102%, shadow elevation, 0.35s smooth transition
- Decorative: Float animation (±8px, 3s cycle) on wellness cards; pulse-soft on emergency states
- State change: Emergency gradient animates over 0.5s when alert triggered

## Constraints

- Never use raw hex or RGB colors; all tokens via CSS variables in OKLCH
- Minimum 16px base font size; 18-20px for vital stats and medicine labels
- Minimum 48px touch targets for all interactive elements (elderly motor accessibility)
- Contrast ratio ≥ 7:1 for text on backgrounds (AAA+)
- No full-page gradients; use subtle card-level glass effects instead

## Signature Detail

Gradient accent border on cards transitions from calm teal gradient (primary + secondary blend) at rest to vivid red-orange emergency gradient when alert state is active—communicating urgency visually without jarring color shifts elsewhere.
