(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react/jsx-runtime"), require("react"), require("epubjs"), require("react-swipeable")) : typeof define === "function" && define.amd ? define(["exports", "react/jsx-runtime", "react", "epubjs", "react-swipeable"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["react-reader"] = {}, global.jsxRuntime, global.React, global.Epub, global.reactSwipeable));
})(this, function(exports2, jsxRuntime, React, Epub, reactSwipeable) {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

  const EpubViewStyle = {
    viewHolder: {
      position: "relative",
      height: "100%",
      width: "100%"
    },
    view: {
      height: "100%"
    }
  };
  class EpubView extends React.Component {
    constructor(props) {
      super(props);
      __publicField(this, "state", {
        isLoaded: false,
        toc: []
      });
      __publicField(this, "viewerRef", React.createRef());
      __publicField(this, "location");
      __publicField(this, "book");
      __publicField(this, "rendition");
      __publicField(this, "prevPage");
      __publicField(this, "nextPage");
      __publicField(this, "onLocationChange", (loc) => {
        const { location, locationChanged } = this.props;
        const newLocation = `${loc.start}`;
        if (location !== newLocation) {
          this.location = newLocation;
          locationChanged && locationChanged(newLocation);
        }
      });
      __publicField(this, "handleKeyPress", (event) => {
        if (event.key === "ArrowRight" && this.nextPage) {
          this.nextPage();
        }
        if (event.key === "ArrowLeft" && this.prevPage) {
          this.prevPage();
        }
      });
      this.location = props.location;
      this.book = this.rendition = this.prevPage = this.nextPage = void 0;
    }
    componentDidMount() {
      this.initBook();
      document.addEventListener("keyup", this.handleKeyPress, false);
    }
    initBook() {
      const { url, tocChanged, epubInitOptions } = this.props;
      if (this.book) {
        this.book.destroy();
      }
      this.book = Epub(url, epubInitOptions);
      this.book.loaded.navigation.then(({ toc }) => {
        this.setState(
          {
            isLoaded: true,
            toc
          },
          () => {
            tocChanged && tocChanged(toc);
            this.initReader();
          }
        );
      });
    }
    componentWillUnmount() {
      if (this.book) {
        this.book.destroy();
      }
      this.book = this.rendition = this.prevPage = this.nextPage = void 0;
      document.removeEventListener("keyup", this.handleKeyPress, false);
    }
    shouldComponentUpdate(nextProps) {
      return !this.state.isLoaded || nextProps.location !== this.props.location || nextProps.url !== this.props.url;
    }
    componentDidUpdate(prevProps) {
      var _a;
      if (prevProps.location !== this.props.location && this.location !== this.props.location) {
        (_a = this.rendition) == null ? void 0 : _a.display(this.props.location + "");
      }
      if (prevProps.url !== this.props.url) {
        this.initBook();
      }
    }
    initReader() {
      const { toc } = this.state;
      const { location, epubOptions, getRendition } = this.props;
      if (this.viewerRef.current) {
        const node = this.viewerRef.current;
        if (this.book) {
          const rendition = this.book.renderTo(node, {
            width: "100%",
            height: "100%",
            ...epubOptions
          });
          this.rendition = rendition;
          this.prevPage = () => {
            rendition.prev();
          };
          this.nextPage = () => {
            rendition.next();
          };
          this.registerEvents();
          getRendition && getRendition(rendition);
          if (typeof location === "string" || typeof location === "number") {
            rendition.display(location + "");
          } else if (toc.length > 0 && toc[0].href) {
            rendition.display(toc[0].href);
          } else {
            rendition.display();
          }
        }
      }
    }
    registerEvents() {
      const { handleKeyPress, handleTextSelected } = this.props;
      if (this.rendition) {
        this.rendition.on("locationChanged", this.onLocationChange);
        this.rendition.on("keyup", handleKeyPress || this.handleKeyPress);
        if (handleTextSelected) {
          this.rendition.on("selected", handleTextSelected);
        }
      }
    }
    renderBook() {
      const { epubViewStyles = EpubViewStyle } = this.props;
      return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: this.viewerRef, style: epubViewStyles.view });
    }
    render() {
      const { isLoaded } = this.state;
      const { loadingView = null, epubViewStyles = EpubViewStyle } = this.props;
      return /* @__PURE__ */ jsxRuntime.jsx("div", { style: epubViewStyles.viewHolder, children: isLoaded && this.renderBook() || loadingView });
    }
  }
  const ReactReaderStyle = {
    container: {
      overflow: "hidden",
      position: "relative",
      height: "100%"
    },
    readerArea: {
      position: "relative",
      zIndex: 1,
      height: "100%",
      width: "100%",
      backgroundColor: "#fff",
      transition: "all .3s ease"
    },
    containerExpanded: {
      transform: "translateX(256px)"
    },
    titleArea: {
      position: "absolute",
      top: 20,
      left: 50,
      right: 50,
      textAlign: "center",
      color: "#999"
    },
    reader: {
      position: "absolute",
      top: 50,
      left: 50,
      bottom: 20,
      right: 50
    },
    swipeWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 200
    },
    prev: {
      left: 1
    },
    next: {
      right: 1
    },
    arrow: {
      outline: "none",
      border: "none",
      background: "none",
      position: "absolute",
      top: "50%",
      marginTop: -32,
      fontSize: 64,
      padding: "0 10px",
      color: "#E2E2E2",
      fontFamily: "arial, sans-serif",
      cursor: "pointer",
      userSelect: "none",
      appearance: "none",
      fontWeight: "normal"
    },
    arrowHover: {
      color: "#777"
    },
    toc: {},
    tocBackground: {
      position: "absolute",
      left: 256,
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: 1
    },
    tocArea: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 0,
      width: 256,
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
      background: "#f2f2f2",
      padding: "10px 0"
    },
    tocAreaButton: {
      userSelect: "none",
      appearance: "none",
      background: "none",
      border: "none",
      display: "block",
      fontFamily: "sans-serif",
      width: "100%",
      fontSize: ".9em",
      textAlign: "left",
      padding: ".9em 1em",
      borderBottom: "1px solid #ddd",
      color: "#aaa",
      boxSizing: "border-box",
      outline: "none",
      cursor: "pointer"
    },
    tocButton: {
      background: "none",
      border: "none",
      width: 32,
      height: 32,
      position: "absolute",
      top: 10,
      left: 10,
      borderRadius: 2,
      outline: "none",
      cursor: "pointer"
    },
    tocButtonExpanded: {
      background: "#f2f2f2"
    },
    tocButtonBar: {
      position: "absolute",
      width: "60%",
      background: "#ccc",
      height: 2,
      left: "50%",
      margin: "-1px -30%",
      top: "50%",
      transition: "all .5s ease"
    },
    tocButtonBarTop: {
      top: "35%"
    },
    tocButtonBottom: {
      top: "66%"
    },
    loadingView: {
      position: "absolute",
      top: "50%",
      left: "10%",
      right: "10%",
      color: "#ccc",
      textAlign: "center",
      marginTop: "-.5em"
    }
  };
  const SwipeWrapper = ({ children, swipeProps }) => {
    const handlers = reactSwipeable.useSwipeable(swipeProps);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ...handlers, children });
  };
  const TocItem = ({ data, setLocation, styles }) => /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx("button", { onClick: () => setLocation(data.href), style: styles, children: data.label }),
    data.subitems && data.subitems.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { paddingLeft: 10 }, children: data.subitems.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx(
      TocItem,
      {
        data: item,
        styles,
        setLocation
      },
      i
    )) })
  ] });
  class ReactReader extends React.PureComponent {
    constructor(props) {
      super(props);
      __publicField(this, "state", {
        isLoaded: false,
        expandedToc: false,
        toc: []
      });
      __publicField(this, "readerRef", React.createRef());
      __publicField(this, "toggleToc", () => {
        this.setState({
          expandedToc: !this.state.expandedToc
        });
      });
      __publicField(this, "next", () => {
        const node = this.readerRef.current;
        if (node && node.nextPage) {
          node.nextPage();
        }
      });
      __publicField(this, "prev", () => {
        const node = this.readerRef.current;
        if (node && node.prevPage) {
          node.prevPage();
        }
      });
      __publicField(this, "onTocChange", (toc) => {
        const { tocChanged } = this.props;
        this.setState(
          {
            toc
          },
          () => tocChanged && tocChanged(toc)
        );
      });
      __publicField(this, "setLocation", (loc) => {
        const { locationChanged } = this.props;
        this.setState(
          {
            expandedToc: false
          },
          () => locationChanged && locationChanged(loc)
        );
      });
    }
    renderToc() {
      const { toc, expandedToc } = this.state;
      const { readerStyles = ReactReaderStyle } = this.props;
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: readerStyles.tocArea, children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: readerStyles.toc, children: toc.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx(
          TocItem,
          {
            data: item,
            setLocation: this.setLocation,
            styles: readerStyles.tocAreaButton
          },
          i
        )) }) }),
        expandedToc && /* @__PURE__ */ jsxRuntime.jsx("div", { style: readerStyles.tocBackground, onClick: this.toggleToc })
      ] });
    }
    renderTocToggle() {
      const { expandedToc } = this.state;
      const { readerStyles = ReactReaderStyle } = this.props;
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          style: Object.assign(
            {},
            readerStyles.tocButton,
            expandedToc ? readerStyles.tocButtonExpanded : {}
          ),
          onClick: this.toggleToc,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                style: Object.assign(
                  {},
                  readerStyles.tocButtonBar,
                  readerStyles.tocButtonBarTop
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                style: Object.assign(
                  {},
                  readerStyles.tocButtonBar,
                  readerStyles.tocButtonBottom
                )
              }
            )
          ]
        }
      );
    }
    render() {
      const {
        title,
        showToc = true,
        loadingView,
        readerStyles = ReactReaderStyle,
        locationChanged,
        swipeable,
        epubViewStyles,
        ...props
      } = this.props;
      const { toc, expandedToc } = this.state;
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: readerStyles.container, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: Object.assign(
              {},
              readerStyles.readerArea,
              expandedToc ? readerStyles.containerExpanded : {}
            ),
            children: [
              showToc && this.renderTocToggle(),
              /* @__PURE__ */ jsxRuntime.jsx("div", { style: readerStyles.titleArea, children: title }),
              /* @__PURE__ */ jsxRuntime.jsx(
                SwipeWrapper,
                {
                  swipeProps: {
                    onSwipedRight: this.prev,
                    onSwipedLeft: this.next,
                    trackMouse: true
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: readerStyles.reader, children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      EpubView,
                      {
                        ref: this.readerRef,
                        loadingView: loadingView === void 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { style: readerStyles.loadingView, children: "Loading…" }) : loadingView,
                        epubViewStyles,
                        ...props,
                        tocChanged: this.onTocChange,
                        locationChanged
                      }
                    ),
                    swipeable && /* @__PURE__ */ jsxRuntime.jsx("div", { style: readerStyles.swipeWrapper })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  style: Object.assign({}, readerStyles.arrow, readerStyles.prev),
                  onClick: this.prev,
                  children: "‹"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  style: Object.assign({}, readerStyles.arrow, readerStyles.next),
                  onClick: this.next,
                  children: "›"
                }
              )
            ]
          }
        ),
        showToc && toc && this.renderToc()
      ] });
    }
  }
  exports2.EpubView = EpubView;
  exports2.EpubViewStyle = EpubViewStyle;
  exports2.ReactReader = ReactReader;
  exports2.ReactReaderStyle = ReactReaderStyle;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=react-reader.umd.js.map
