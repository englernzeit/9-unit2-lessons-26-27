/* @ds-bundle: {"format":4,"namespace":"SherwoodIslandDesignSystem_d5beff","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardLink","sourcePath":"components/core/Card.jsx"},{"name":"Note","sourcePath":"components/core/Note.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"Calendar","sourcePath":"components/data/Calendar.jsx"},{"name":"InsetStat","sourcePath":"components/data/InsetStat.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"StarRating","sourcePath":"components/data/StarRating.jsx"},{"name":"TaskRow","sourcePath":"components/data/TaskRow.jsx"},{"name":"PhotoCard","sourcePath":"components/media/PhotoCard.jsx"},{"name":"VillagerAvatar","sourcePath":"components/media/VillagerAvatar.jsx"},{"name":"VillagerGrid","sourcePath":"components/media/VillagerAvatar.jsx"},{"name":"IslandSign","sourcePath":"components/navigation/IslandSign.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"NavList","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"TipBox","sourcePath":"components/navigation/TipBox.jsx"}],"sourceHashes":{"components/core/Button.jsx":"2c165ce96afd","components/core/Card.jsx":"96a21fee419e","components/core/Note.jsx":"c64d754e9a0a","components/core/Panel.jsx":"b672be1f340b","components/core/Pill.jsx":"01d5e6e7fada","components/core/Tag.jsx":"49a0504cb3f9","components/core/Toast.jsx":"d89753525634","components/data/Calendar.jsx":"a2cf28262c90","components/data/InsetStat.jsx":"2579d4c921a9","components/data/ProgressBar.jsx":"d039d1b98fc9","components/data/StarRating.jsx":"7c70b8f343ba","components/data/TaskRow.jsx":"b529649f3fbf","components/media/PhotoCard.jsx":"80408f3fd15b","components/media/VillagerAvatar.jsx":"fac2e0f0a8e6","components/navigation/IslandSign.jsx":"88b25552f0c8","components/navigation/NavItem.jsx":"79041ea9dae2","components/navigation/Sidebar.jsx":"1bcf27683654","components/navigation/TipBox.jsx":"93d6d69f68d3","ui_kits/island-dashboard/App.jsx":"624b089df4a6","ui_kits/island-dashboard/Views.jsx":"e3dd7c6bfbd5","ui_kits/island-dashboard/data.jsx":"c0430850cf0d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SherwoodIslandDesignSystem_d5beff = window.SherwoodIslandDesignSystem_d5beff || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "9px 18px",
  borderRadius: "var(--sw-r-pill)",
  border: 0,
  cursor: "pointer",
  fontFamily: "var(--sw-font-body)",
  fontSize: 14,
  fontWeight: 600,
  transition: "background .16s, transform .1s, box-shadow .1s"
};
const variants = {
  primary: {
    background: "var(--sw-leaf)",
    color: "var(--sw-paper-high)",
    boxShadow: "var(--sw-shadow-press)"
  },
  ghost: {
    background: "transparent",
    color: "var(--sw-leaf-dark)",
    boxShadow: "inset 0 0 0 1.5px var(--sw-leaf-light)"
  },
  wood: {
    background: "var(--sw-wood)",
    color: "var(--sw-wood-cream)",
    boxShadow: "0 2px 0 var(--sw-wood-dark)"
  }
};
const hovers = {
  primary: {
    background: "var(--sw-leaf-dark)"
  },
  ghost: {
    background: "var(--sw-inset)",
    color: "var(--sw-forest-800)"
  },
  wood: {
    background: "#87663A"
  }
};
function Button({
  variant = "primary",
  icon,
  fullWidth,
  disabled,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...v,
    ...(hover && !disabled ? hovers[variant] || hovers.primary : null),
    ...(down && !disabled ? {
      transform: "translateY(2px)",
      boxShadow: "0 0 0 var(--sw-leaf-dark)"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: .45,
      cursor: "not-allowed",
      boxShadow: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 15,
      lineHeight: 1
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  icon,
  action,
  onAction,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: "var(--sw-paper)",
      border: "1px solid var(--sw-line)",
      borderRadius: "var(--sw-r-md)",
      boxShadow: "var(--sw-shadow-card)",
      padding: "var(--sw-4)",
      display: "grid",
      gap: "var(--sw-3)",
      alignContent: "start",
      ...style
    }
  }, rest), (title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--sw-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--sw-font-display)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--sw-ink)"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--sw-icon)",
      fontSize: 15
    }
  }, icon) : null, title), action ? /*#__PURE__*/React.createElement(CardLink, {
    onClick: onAction
  }, action) : null), children);
}
function CardLink({
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      textDecoration: "none",
      color: hover ? "var(--sw-leaf-dark)" : "var(--sw-ink-muted)",
      borderBottom: "1px solid " + (hover ? "var(--sw-leaf-dark)" : "transparent"),
      transition: "color .16s, border-color .16s",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Note.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Note({
  title,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--sw-inset)",
      border: "1px solid var(--sw-line)",
      borderLeft: "3px solid var(--sw-leaf-light)",
      borderRadius: "var(--sw-r-sm)",
      padding: "10px 12px",
      display: "grid",
      gap: 4,
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--sw-font-display)",
      fontSize: 13.5,
      color: "var(--sw-ink)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      color: "var(--sw-ink-soft)",
      lineHeight: 1.45
    }
  }, children));
}
Object.assign(__ds_scope, { Note });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Note.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Panel({
  label,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--sw-paper)",
      border: "1px solid var(--sw-line)",
      borderRadius: "var(--sw-r-lg)",
      boxShadow: "var(--sw-shadow-card)",
      padding: "var(--sw-6)",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--sw-font-body)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--sw-ink-muted)",
      marginBottom: "var(--sw-4)"
    }
  }, label) : null, children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  done: {
    background: "var(--sw-sage)",
    color: "#F7F3E6"
  },
  work: {
    background: "var(--sw-inset)",
    color: "var(--sw-ink-soft)",
    border: "1px solid var(--sw-line)"
  },
  gold: {
    background: "var(--sw-gold-soft)",
    color: "#6B4E14"
  },
  wood: {
    background: "rgba(149,111,62,.16)",
    color: "var(--sw-wood-dark)"
  }
};
function Pill({
  tone = "work",
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 10px",
      borderRadius: "var(--sw-r-pill)",
      fontSize: 12,
      fontWeight: 600,
      ...(tones[tone] || tones.work),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--sw-font-mono)",
      fontSize: 11.5,
      padding: "5px 10px",
      borderRadius: "var(--sw-r-pill)",
      background: "var(--sw-inset)",
      border: "1px solid var(--sw-line)",
      color: "var(--sw-ink-soft)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  message,
  show = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    style: {
      position: "fixed",
      left: "50%",
      bottom: 26,
      transform: show ? "translate(-50%,0)" : "translate(-50%,14px)",
      background: "var(--sw-forest-800)",
      color: "var(--sw-ink-onDark)",
      padding: "9px 18px",
      borderRadius: "var(--sw-r-pill)",
      fontSize: 13.5,
      fontWeight: 600,
      boxShadow: "var(--sw-shadow-pop)",
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity .2s, transform .2s",
      zIndex: 50,
      ...style
    }
  }, rest), message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/data/Calendar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DAYS = ["M", "T", "O", "T", "F", "L", "S"];
function Calendar({
  month = "Maj 2024",
  days = 31,
  startOffset = 2,
  today = 20,
  onPrev,
  onNext,
  style,
  ...rest
}) {
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(/*#__PURE__*/React.createElement("span", {
    key: "b" + i
  }));
  for (let d = 1; d <= days; d++) {
    const isToday = d === today;
    cells.push(/*#__PURE__*/React.createElement("span", {
      key: d,
      style: {
        fontSize: 12,
        padding: "3px 0",
        borderRadius: "var(--sw-r-pill)",
        color: isToday ? "#F7F3E6" : "var(--sw-ink-soft)",
        background: isToday ? "var(--sw-sage)" : "transparent",
        fontWeight: isToday ? 600 : 400
      }
    }, d));
  }
  const nav = {
    background: "none",
    border: 0,
    cursor: "pointer",
    color: "var(--sw-ink-muted)",
    fontSize: 14,
    padding: "2px 6px",
    borderRadius: "var(--sw-r-xs)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: 6,
      fontVariantNumeric: "tabular-nums",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--sw-font-display)",
      fontSize: 13.5,
      fontWeight: 600,
      color: "var(--sw-ink)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "F\xF6reg\xE5ende m\xE5nad",
    style: nav,
    onClick: onPrev
  }, "\u2039"), /*#__PURE__*/React.createElement("span", null, month), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "N\xE4sta m\xE5nad",
    style: nav,
    onClick: onNext
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 2,
      textAlign: "center"
    }
  }, DAYS.map((d, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      fontStyle: "normal",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--sw-ink-muted)",
      paddingBottom: 2
    }
  }, d)), cells));
}
Object.assign(__ds_scope, { Calendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Calendar.jsx", error: String((e && e.message) || e) }); }

// components/data/InsetStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InsetStat({
  label,
  value,
  mono,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--sw-inset)",
      borderRadius: "var(--sw-r-sm)",
      padding: "10px 12px",
      display: "grid",
      gap: 5,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: "var(--sw-ink-muted)"
    }
  }, label), children || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mono ? "var(--sw-font-mono)" : "var(--sw-font-display)",
      fontSize: mono ? 14 : 17,
      fontWeight: 600,
      color: "var(--sw-ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value));
}
Object.assign(__ds_scope, { InsetStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/InsetStat.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  total = 100,
  style,
  ...rest
}) {
  const pct = total ? Math.max(0, Math.min(100, value / total * 100)) : 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": total,
    style: {
      display: "block",
      height: 4,
      borderRadius: "var(--sw-r-pill)",
      background: "var(--sw-track)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    style: {
      display: "block",
      height: "100%",
      width: pct + "%",
      borderRadius: "var(--sw-r-pill)",
      background: "var(--sw-progress)"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StarRating({
  value = 0,
  max = 5,
  showValue = true,
  style,
  ...rest
}) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    stars.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color: i < value ? "var(--sw-gold)" : "var(--sw-star-empty)"
      }
    }, "\u2605"));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3,
      fontSize: 17,
      lineHeight: 1,
      ...style
    }
  }, rest), stars, showValue ? /*#__PURE__*/React.createElement("b", {
    style: {
      marginLeft: 6,
      fontFamily: "var(--sw-font-display)",
      fontSize: 15,
      color: "var(--sw-ink)"
    }
  }, value) : null);
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/data/TaskRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TaskRow({
  icon,
  name,
  value = 0,
  total = 100,
  divider = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "26px 1fr auto",
      gap: 10,
      alignItems: "center",
      paddingBlock: 7,
      borderTop: divider ? "1px solid var(--sw-line-soft)" : "0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 26,
      height: 26,
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--sw-r-xs)",
      background: "var(--sw-inset)",
      fontSize: 14
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--sw-ink-body)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--sw-ink-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value, " / ", total), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: value,
    total: total,
    style: {
      gridColumn: "2 / -1"
    }
  }));
}
Object.assign(__ds_scope, { TaskRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TaskRow.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoCard({
  caption,
  src,
  glyph = "◨",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      borderRadius: "var(--sw-r-sm)",
      overflow: "hidden",
      border: "1px solid var(--sw-line)",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: typeof caption === "string" ? caption : "",
    style: {
      display: "block",
      width: "100%",
      aspectRatio: "16/9",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/9",
      display: "grid",
      placeItems: "center",
      color: "#F2F5E4",
      fontSize: 26,
      background: "radial-gradient(60% 70% at 30% 25%, #A9BE86 0%, rgba(169,190,134,0) 60%), linear-gradient(180deg,#BFD3A4 0%,#8FA97A 46%,#6F8A63 100%)"
    }
  }, glyph), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "8px 10px",
      background: "var(--sw-paper)",
      fontSize: 12,
      color: "var(--sw-ink-muted)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// components/media/VillagerAvatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function VillagerAvatar({
  name,
  glyph,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      justifyItems: "center",
      gap: 5,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      background: "var(--sw-inset)",
      fontSize: 24,
      border: "1px solid var(--sw-line-soft)"
    }
  }, glyph), name ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--sw-ink-soft)"
    }
  }, name) : null);
}
function VillagerGrid({
  columns = 4,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ",1fr)",
      gap: "var(--sw-3)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { VillagerAvatar, VillagerGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/VillagerAvatar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/IslandSign.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IslandSign({
  top = "Welcome to",
  name = "Sherwood",
  bottom = "Island",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "linear-gradient(180deg,var(--sw-wood-light) 0%,var(--sw-wood) 42%,#8A6636 100%)",
      border: "2px solid var(--sw-wood-dark)",
      borderRadius: "var(--sw-r-md)",
      padding: "10px 12px 12px",
      textAlign: "center",
      color: "var(--sw-wood-cream)",
      boxShadow: "0 3px 0 rgba(60,42,20,.35)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("small", {
    style: {
      display: "block",
      fontSize: 10.5,
      letterSpacing: ".08em",
      opacity: .9
    }
  }, top), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontFamily: "var(--sw-font-display)",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: ".005em",
      textShadow: "0 1px 0 rgba(60,42,20,.45)"
    }
  }, name), /*#__PURE__*/React.createElement("small", {
    style: {
      display: "block",
      fontSize: 10.5,
      letterSpacing: ".08em",
      opacity: .9
    }
  }, bottom));
}
Object.assign(__ds_scope, { IslandSign });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/IslandSign.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  icon,
  active,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    "aria-current": active ? "page" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px",
      borderRadius: "var(--sw-r-pill)",
      fontSize: 14,
      textDecoration: "none",
      transition: "background .16s",
      fontWeight: active ? 600 : 500,
      color: active ? "var(--sw-ink)" : "var(--sw-ink-onDark)",
      background: active ? "var(--sw-paper-high)" : hover ? "rgba(245,238,225,.12)" : "transparent",
      boxShadow: active ? "0 2px 6px rgba(20,28,16,.22)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      textAlign: "center",
      fontSize: 15,
      lineHeight: 1
    }
  }, icon), children);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sidebar({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      width: 212,
      flex: "0 0 212px",
      borderRadius: "var(--sw-r-lg)",
      background: "linear-gradient(180deg,var(--sw-forest-800) 0%,var(--sw-forest-800) 62%,var(--sw-moss) 100%)",
      padding: "var(--sw-4) var(--sw-3) var(--sw-5)",
      display: "grid",
      gap: "var(--sw-4)",
      alignContent: "start",
      color: "var(--sw-ink-onDark)",
      ...style
    }
  }, rest), children);
}
function NavList({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "grid",
      gap: 2,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Sidebar, NavList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TipBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TipBox({
  title = "Dagens tips",
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginTop: "auto",
      background: "var(--sw-moss-dark)",
      border: "1px solid rgba(255,255,255,.14)",
      borderRadius: "var(--sw-r-md)",
      padding: "10px 12px",
      textAlign: "center",
      color: "var(--sw-ink-onDark)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      fontFamily: "var(--sw-font-display)",
      fontSize: 13,
      marginBottom: 3
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: 1.4,
      opacity: .92,
      display: "block"
    }
  }, children));
}
Object.assign(__ds_scope, { TipBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TipBox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/island-dashboard/App.jsx
try { (() => {
const {
  Sidebar,
  NavList,
  NavItem,
  IslandSign,
  TipBox,
  Toast
} = window.SherwoodIslandDesignSystem_d5beff;
function App() {
  const [view, setView] = React.useState("Hem");
  const [toast, setToast] = React.useState("");
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(t);
  }, [toast]);
  const invite = () => setToast("Inbjudan skickad");
  const views = {
    "Hem": /*#__PURE__*/React.createElement(HomeView, {
      onInvite: invite
    }),
    "Översikt": /*#__PURE__*/React.createElement(OverviewView, null),
    "Uppgifter": /*#__PURE__*/React.createElement(TasksView, null),
    "Samlingar": /*#__PURE__*/React.createElement(CollectionsView, null),
    "Invånare": /*#__PURE__*/React.createElement(VillagersView, {
      onInvite: invite
    }),
    "Bilder": /*#__PURE__*/React.createElement(PhotosView, null)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sw-4)",
      padding: "var(--sw-4)",
      borderRadius: "var(--sw-r-xl)",
      background: "var(--sw-bg-haze)",
      border: "1px solid var(--sw-line)",
      minHeight: 700
    }
  }, /*#__PURE__*/React.createElement(Sidebar, null, /*#__PURE__*/React.createElement(IslandSign, {
    top: "Welcome to",
    name: islandData.island,
    bottom: "Island"
  }), /*#__PURE__*/React.createElement(NavList, null, islandData.nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.label,
    icon: n.icon,
    active: view === n.label,
    onClick: e => {
      e.preventDefault();
      setView(n.label);
    }
  }, n.label))), /*#__PURE__*/React.createElement(TipBox, null, "Plantera fler tr\xE4d f\xF6r att \xF6ka din \xF6:s betyg!")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "grid",
      gap: "var(--sw-4)",
      alignContent: "start"
    }
  }, views[view]), /*#__PURE__*/React.createElement(Toast, {
    message: toast,
    show: !!toast
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/island-dashboard/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/island-dashboard/Views.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card,
  Note,
  Button,
  Pill,
  Panel,
  StarRating,
  ProgressBar,
  TaskRow,
  InsetStat,
  Calendar,
  PhotoCard,
  VillagerAvatar,
  VillagerGrid
} = window.SherwoodIslandDesignSystem_d5beff;
function PageHead({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--sw-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--sw-font-display)",
      fontSize: 26,
      fontWeight: 600,
      color: "var(--sw-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 13.5,
      color: "var(--sw-ink-soft)"
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sw-paper)",
      border: "1px solid var(--sw-line)",
      borderRadius: "var(--sw-r-md)",
      padding: "8px 12px",
      fontSize: 12.5,
      color: "var(--sw-ink-soft)",
      display: "grid",
      gap: 2,
      boxShadow: "var(--sw-shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("span", null, islandData.date), /*#__PURE__*/React.createElement("span", null, islandData.season)));
}
function HomeView({
  onInvite
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "V\xE4lkommen tillbaka!",
    sub: "Här är en översikt av din ö " + islandData.island
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr 1fr",
      gap: "var(--sw-4)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sw-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "\xD6versikt",
    icon: "\u2766",
    action: "Visa alla"
  }, /*#__PURE__*/React.createElement(InsetStat, {
    label: "\xD6-betyg"
  }, /*#__PURE__*/React.createElement(StarRating, {
    value: islandData.rating
  })), /*#__PURE__*/React.createElement(InsetStat, {
    label: "Dr\xF6madress",
    value: islandData.dreamAddress,
    mono: true
  }), /*#__PURE__*/React.createElement(InsetStat, {
    label: "Inv\xE5nare",
    value: islandData.residents
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Maj 2024",
    icon: "\u25F7"
  }, /*#__PURE__*/React.createElement(Calendar, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sw-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Uppgifter",
    icon: "\u2726",
    action: "Visa alla"
  }, islandData.tasks.map((t, i) => /*#__PURE__*/React.createElement(TaskRow, _extends({
    key: t.name
  }, t, {
    divider: i > 0
  })))), /*#__PURE__*/React.createElement(Card, {
    title: "Senaste bilden",
    icon: "\u25E8",
    action: "Visa alla"
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    glyph: islandData.photos[0].glyph,
    caption: islandData.photos[0].caption
  }), /*#__PURE__*/React.createElement(Note, {
    title: "Id\xE9er"
  }, "Skapa en marknadsplats vid Resident Services. G\xF6ra en \xE4ppelodling bakom museet."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sw-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Inv\xE5nare",
    icon: "\u2618",
    action: "Visa alla"
  }, /*#__PURE__*/React.createElement(VillagerGrid, {
    columns: 2
  }, islandData.villagers.slice(0, 4).map(v => /*#__PURE__*/React.createElement(VillagerAvatar, _extends({
    key: v.name
  }, v)))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onInvite
  }, "Bjud in fler inv\xE5nare")), /*#__PURE__*/React.createElement(Card, {
    title: "S\xE4song",
    icon: "\u273F"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "wood"
  }, "V\xE5r"), /*#__PURE__*/React.createElement(Pill, {
    tone: "gold"
  }, "5 stj\xE4rnor"), /*#__PURE__*/React.createElement(Pill, {
    tone: "work"
  }, "P\xE5g\xE5r")), /*#__PURE__*/React.createElement(Button, {
    variant: "wood",
    fullWidth: true
  }, "\xD6ppna butik")))));
}
function OverviewView() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "\xD6versikt",
    sub: "Allt om ön " + islandData.island
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sw-4)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "\xD6-status",
    icon: "\u2766"
  }, /*#__PURE__*/React.createElement(InsetStat, {
    label: "\xD6-betyg"
  }, /*#__PURE__*/React.createElement(StarRating, {
    value: islandData.rating
  })), /*#__PURE__*/React.createElement(InsetStat, {
    label: "Dr\xF6madress",
    value: islandData.dreamAddress,
    mono: true
  }), /*#__PURE__*/React.createElement(InsetStat, {
    label: "Inv\xE5nare",
    value: islandData.residents
  }), /*#__PURE__*/React.createElement(InsetStat, {
    label: "Tr\xE4d planterade",
    value: "68 / 100"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Framsteg",
    icon: "\u2726"
  }, islandData.tasks.map((t, i) => /*#__PURE__*/React.createElement(TaskRow, _extends({
    key: t.name
  }, t, {
    divider: i > 0
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true
  }, "Visa karta"))));
}
function TasksView() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Uppgifter",
    sub: "Fyra m\xE5l kvar den h\xE4r s\xE4songen"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--sw-4)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Alla uppgifter",
    icon: "\u2726"
  }, islandData.tasks.map((t, i) => /*#__PURE__*/React.createElement(TaskRow, _extends({
    key: t.name
  }, t, {
    divider: i > 0
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sw-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Status",
    icon: "\u2766"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "done"
  }, "Klart"), /*#__PURE__*/React.createElement(Pill, {
    tone: "work"
  }, "P\xE5g\xE5r"), /*#__PURE__*/React.createElement(Pill, {
    tone: "gold"
  }, "5 stj\xE4rnor")), /*#__PURE__*/React.createElement(InsetStat, {
    label: "Total framsteg",
    value: "61 %"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 61,
    total: 100
  })), /*#__PURE__*/React.createElement(Note, {
    title: "Id\xE9er"
  }, "Samla alla DIY-recept innan s\xE4songen tar slut."))));
}
function CollectionsView() {
  const collections = [{
    icon: "✎",
    name: "DIY-recept",
    value: 210,
    total: 602
  }, {
    icon: "≈",
    name: "Fiskar",
    value: 43,
    total: 80
  }, {
    icon: "✿",
    name: "Blommor",
    value: 27,
    total: 34
  }, {
    icon: "♣",
    name: "Träd",
    value: 68,
    total: 100
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Samlingar",
    sub: "Vad du har samlat in hittills"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "var(--sw-4)",
      alignItems: "start"
    }
  }, collections.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.name,
    title: c.name,
    icon: c.icon,
    action: "Visa alla"
  }, /*#__PURE__*/React.createElement(InsetStat, {
    label: "Insamlat",
    value: c.value + " / " + c.total
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.value,
    total: c.total
  })))));
}
function VillagersView({
  onInvite
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Inv\xE5nare",
    sub: islandData.residents + " invånare bor på ön"
  }), /*#__PURE__*/React.createElement(Panel, {
    label: "Alla inv\xE5nare"
  }, /*#__PURE__*/React.createElement(VillagerGrid, {
    columns: 4
  }, islandData.villagers.map(v => /*#__PURE__*/React.createElement(VillagerAvatar, _extends({
    key: v.name
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: "var(--sw-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onInvite
  }, "Bjud in fler inv\xE5nare"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Visa karta"))));
}
function PhotosView() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Bilder",
    sub: "\xD6gonblick fr\xE5n \xF6n"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sw-4)"
    }
  }, islandData.photos.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.caption
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    glyph: p.glyph,
    caption: p.caption
  })))));
}
Object.assign(window, {
  PageHead,
  HomeView,
  OverviewView,
  TasksView,
  CollectionsView,
  VillagersView,
  PhotosView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/island-dashboard/Views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/island-dashboard/data.jsx
try { (() => {
const islandData = {
  island: "Sherwood",
  date: "20 maj 2024",
  season: "Vår · 09:45",
  rating: 4,
  dreamAddress: "DA-1234-5678-9101",
  residents: "8 / 10",
  tasks: [{
    icon: "✿",
    name: "Få 5 stjärnor på din ö",
    value: 4,
    total: 5
  }, {
    icon: "♣",
    name: "Plantera 100 träd",
    value: 68,
    total: 100
  }, {
    icon: "✎",
    name: "Samla alla DIY-recept",
    value: 210,
    total: 602
  }, {
    icon: "≈",
    name: "Fånga alla fiskar",
    value: 43,
    total: 80
  }],
  villagers: [{
    glyph: "🦌",
    name: "Beau"
  }, {
    glyph: "🐻",
    name: "Fauna"
  }, {
    glyph: "🦏",
    name: "Merengue"
  }, {
    glyph: "🐨",
    name: "Marshal"
  }, {
    glyph: "🐿️",
    name: "Filbert"
  }, {
    glyph: "🐤",
    name: "Zucker"
  }, {
    glyph: "🐸",
    name: "Lily"
  }, {
    glyph: "🐧",
    name: "Roald"
  }],
  photos: [{
    glyph: "🌉",
    caption: "Min lilla skogsstig · 19 maj 2024"
  }, {
    glyph: "🌸",
    caption: "Körsbärsblom vid museet · 12 maj 2024"
  }, {
    glyph: "🏝️",
    caption: "Utflykt till mysterieön · 5 maj 2024"
  }],
  nav: [{
    icon: "⌂",
    label: "Hem"
  }, {
    icon: "❦",
    label: "Översikt"
  }, {
    icon: "✦",
    label: "Uppgifter"
  }, {
    icon: "✿",
    label: "Samlingar"
  }, {
    icon: "☘",
    label: "Invånare"
  }, {
    icon: "◨",
    label: "Bilder"
  }]
};
Object.assign(window, {
  islandData
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/island-dashboard/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardLink = __ds_scope.CardLink;

__ds_ns.Note = __ds_scope.Note;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Calendar = __ds_scope.Calendar;

__ds_ns.InsetStat = __ds_scope.InsetStat;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.TaskRow = __ds_scope.TaskRow;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

__ds_ns.VillagerAvatar = __ds_scope.VillagerAvatar;

__ds_ns.VillagerGrid = __ds_scope.VillagerGrid;

__ds_ns.IslandSign = __ds_scope.IslandSign;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.NavList = __ds_scope.NavList;

__ds_ns.TipBox = __ds_scope.TipBox;

})();
