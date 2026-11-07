import {
  borderRadius,
  colors,
  cssTokens,
  spacing,
  themePalettes,
  tokens,
  typography
} from "./chunk-HAD2NPEW.mjs";
import {
  formatDuration,
  formatRelativeTime
} from "./chunk-ZJSL4I3W.mjs";

// src/components/Button.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Button = forwardRef(
  ({ className = "", variant = "outline", size = "md", children, ...props }, ref) => {
    const classList = [
      "kz-btn",
      `kz-btn-${variant}`,
      size !== "md" ? `kz-btn-${size}` : "",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx("button", { ref, className: classList, ...props, children });
  }
);
Button.displayName = "Button";

// src/components/BracketCard.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var BracketCard = forwardRef2(
  ({ className = "", children, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: `kz-bracket-card ${className}`.trim(),
        ...props,
        children
      }
    );
  }
);
BracketCard.displayName = "BracketCard";

// src/components/CornerFrame.tsx
import { forwardRef as forwardRef3 } from "react";
import { Fragment, jsx as jsx3, jsxs } from "react/jsx-runtime";
var CornerFrame = forwardRef3(
  ({ showCorners = true, className = "", children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { ref, className: `kz-corner-frame ${className}`.trim(), ...props, children: [
      showCorners && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx3("span", { className: "kz-corner tl", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx3("span", { className: "kz-corner tr", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx3("span", { className: "kz-corner bl", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx3("span", { className: "kz-corner br", "aria-hidden": "true" })
      ] }),
      children
    ] });
  }
);
CornerFrame.displayName = "CornerFrame";

// src/components/Badge.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Badge = forwardRef4(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const classList = [
      "kz-badge",
      variant !== "default" ? variant : "",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx4("span", { ref, className: classList, ...props, children });
  }
);
Badge.displayName = "Badge";

// src/components/Dot.tsx
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Dot = forwardRef5(
  ({ color = "accent", pulse = false, className = "", ...props }, ref) => {
    const classList = [
      "kz-dot",
      color !== "accent" ? color : "",
      pulse ? "pulse" : "",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx5("span", { ref, className: classList, "aria-hidden": "true", ...props });
  }
);
Dot.displayName = "Dot";

// src/components/TechLabel.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var TechLabel = forwardRef6(
  ({ label, jp, coord, className = "", children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs2("div", { ref, className: `kz-tech-label ${className}`.trim(), ...props, children: [
      /* @__PURE__ */ jsx6("span", { children: label }),
      jp && /* @__PURE__ */ jsx6("span", { className: "jp", children: jp }),
      coord && /* @__PURE__ */ jsxs2("span", { className: "kz-coord", children: [
        "[",
        coord,
        "]"
      ] }),
      children
    ] });
  }
);
TechLabel.displayName = "TechLabel";

// src/components/Vinyl.tsx
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Vinyl = forwardRef7(
  ({
    size = "md",
    variant = "default",
    layout = "disc",
    playing = false,
    coverUrl,
    label = "KRZ",
    showRing = true,
    title,
    artist,
    album,
    rpm = "33",
    controls,
    className = "",
    onClick,
    ...props
  }, ref) => {
    const discElement = /* @__PURE__ */ jsxs3(
      "div",
      {
        className: `kz-vinyl-area kz-vinyl-${size} kz-vinyl-${variant}`,
        onClick,
        children: [
          showRing && /* @__PURE__ */ jsx7("div", { className: "kz-vinyl-ring", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs3("div", { className: `kz-vinyl ${playing ? "playing" : ""}`, children: [
            /* @__PURE__ */ jsx7("div", { className: "kz-vinyl-grooves", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-label", children: [
              coverUrl ? /* @__PURE__ */ jsx7(
                "img",
                {
                  src: coverUrl,
                  alt: "Vinyl center artwork",
                  className: "kz-vinyl-cover"
                }
              ) : /* @__PURE__ */ jsx7("span", { children: label }),
              /* @__PURE__ */ jsx7("div", { className: "kz-vinyl-spindle", "aria-hidden": "true" })
            ] })
          ] })
        ]
      }
    );
    if (layout === "disc") {
      return /* @__PURE__ */ jsx7(
        "div",
        {
          ref,
          className: `kz-vinyl-wrapper kz-layout-disc ${className}`.trim(),
          ...props,
          children: discElement
        }
      );
    }
    if (layout === "mini") {
      return /* @__PURE__ */ jsxs3(
        "div",
        {
          ref,
          className: `kz-vinyl-layout-mini kz-vinyl-${variant} ${playing ? "kz-playing" : ""} ${className}`.trim(),
          ...props,
          children: [
            /* @__PURE__ */ jsx7("div", { className: "kz-vinyl-mini-disc", children: discElement }),
            /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-mini-info", children: [
              /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-mini-status", children: [
                /* @__PURE__ */ jsx7("span", { className: `kz-vinyl-pulse ${playing ? "kz-pulse-active" : ""}` }),
                /* @__PURE__ */ jsx7("span", { className: "kz-vinyl-status-text", children: playing ? "NOW PLAYING" : "STANDBY" }),
                /* @__PURE__ */ jsxs3("span", { className: "kz-vinyl-rpm-tag", children: [
                  rpm,
                  " RPM"
                ] })
              ] }),
              title && /* @__PURE__ */ jsx7("div", { className: "kz-vinyl-mini-title", children: title }),
              (artist || album) && /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-mini-artist", children: [
                artist,
                album && ` \u2014 [${album}]`
              ] })
            ] }),
            controls && /* @__PURE__ */ jsx7("div", { className: "kz-vinyl-mini-controls", children: controls })
          ]
        }
      );
    }
    if (layout === "card" || layout === "turntable") {
      return /* @__PURE__ */ jsxs3(
        "div",
        {
          ref,
          className: `kz-vinyl-layout-card kz-vinyl-${variant} ${playing ? "kz-playing" : ""} ${className}`.trim(),
          ...props,
          children: [
            /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-deck-header", children: [
              /* @__PURE__ */ jsxs3("span", { className: "kz-vinyl-deck-tag", children: [
                "HI-FI DECK // ",
                rpm,
                " RPM"
              ] }),
              /* @__PURE__ */ jsxs3("span", { className: "kz-vinyl-deck-status", children: [
                /* @__PURE__ */ jsx7("span", { className: `kz-vinyl-pulse ${playing ? "kz-pulse-active" : ""}` }),
                playing ? "ACTIVE_PLAYBACK" : "IDLE"
              ] })
            ] }),
            /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-deck-center", children: [
              discElement,
              layout === "turntable" && /* @__PURE__ */ jsxs3("div", { className: `kz-turntable-tonearm ${playing ? "engaged" : ""}`, children: [
                /* @__PURE__ */ jsx7("div", { className: "kz-tonearm-pivot" }),
                /* @__PURE__ */ jsx7("div", { className: "kz-tonearm-rod" }),
                /* @__PURE__ */ jsx7("div", { className: "kz-tonearm-head" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-deck-footer", children: [
              /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-deck-meta", children: [
                title && /* @__PURE__ */ jsx7("div", { className: "kz-vinyl-deck-title", children: title }),
                (artist || album) && /* @__PURE__ */ jsxs3("div", { className: "kz-vinyl-deck-artist", children: [
                  artist,
                  album && ` \u2014 [${album}]`
                ] })
              ] }),
              controls && /* @__PURE__ */ jsx7("div", { className: "kz-vinyl-deck-controls", children: controls })
            ] })
          ]
        }
      );
    }
    return discElement;
  }
);
Vinyl.displayName = "Vinyl";

// src/components/StickyNote.tsx
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var StickyNote = forwardRef8(
  ({ colorVariant = 1, title, tape = true, className = "", children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs4(
      "div",
      {
        ref,
        className: `kz-sticky kz-sticky-${colorVariant} ${tape ? "has-tape" : ""} ${className}`.trim(),
        ...props,
        children: [
          title && /* @__PURE__ */ jsx8("div", { className: "kz-sticky-title", children: title }),
          /* @__PURE__ */ jsx8("div", { className: "kz-sticky-body", children })
        ]
      }
    );
  }
);
StickyNote.displayName = "StickyNote";

// src/components/SpoilerGate.tsx
import { useState } from "react";
import { Fragment as Fragment2, jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
function SpoilerGate({
  title = "CLASSIFIED CONTENT // SPOILER GATE",
  description = "This section contains narrative disclosures or classified intel. Proceed with caution.",
  clearanceText = "// clearance: user acknowledgement required",
  buttonText = "Reveal Content",
  children,
  defaultRevealed = false
}) {
  const [revealed, setRevealed] = useState(defaultRevealed);
  if (revealed) {
    return /* @__PURE__ */ jsx9(Fragment2, { children });
  }
  return /* @__PURE__ */ jsxs5(BracketCard, { className: "kz-spoiler-gate", children: [
    /* @__PURE__ */ jsx9("div", { className: "kz-spoiler-icon", "aria-hidden": "true", children: "\u26A0" }),
    /* @__PURE__ */ jsx9("div", { className: "kz-spoiler-title", children: title }),
    /* @__PURE__ */ jsx9("p", { className: "kz-spoiler-desc", children: description }),
    /* @__PURE__ */ jsx9("div", { className: "kz-spoiler-clearance", children: clearanceText }),
    /* @__PURE__ */ jsx9(
      Button,
      {
        variant: "primary",
        size: "sm",
        onClick: () => setRevealed(true),
        children: buttonText
      }
    )
  ] });
}

// src/components/Logo.tsx
import { forwardRef as forwardRef9 } from "react";
import { Fragment as Fragment3, jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var KURZAGIN_EMBLEM_PATH = "M 427.836 313.750 C 407.437 340.731, 394.892 355.256, 374.072 376.002 C 354.040 395.961, 340.283 407.774, 313 428.443 C 304.475 434.901, 297.379 440.507, 297.231 440.899 C 297.083 441.292, 301.161 442.068, 306.293 442.625 C 315.608 443.635, 315.631 443.644, 319.771 448.136 C 322.053 450.611, 326.525 453.914, 329.710 455.475 C 332.894 457.037, 342.025 459.858, 350 461.744 C 372.991 467.182, 394.656 473.443, 409.642 478.980 C 417.264 481.796, 435.650 490.118, 450.500 497.473 C 465.350 504.829, 479.843 511.371, 482.706 512.013 C 485.569 512.654, 489.315 512.870, 491.030 512.493 C 495.063 511.608, 500.400 506.893, 502.055 502.755 C 502.771 500.965, 504.654 497.826, 506.239 495.780 L 509.121 492.059 500.195 477.780 C 482.447 449.389, 470.897 425.848, 461.635 399.191 C 453.474 375.701, 448.375 352.493, 444.016 319 C 442.835 309.925, 441.560 301.262, 441.184 299.750 C 440.541 297.166, 439.733 298.014, 427.836 313.750 M 653.035 367.631 C 630.326 397.968, 609.007 422.929, 590.366 441.009 C 571.099 459.696, 557.105 471.452, 529.623 492.040 C 516.293 502.026, 515.859 502.464, 518.623 503.127 C 520.205 503.507, 524.434 504.108, 528.020 504.464 C 534.161 505.072, 534.824 505.396, 539.427 510.027 C 545.512 516.149, 554.045 519.837, 570.500 523.457 C 597.419 529.379, 620.207 536.452, 641.500 545.492 C 647.550 548.061, 660.747 554.437, 670.826 559.661 C 680.905 564.885, 691.663 570.024, 694.732 571.080 C 705.045 574.628, 713.038 573.043, 717.643 566.536 C 718.664 565.093, 721.423 561.512, 723.773 558.577 L 728.046 553.241 721.158 542.371 C 706.003 518.456, 694.474 496.400, 686.725 476.500 C 681.571 463.266, 675.390 443.922, 672.594 432.275 C 669.515 419.452, 665.566 396.537, 662.660 374.631 L 660.422 357.763 653.035 367.631 M 495 525.305 C 490.875 530.880, 482.805 541.304, 477.066 548.471 C 443.624 590.231, 416.848 615.914, 370.750 650.443 C 364.288 655.284, 359 659.554, 359 659.931 C 359 660.308, 363.190 661.072, 368.312 661.627 C 377.605 662.634, 377.632 662.645, 381.771 667.136 C 384.053 669.611, 388.419 672.860, 391.474 674.356 C 394.529 675.852, 403.885 678.674, 412.264 680.626 C 453.717 690.286, 479.620 699.543, 512.500 716.446 C 523.500 722.101, 534.907 727.515, 537.848 728.477 C 541.471 729.662, 545.147 730.085, 549.239 729.789 C 554.840 729.384, 555.545 729.051, 558.891 725.234 C 565.508 717.684, 570 711.874, 570 710.865 C 570 710.315, 565.859 703.258, 560.797 695.183 C 550.969 679.501, 539.291 657.628, 532.980 643.076 C 527.165 629.669, 518.662 604.130, 515.143 589.500 C 511.412 573.988, 507.612 551.727, 505.413 532.500 C 504.533 524.800, 503.517 517.750, 503.156 516.834 C 502.661 515.577, 500.658 517.657, 495 525.305";
var Logo = forwardRef9(
  ({
    size = 28,
    color,
    variant = "default",
    withRing,
    className = "",
    style,
    ...props
  }, ref) => {
    let glyphFill = color;
    let ringStroke = color || "currentColor";
    let ringBg = "transparent";
    if (!color) {
      switch (variant) {
        case "accent":
          glyphFill = "var(--kz-accent, #c49368)";
          ringStroke = "var(--kz-accent, #c49368)";
          break;
        case "teal":
          glyphFill = "var(--kz-teal, #50b0b0)";
          ringStroke = "var(--kz-teal, #50b0b0)";
          break;
        case "purple":
          glyphFill = "var(--kz-purple, #b066ff)";
          ringStroke = "var(--kz-purple, #b066ff)";
          break;
        case "minimal":
          glyphFill = "var(--kz-text-1, #b0aca4)";
          ringStroke = "var(--kz-border, #2a2a30)";
          break;
        case "monochrome":
          glyphFill = "var(--kz-text-0, #e2ded6)";
          ringStroke = "var(--kz-border-light, #3a3a42)";
          break;
        case "badge":
          glyphFill = "var(--kz-accent, #c49368)";
          ringStroke = "var(--kz-accent, #c49368)";
          ringBg = "rgba(10, 10, 12, 0.9)";
          break;
        case "default":
        default:
          glyphFill = "var(--kz-accent, #c49368)";
          ringStroke = "var(--kz-border, #2a2a30)";
          break;
      }
    }
    const showRing = withRing !== void 0 ? withRing : variant === "badge";
    return /* @__PURE__ */ jsxs6(
      "svg",
      {
        ref,
        width: size,
        height: size,
        viewBox: "0 0 1024 1024",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: `kz-logo kz-logo-${variant} ${className}`.trim(),
        style: {
          display: "inline-block",
          verticalAlign: "middle",
          flexShrink: 0,
          ...style
        },
        ...props,
        children: [
          showRing && /* @__PURE__ */ jsxs6(Fragment3, { children: [
            ringBg !== "transparent" && /* @__PURE__ */ jsx10("circle", { cx: "512", cy: "512", r: "488", fill: ringBg }),
            /* @__PURE__ */ jsx10(
              "circle",
              {
                cx: "512",
                cy: "512",
                r: "488",
                stroke: ringStroke,
                strokeWidth: "24",
                strokeOpacity: variant === "default" ? 0.4 : 0.8
              }
            ),
            /* @__PURE__ */ jsx10("circle", { cx: "512", cy: "18", r: "8", fill: glyphFill }),
            /* @__PURE__ */ jsx10("circle", { cx: "512", cy: "1006", r: "8", fill: glyphFill }),
            /* @__PURE__ */ jsx10("circle", { cx: "18", cy: "512", r: "8", fill: glyphFill }),
            /* @__PURE__ */ jsx10("circle", { cx: "1006", cy: "512", r: "8", fill: glyphFill })
          ] }),
          /* @__PURE__ */ jsx10(
            "path",
            {
              d: KURZAGIN_EMBLEM_PATH,
              fill: glyphFill || "currentColor",
              fillRule: "evenodd"
            }
          )
        ]
      }
    );
  }
);
Logo.displayName = "Logo";

// src/components/Input.tsx
import { forwardRef as forwardRef10 } from "react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var Input = forwardRef10(
  ({
    className = "",
    label,
    sublabel,
    prefixSymbol = ">_",
    suffixSymbol,
    error,
    hint,
    inputSize = "md",
    fullWidth = true,
    disabled,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs7(
      "div",
      {
        className: [
          "kz-input-wrapper",
          fullWidth ? "kz-input-full" : "",
          disabled ? "kz-input-disabled" : "",
          error ? "kz-input-has-error" : "",
          className
        ].filter(Boolean).join(" "),
        children: [
          (label || sublabel) && /* @__PURE__ */ jsxs7("div", { className: "kz-input-header", children: [
            label && /* @__PURE__ */ jsx11("label", { className: "kz-input-label", children: label }),
            sublabel && /* @__PURE__ */ jsx11("span", { className: "kz-input-sublabel", children: sublabel })
          ] }),
          /* @__PURE__ */ jsxs7("div", { className: `kz-input-field-container kz-input-${inputSize}`, children: [
            prefixSymbol && /* @__PURE__ */ jsx11("div", { className: "kz-input-prefix", children: prefixSymbol }),
            /* @__PURE__ */ jsx11(
              "input",
              {
                ref,
                disabled,
                className: "kz-input-field",
                ...props
              }
            ),
            suffixSymbol && /* @__PURE__ */ jsx11("div", { className: "kz-input-suffix", children: suffixSymbol }),
            /* @__PURE__ */ jsx11("div", { className: "kz-input-corner-tl" }),
            /* @__PURE__ */ jsx11("div", { className: "kz-input-corner-br" })
          ] }),
          (error || hint) && /* @__PURE__ */ jsx11("div", { className: "kz-input-footer", children: error ? /* @__PURE__ */ jsx11("span", { className: "kz-input-error-msg", children: error }) : /* @__PURE__ */ jsx11("span", { className: "kz-input-hint-msg", children: hint }) })
        ]
      }
    );
  }
);
Input.displayName = "Input";

// src/components/TelemetryBar.tsx
import { forwardRef as forwardRef11 } from "react";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var TelemetryBar = forwardRef11(
  ({
    className = "",
    value,
    max = 100,
    label,
    coord,
    variant = "accent",
    segmented = false,
    segmentsCount = 20,
    showReadout = true,
    size = "md",
    ...props
  }, ref) => {
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = Math.round(clampedValue / max * 100);
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        ref,
        className: [
          "kz-telemetry-container",
          `kz-telemetry-${size}`,
          `kz-telemetry-${variant}`,
          className
        ].filter(Boolean).join(" "),
        ...props,
        children: [
          (label || coord || showReadout) && /* @__PURE__ */ jsxs8("div", { className: "kz-telemetry-header", children: [
            /* @__PURE__ */ jsxs8("div", { className: "kz-telemetry-label-group", children: [
              label && /* @__PURE__ */ jsx12("span", { className: "kz-telemetry-label", children: label }),
              coord && /* @__PURE__ */ jsxs8("span", { className: "kz-telemetry-coord", children: [
                "[",
                coord,
                "]"
              ] })
            ] }),
            showReadout && /* @__PURE__ */ jsxs8("span", { className: "kz-telemetry-readout", children: [
              percentage,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx12("div", { className: "kz-telemetry-track", children: segmented ? /* @__PURE__ */ jsx12("div", { className: "kz-telemetry-segments", children: Array.from({ length: segmentsCount }).map((_, idx) => {
            const step = 100 / segmentsCount;
            const active = (idx + 1) * step <= percentage || idx * step < percentage && (idx + 1) * step > percentage;
            return /* @__PURE__ */ jsx12(
              "span",
              {
                className: `kz-telemetry-seg ${active ? "active" : ""}`
              },
              idx
            );
          }) }) : /* @__PURE__ */ jsx12(
            "div",
            {
              className: "kz-telemetry-fill",
              style: { width: `${percentage}%` },
              children: /* @__PURE__ */ jsx12("div", { className: "kz-telemetry-glow" })
            }
          ) })
        ]
      }
    );
  }
);
TelemetryBar.displayName = "TelemetryBar";

// src/components/HudModal.tsx
import { useEffect } from "react";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var HudModal = ({
  isOpen,
  onClose,
  title = "SYS_ALERT",
  jp,
  coord = "NODE-01",
  children,
  footer,
  size = "md",
  className = "",
  closeOnBackdrop = true
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs9("div", { className: "kz-modal-portal", children: [
    /* @__PURE__ */ jsx13(
      "div",
      {
        className: "kz-modal-backdrop",
        onClick: closeOnBackdrop ? onClose : void 0
      }
    ),
    /* @__PURE__ */ jsxs9("div", { className: `kz-modal-dialog kz-modal-${size} ${className}`, children: [
      /* @__PURE__ */ jsxs9("div", { className: "kz-modal-header", children: [
        /* @__PURE__ */ jsxs9("div", { className: "kz-modal-title-group", children: [
          /* @__PURE__ */ jsx13("span", { className: "kz-modal-title", children: title }),
          jp && /* @__PURE__ */ jsx13("span", { className: "kz-modal-jp", children: jp }),
          coord && /* @__PURE__ */ jsxs9("span", { className: "kz-modal-coord", children: [
            "// [",
            coord,
            "]"
          ] })
        ] }),
        /* @__PURE__ */ jsx13(
          "button",
          {
            type: "button",
            className: "kz-modal-close-btn",
            onClick: onClose,
            "aria-label": "Close dialog",
            children: "[ESC \u2715]"
          }
        )
      ] }),
      /* @__PURE__ */ jsx13("div", { className: "kz-modal-body", children }),
      footer && /* @__PURE__ */ jsx13("div", { className: "kz-modal-footer", children: footer }),
      /* @__PURE__ */ jsx13("div", { className: "kz-modal-corner-tl" }),
      /* @__PURE__ */ jsx13("div", { className: "kz-modal-corner-tr" }),
      /* @__PURE__ */ jsx13("div", { className: "kz-modal-corner-bl" }),
      /* @__PURE__ */ jsx13("div", { className: "kz-modal-corner-br" })
    ] })
  ] });
};
HudModal.displayName = "HudModal";

// src/components/TerminalWindow.tsx
import { forwardRef as forwardRef12, useState as useState2 } from "react";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
var TerminalWindow = forwardRef12(
  ({
    className = "",
    title = "terminal.sh",
    badge = "ACTIVE",
    code,
    showLineNumbers = true,
    copyable = true,
    ...props
  }, ref) => {
    const [copied, setCopied] = useState2(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    };
    const lines = code.trim().split("\n");
    return /* @__PURE__ */ jsxs10(
      "div",
      {
        ref,
        className: ["kz-terminal-window", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ jsxs10("div", { className: "kz-terminal-header", children: [
            /* @__PURE__ */ jsxs10("div", { className: "kz-terminal-dots", children: [
              /* @__PURE__ */ jsx14("span", { className: "kz-term-dot kz-term-dot-red" }),
              /* @__PURE__ */ jsx14("span", { className: "kz-term-dot kz-term-dot-yellow" }),
              /* @__PURE__ */ jsx14("span", { className: "kz-term-dot kz-term-dot-green" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "kz-terminal-title-box", children: [
              /* @__PURE__ */ jsx14("span", { className: "kz-terminal-title", children: title }),
              badge && /* @__PURE__ */ jsx14("span", { className: "kz-terminal-badge", children: badge })
            ] }),
            /* @__PURE__ */ jsx14("div", { className: "kz-terminal-actions", children: copyable && /* @__PURE__ */ jsx14(
              "button",
              {
                type: "button",
                className: "kz-terminal-copy-btn",
                onClick: handleCopy,
                "aria-label": "Copy code",
                children: copied ? "[COPIED]" : "[COPY]"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx14("div", { className: "kz-terminal-body", children: /* @__PURE__ */ jsx14("pre", { className: "kz-terminal-pre", children: showLineNumbers ? /* @__PURE__ */ jsx14("code", { children: lines.map((line, idx) => /* @__PURE__ */ jsxs10("div", { className: "kz-terminal-line", children: [
            /* @__PURE__ */ jsx14("span", { className: "kz-terminal-lineno", children: idx + 1 }),
            /* @__PURE__ */ jsx14("span", { className: "kz-terminal-linecontent", children: line || " " })
          ] }, idx)) }) : /* @__PURE__ */ jsx14("code", { children: code }) }) })
        ]
      }
    );
  }
);
TerminalWindow.displayName = "TerminalWindow";

// src/components/Tooltip.tsx
import { useState as useState3, useRef } from "react";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
var Tooltip = ({
  content,
  children,
  position = "top",
  coord,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState3(false);
  const timeoutRef = useRef(null);
  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      className: "kz-tooltip-wrapper",
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      children: [
        children,
        isVisible && /* @__PURE__ */ jsxs11(
          "div",
          {
            role: "tooltip",
            className: `kz-tooltip-box kz-tooltip-${position} ${className}`,
            children: [
              coord && /* @__PURE__ */ jsxs11("span", { className: "kz-tooltip-coord", children: [
                "[",
                coord,
                "]"
              ] }),
              /* @__PURE__ */ jsx15("div", { className: "kz-tooltip-content", children: content }),
              /* @__PURE__ */ jsx15("div", { className: "kz-tooltip-arrow" })
            ]
          }
        )
      ]
    }
  );
};
Tooltip.displayName = "Tooltip";

// src/components/SegmentedControl.tsx
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
function SegmentedControl({
  options,
  value,
  onChange,
  size = "md",
  fullWidth = false,
  className = "",
  variant = "default"
}) {
  return /* @__PURE__ */ jsx16(
    "div",
    {
      className: `kz-segmented-control kz-segmented-${size} kz-segmented-${variant} ${fullWidth ? "kz-segmented-full" : ""} ${className}`.trim(),
      role: "tablist",
      children: options.map((option) => {
        const isActive = option.value === value;
        return /* @__PURE__ */ jsxs12(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": isActive,
            disabled: option.disabled,
            className: `kz-segmented-item ${isActive ? "kz-active" : ""} ${option.disabled ? "kz-disabled" : ""}`.trim(),
            onClick: () => !option.disabled && onChange(option.value),
            children: [
              isActive && /* @__PURE__ */ jsx16("span", { className: "kz-segmented-bracket-l" }),
              /* @__PURE__ */ jsxs12("span", { className: "kz-segmented-content", children: [
                /* @__PURE__ */ jsx16("span", { className: "kz-segmented-label", children: option.label }),
                option.sublabel && /* @__PURE__ */ jsx16("span", { className: "kz-segmented-sublabel", children: option.sublabel })
              ] }),
              option.badge !== void 0 && /* @__PURE__ */ jsx16("span", { className: "kz-segmented-badge", children: option.badge }),
              isActive && /* @__PURE__ */ jsx16("span", { className: "kz-segmented-bracket-r" })
            ]
          },
          option.value
        );
      })
    }
  );
}

// src/components/CyberSwitch.tsx
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
function CyberSwitch({
  checked,
  onChange,
  label,
  sublabel,
  disabled = false,
  size = "md",
  variant = "default",
  className = ""
}) {
  return /* @__PURE__ */ jsxs13(
    "label",
    {
      className: `kz-switch-container kz-switch-${size} kz-switch-${variant} ${checked ? "kz-checked" : ""} ${disabled ? "kz-disabled" : ""} ${className}`.trim(),
      onClick: (e) => {
        if (disabled) return;
        e.preventDefault();
        onChange(!checked);
      },
      children: [
        /* @__PURE__ */ jsxs13(
          "div",
          {
            className: "kz-switch-track",
            role: "switch",
            "aria-checked": checked,
            tabIndex: disabled ? -1 : 0,
            onKeyDown: (e) => {
              if (disabled) return;
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                onChange(!checked);
              }
            },
            children: [
              /* @__PURE__ */ jsx17("span", { className: "kz-switch-state-text left", children: checked ? "1" : "" }),
              /* @__PURE__ */ jsx17("div", { className: "kz-switch-thumb", children: /* @__PURE__ */ jsx17("span", { className: "kz-switch-thumb-grip" }) }),
              /* @__PURE__ */ jsx17("span", { className: "kz-switch-state-text right", children: !checked ? "0" : "" })
            ]
          }
        ),
        (label || sublabel) && /* @__PURE__ */ jsxs13("div", { className: "kz-switch-text-group", children: [
          label && /* @__PURE__ */ jsx17("span", { className: "kz-switch-label", children: label }),
          sublabel && /* @__PURE__ */ jsx17("span", { className: "kz-switch-sublabel", children: sublabel })
        ] })
      ]
    }
  );
}

// src/components/KeyValGrid.tsx
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
function KeyValGrid({
  items,
  title,
  coord,
  columns = 1,
  leaderDots = true,
  className = ""
}) {
  return /* @__PURE__ */ jsxs14(
    "div",
    {
      className: `kz-keyval-grid kz-keyval-cols-${columns} ${className}`.trim(),
      children: [
        (title || coord) && /* @__PURE__ */ jsxs14("div", { className: "kz-keyval-header", children: [
          title && /* @__PURE__ */ jsx18("span", { className: "kz-keyval-title", children: title }),
          coord && /* @__PURE__ */ jsx18("span", { className: "kz-keyval-coord", children: coord })
        ] }),
        /* @__PURE__ */ jsx18("div", { className: "kz-keyval-list", children: items.map((item, idx) => /* @__PURE__ */ jsxs14("div", { className: "kz-keyval-row", children: [
          /* @__PURE__ */ jsxs14("span", { className: "kz-keyval-key", children: [
            item.status && /* @__PURE__ */ jsx18("span", { className: `kz-keyval-dot kz-dot-${item.status}` }),
            item.key
          ] }),
          leaderDots && /* @__PURE__ */ jsx18("span", { className: "kz-keyval-leader" }),
          /* @__PURE__ */ jsxs14("span", { className: "kz-keyval-val", children: [
            /* @__PURE__ */ jsx18("span", { className: "kz-keyval-val-main", children: item.value }),
            item.sub && /* @__PURE__ */ jsx18("span", { className: "kz-keyval-val-sub", children: item.sub })
          ] })
        ] }, idx)) })
      ]
    }
  );
}

// src/components/Breadcrumbs.tsx
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
function Breadcrumbs({
  items,
  prefix = "SYS //",
  separator = "/",
  className = ""
}) {
  return /* @__PURE__ */ jsxs15(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: `kz-breadcrumbs ${className}`.trim(),
      children: [
        prefix && /* @__PURE__ */ jsx19("span", { className: "kz-breadcrumb-prefix", children: prefix }),
        /* @__PURE__ */ jsx19("ol", { className: "kz-breadcrumb-list", children: items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isActive = item.active || isLast;
          return /* @__PURE__ */ jsxs15(
            "li",
            {
              className: `kz-breadcrumb-item ${isActive ? "kz-active" : ""}`,
              children: [
                idx > 0 && /* @__PURE__ */ jsx19("span", { className: "kz-breadcrumb-separator", "aria-hidden": "true", children: separator }),
                item.href && !isActive ? /* @__PURE__ */ jsx19(
                  "a",
                  {
                    href: item.href,
                    className: "kz-breadcrumb-link",
                    onClick: item.onClick,
                    children: item.label
                  }
                ) : item.onClick && !isActive ? /* @__PURE__ */ jsx19(
                  "button",
                  {
                    type: "button",
                    className: "kz-breadcrumb-button",
                    onClick: item.onClick,
                    children: item.label
                  }
                ) : /* @__PURE__ */ jsx19(
                  "span",
                  {
                    className: "kz-breadcrumb-current",
                    "aria-current": isActive ? "page" : void 0,
                    children: item.label
                  }
                )
              ]
            },
            idx
          );
        }) })
      ]
    }
  );
}

// src/components/TacticalDrawer.tsx
import { useEffect as useEffect2 } from "react";
import { jsx as jsx20, jsxs as jsxs16 } from "react/jsx-runtime";
function TacticalDrawer({
  isOpen,
  onClose,
  title,
  coord = "DRAWER // 0xAF",
  sublabel,
  children,
  position = "bottom",
  className = ""
}) {
  useEffect2(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx20(
    "div",
    {
      className: `kz-drawer-backdrop kz-drawer-${position}`,
      onClick: (e) => {
        if (e.target === e.currentTarget) onClose();
      },
      children: /* @__PURE__ */ jsxs16(
        "div",
        {
          className: `kz-drawer-panel kz-drawer-panel-${position} ${className}`.trim(),
          role: "dialog",
          "aria-modal": "true",
          children: [
            position === "bottom" && /* @__PURE__ */ jsx20("div", { className: "kz-drawer-handle-bar", onClick: onClose, children: /* @__PURE__ */ jsx20("span", { className: "kz-drawer-handle-pill" }) }),
            /* @__PURE__ */ jsxs16("div", { className: "kz-drawer-header", children: [
              /* @__PURE__ */ jsxs16("div", { className: "kz-drawer-title-group", children: [
                coord && /* @__PURE__ */ jsx20("span", { className: "kz-drawer-coord", children: coord }),
                title && /* @__PURE__ */ jsx20("h3", { className: "kz-drawer-title", children: title }),
                sublabel && /* @__PURE__ */ jsx20("span", { className: "kz-drawer-sublabel", children: sublabel })
              ] }),
              /* @__PURE__ */ jsx20(
                "button",
                {
                  type: "button",
                  className: "kz-drawer-close-btn",
                  onClick: onClose,
                  "aria-label": "Close drawer",
                  children: "\u2715"
                }
              )
            ] }),
            /* @__PURE__ */ jsx20("div", { className: "kz-drawer-body", children })
          ]
        }
      )
    }
  );
}

// src/components/HudToast.tsx
import { useEffect as useEffect3, useState as useState4 } from "react";
import { jsx as jsx21, jsxs as jsxs17 } from "react/jsx-runtime";
function HudToast({
  isOpen,
  onClose,
  title,
  description,
  variant = "default",
  duration = 4e3,
  coord = "HUD // NOTIFY",
  className = ""
}) {
  const [progress, setProgress] = useState4(100);
  useEffect3(() => {
    if (!isOpen || duration <= 0) return;
    setProgress(100);
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - elapsed / duration * 100);
      setProgress(remaining);
      if (elapsed >= duration) {
        clearInterval(interval);
        onClose();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isOpen, duration, onClose]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs17(
    "div",
    {
      className: `kz-hud-toast kz-toast-${variant} ${className}`.trim(),
      role: "alert",
      children: [
        /* @__PURE__ */ jsxs17("div", { className: "kz-toast-inner", children: [
          /* @__PURE__ */ jsx21("span", { className: "kz-toast-bracket-l" }),
          /* @__PURE__ */ jsxs17("div", { className: "kz-toast-content", children: [
            /* @__PURE__ */ jsxs17("div", { className: "kz-toast-header", children: [
              /* @__PURE__ */ jsx21("span", { className: "kz-toast-dot" }),
              /* @__PURE__ */ jsx21("span", { className: "kz-toast-coord", children: coord })
            ] }),
            /* @__PURE__ */ jsx21("div", { className: "kz-toast-title", children: title }),
            description && /* @__PURE__ */ jsx21("div", { className: "kz-toast-desc", children: description })
          ] }),
          /* @__PURE__ */ jsx21(
            "button",
            {
              type: "button",
              className: "kz-toast-dismiss",
              onClick: onClose,
              "aria-label": "Dismiss notification",
              children: "\u2715"
            }
          ),
          /* @__PURE__ */ jsx21("span", { className: "kz-toast-bracket-r" })
        ] }),
        duration > 0 && /* @__PURE__ */ jsx21("div", { className: "kz-toast-progress-track", children: /* @__PURE__ */ jsx21(
          "div",
          {
            className: "kz-toast-progress-bar",
            style: { width: `${progress}%` }
          }
        ) })
      ]
    }
  );
}

// src/components/BottomBar.tsx
import { jsx as jsx22, jsxs as jsxs18 } from "react/jsx-runtime";
function BottomBar({
  items,
  activeId,
  onSelect,
  bordered = true,
  blur = true,
  fixed = true,
  className = "",
  variant = "default"
}) {
  return /* @__PURE__ */ jsx22(
    "nav",
    {
      className: `kz-bottom-bar kz-bottom-bar-${variant} ${fixed ? "kz-bottom-bar-fixed" : ""} ${blur ? "kz-bottom-bar-blur" : ""} ${bordered ? "kz-bottom-bar-bordered" : ""} ${className}`.trim(),
      role: "navigation",
      "aria-label": "Bottom navigation",
      children: /* @__PURE__ */ jsx22("div", { className: "kz-bottom-bar-track", children: items.map((item) => {
        const isActive = activeId !== void 0 ? item.id === activeId : item.active;
        return /* @__PURE__ */ jsxs18(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": isActive,
            disabled: item.disabled,
            className: `kz-bottom-bar-item ${isActive ? "kz-active" : ""} ${item.disabled ? "kz-disabled" : ""}`.trim(),
            onClick: () => {
              if (item.disabled) return;
              item.onClick?.();
              onSelect?.(item.id);
            },
            children: [
              isActive && /* @__PURE__ */ jsx22("span", { className: "kz-bottom-bar-active-pip" }),
              /* @__PURE__ */ jsxs18("div", { className: "kz-bottom-bar-icon-wrap", children: [
                item.icon,
                item.badge !== void 0 && /* @__PURE__ */ jsx22("span", { className: "kz-bottom-bar-badge", children: item.badge })
              ] }),
              /* @__PURE__ */ jsx22("span", { className: "kz-bottom-bar-label", children: item.label })
            ]
          },
          item.id
        );
      }) })
    }
  );
}
export {
  Badge,
  BottomBar,
  BracketCard,
  Breadcrumbs,
  Button,
  CornerFrame,
  CyberSwitch,
  Dot,
  HudModal,
  HudToast,
  Input,
  KeyValGrid,
  Logo,
  SegmentedControl,
  SpoilerGate,
  StickyNote,
  TacticalDrawer,
  TechLabel,
  TelemetryBar,
  TerminalWindow,
  Tooltip,
  Vinyl,
  borderRadius,
  colors,
  cssTokens,
  formatDuration,
  formatRelativeTime,
  spacing,
  themePalettes,
  tokens,
  typography
};
//# sourceMappingURL=index.mjs.map