(window.QJP = window.QJP || []).push([[64], {
    "+Qzl": function (e, t, r) {
        "use strict";
        r("zKZe");
        var n = r("pn57"), a = r("Vg22"), o = r("FdmV"), i = r("XUBu"), s = r("ETT7"), c = r("lHBz"),
            l = (r("TeQF"), r("yq1k"), r("yXV3"), r("2B1R"), r("DQNa"), r("07d7"), r("SuFq"), r("rB9j"), r("JfAA"), r("inlA"), r("JTJg"), r("UxlC"), r("a1gu"), r("Nsbk"), r("VbXa")),
            u = r.n(l), d = r("q1tI"), p = r.n(d), h = r("TSYQ"), m = r.n(h), f = r("og3H"), _ = r("jSiM"),
            g = r("TtcH"), v = r("l6OD"), y = r("EFuM"), C = r("2GHK"), b = r("HKPj"), S = r("m6aF"), E = r("JdxP"),
            k = r("sfiu");
        r("+2oP"), r("EnZy");

        function O(e, t) {
            var r = t, n = e;
            "/" === r.charAt(r.length - 1) && (r = r.slice(0, -1)), "/" === n.charAt(n.length - 1) && (n = n.slice(0, -1));
            for (var a = r.split("/"), o = n.split("/"), i = 0; i < o.length; i++) if (o[i] !== a[i]) return !1;
            return !0
        }

        var P = r("5JEQ"), w = r("fkdw"), A = r("932g"), T = r("lGCb"), M = r("fdo3"), U = r("LszE"),
            I = (r("ma9I"), r("SCbk")), L = r("t1Ez"), N = r("nXOR"), D = r("JxFz"), F = r("bvRJ"), R = r("a08m"),
            j = r("jvKz"), x = r("FJLI"), B = r("1q5m"), H = r("ysfV"), W = r("bBvF").default;
        var z = function (e) {
            u()(r, e);
            var t;
            t = r;

            function r() {
                for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                return (t = e.call.apply(e, [this].concat(n)) || this).handleOverlayMount = function (e) {
                    t.overlayTrigger = e, t.shouldOpenOverlayTrigger() && window.setTimeout((function () {
                        return t.overlayTrigger.open()
                    }))
                }, t.handleDeclineInvite = function () {
                    t.props.actions.requestDeclineInvite({
                        id: t.props.invitation.get("id"),
                        path: t.props.invitation.get("declinePath")
                    })
                }, t.handleAcceptInviteWithMaxClassesReached = function () {
                    t.overlayTrigger && t.overlayTrigger.close(), t.props.actions.toggleUpsellModalMaxClasses()
                }, t
            }

            var n = r.prototype;
            return n.componentDidMount = function () {
                this.shouldOpenOverlayTrigger() && this.overlayTrigger.open()
            }, n.componentDidUpdate = function (e) {
                var t = this;
                !e.isActive && this.shouldOpenOverlayTrigger() && window.setTimeout((function () {
                    return t.overlayTrigger.open()
                }), 200)
            }, n.renderAcceptInviteButtonThatJoinsClass = function () {
                return p.a.createElement(I.a, {
                    className: "UIButton",
                    href: this.props.invitation.get("acceptPath")
                }, p.a.createElement(L.a, {_precomputed: W("en-US", "Accept", {}, "dashboard.side_nav.class_invitation.accept")}))
            }, n.renderAcceptInviteButtonThatOpensUpsellModal = function () {
                return p.a.createElement(D.a, {
                    "aria-label": W("en-US", "Accept", {}, "dashboard.side_nav.class_invitation.accept"),
                    onClick: this.handleAcceptInviteWithMaxClassesReached
                }, p.a.createElement(L.a, {_precomputed: W("en-US", "Accept", {}, "dashboard.side_nav.class_invitation.accept")}))
            }, n.renderPopover = function (e) {
                var t = Object(H.a)(p.a.createElement(R.a, {to: "/" + this.props.invitation.getIn(["sender", "username"])}, this.props.invitation.getIn(["sender", "username"])));
                return p.a.createElement(x.a, {includeArrowInBounds: !e}, p.a.createElement("div", {className: "SiteNavClassInvitation-popover"}, p.a.createElement("div", {className: "SiteNavClassInvitation-main"}, p.a.createElement("span", {className: "SiteNavClassInvitation-avatar"}, p.a.createElement(B.a, {
                    size: 24,
                    user: this.props.invitation.get("sender").toJS()
                })), p.a.createElement("span", {className: "SiteNavClassInvitation-message"}, p.a.createElement(L.a, {_precomputed: W("en-US", "{username} invited you to this class", {username: t}, "dashboard.side_nav.class_invitation.text")}))), this.renderAcceptInviteButtonThatJoinsClass(), p.a.createElement(R.a, {onClick: this.handleDeclineInvite}, p.a.createElement(L.a, {_precomputed: W("en-US", "Ignore", {}, "dashboard.side_nav.class_invitation.ignore")}))))
            }, n.render = function () {
                var e = this;
                return p.a.createElement(N.a, {below: "s"}, (function (t) {
                    return p.a.createElement(j.a, {
                        className: "SiteNavClassInvitation",
                        overlay: e.renderPopover(t),
                        position: t ? "bottom right" : "right",
                        ref: e.handleOverlayMount,
                        triggerAction: "click"
                    }, p.a.createElement(F.a, {icon: "exclamation"}))
                }))
            }, n.shouldOpenOverlayTrigger = function () {
                return this.props.openOnMount && this.overlayTrigger && this.props.isActive
            }, r
        }(p.a.PureComponent), V = Object(a.connect)(null, (function (e) {
            return {
                actions: Object(n.bindActionCreators)({
                    requestDeclineInvite: i.g,
                    toggleUpsellModalMaxClasses: i.m
                }, e)
            }
        }))(z), G = r("RF01"), q = r.n(G), Q = r("ugal");
        r("Rm1S");

        function Y(e) {
            return function (e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
            }(e) || !function (e) {
                return 0 === e.button
            }(e) || "/settings" === window.location.pathname || window.location.href.match(/quizlet.com\/.*\/admin/)
        }

        var J = function (e) {
            u()(r, e);
            var t;
            t = r;

            function r() {
                for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                return (t = e.call.apply(e, [this].concat(n)) || this).handleClick = function (e) {
                    if ((!t.props.onClick || t.props.onClick(e)) && !Y(e) && !Object(v.g)()) {
                        e.preventDefault();
                        var r = t.props.linkTo;
                        r && q.a.getCurrentLocation().pathname !== r && q.a.push(r)
                    }
                }, t
            }

            return r.prototype.render = function () {
                var e = m()("SiteNav-menuItem", {
                    "SiteNav-menuItem--active": this.props.isActive,
                    "SiteNav-menuItem--indented": this.props.isIndented,
                    "SiteNav-menuItem--noIcon": !this.props.icon,
                    "SiteNav-menuItem--viewMore": this.props.isNavViewMore
                });
                return p.a.createElement("div", {className: e}, p.a.createElement(Q.a, {
                    onClick: this.handleClick,
                    to: this.props.linkTo
                }, this.props.icon ? p.a.createElement(F.a, {
                    className: "SiteNav-menuItemIcon",
                    icon: this.props.icon,
                    size: this.props.isIndented ? "small" : "medium"
                }) : null, p.a.createElement("div", {className: "SiteNav-menuItemTitle"}, this.props.title, this.props.subtitle ? p.a.createElement("div", {className: "SiteNav-menuItemSubtitle"}, this.props.subtitle) : null), this.props.notification && p.a.createElement("span", {className: "SiteNav-menuItemNotification"}, this.props.notification)))
            }, r
        }(p.a.PureComponent);
        J.defaultProps = {isIndented: !1, isNavViewMore: !1};
        var K = function (e) {
                u()(r, e);
                var t;
                t = r;

                function r() {
                    for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this).handleClick = function (e) {
                        Y(e) || Object(v.g)() || (e.preventDefault(), q.a.push(t.props.linkTo))
                    }, t
                }

                return r.prototype.render = function () {
                    var e = p.a.createElement("span", {className: "SiteNavSectionHeading"}, this.props.children);
                    return this.props.linkTo ? p.a.createElement(R.a, {
                        onClick: this.handleClick,
                        to: this.props.linkTo
                    }, e) : e
                }, r
            }(p.a.PureComponent), X = r("S41V"), Z = r("Pxp3"), $ = r("FFEN"), ee = r("dxfC"), te = r("OpqZ"),
            re = r("T3U7"), ne = r("BX20"), ae = r("XUS/"), oe = r("PTpY"), ie = r("qbFX");
        var se = function (e) {
            u()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                return p.a.createElement("div", {className: "UpsellModalPricingDisclaimer"}, this.props.children)
            }, r
        }(d.PureComponent), ce = r("bBvF").default;
        var le = function (e) {
            u()(r, e);
            var t;
            t = r;

            function r() {
                for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                return (t = e.call.apply(e, [this].concat(n)) || this).handleInlineCheckoutStart = function () {
                    Object(re.a)("open_checkout_modal__image_upsell")
                }, t.handleInlineCheckoutComplete = function () {
                    window.location.reload()
                }, t
            }

            var n = r.prototype;
            return n.renderPricingDisclaimer = function () {
                return p.a.createElement(se, null, Object(g.s)() ? p.a.createElement(L.a, {_precomputed: ce("en-US", "Billed annually at {annualPrice} when free trial ends", {annualPrice: this.props.price}, "upsell_modal.upgrade_trial_disclaimer")}) : p.a.createElement(L.a, {_precomputed: ce("en-US", "Billed annually at {annualPrice}", {annualPrice: this.props.price}, "upsell_modal.upgrade_monthly_disclaimer")}))
            }, n.render = function () {
                return p.a.createElement(ne.a, {
                    includeCloseButton: !0,
                    inlineCheckout: !0,
                    inlineCheckoutHeadline: p.a.createElement(L.a, {_precomputed: ce("en-US", "Create better study sets with images", {}, "global.add_images_upsell_modal.title")}),
                    inlineCheckoutSource: "contextual_checkout_images",
                    isOpen: this.props.isOpen,
                    onClose: this.props.onClose,
                    onInlineCheckoutComplete: this.handleInlineCheckoutComplete,
                    onInlineCheckoutStart: this.handleInlineCheckoutStart,
                    showMonthlyPricing: !0
                }, p.a.createElement(oe.a, null, p.a.createElement($.a, {
                    deprecatedStyle: !0,
                    size: 3
                }, p.a.createElement(L.a, {_precomputed: ce("en-US", "Create better study sets with images", {}, "global.add_images_upsell_modal.title")})), p.a.createElement(ie.a, {
                    shouldShowFreeTrial: !0,
                    showMonthlyPricing: !0,
                    source: "images_new"
                }), this.renderPricingDisclaimer()), p.a.createElement(ae.a, {
                    headline: p.a.createElement(L.a, {_precomputed: ce("en-US", "Add engaging images", {}, "global.add_images_upsell_modal.feature_engagement.title")}),
                    icon: "image"
                }, p.a.createElement(L.a, {_precomputed: ce("en-US", "Add images to make studying more engaging", {}, "global.add_images_upsell_modal.feature_engagement.text")})), p.a.createElement(ae.a, {
                    headline: p.a.createElement(L.a, {_precomputed: ce("en-US", "Customize your images", {}, "global.add_images_upsell_modal.feature_customization.title")}),
                    icon: "camera"
                }, p.a.createElement(L.a, {_precomputed: ce("en-US", "Upload your own images to customize your content", {}, "global.add_images_upsell_modal.feature_customization.text")})), p.a.createElement(ae.a, {
                    headline: p.a.createElement(L.a, {_precomputed: ce("en-US", "Search our images", {}, "global.add_images_upsell_modal.feature_search.title")}),
                    icon: "search"
                }, p.a.createElement(L.a, {_precomputed: ce("en-US", "Pick from Quizlet's library of 10 million images", {}, "global.add_images_upsell_modal.feature_search.text")})))
            }, r
        }(p.a.PureComponent);
        le.defaultProps = {isSelfIdentifiedTeacher: !1, price: Object(g.n)()};
        var ue = r("xvNY"), de = r("pVnL"), pe = r.n(de);
        var he = function (e) {
            u()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                return p.a.createElement(Z.a, {className: "UpsellModalCtaButton"}, p.a.createElement(D.a, pe()({hero: !0}, this.props)))
            }, r
        }(p.a.Component), me = r("bBvF").default;
        var fe = function (e) {
            u()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            var n = r.prototype;
            return n.handleCreateSetClick = function () {
                Object(ue.s)("onboarding-create-set")
            }, n.render = function () {
                var e = this.props.isTeacher ? p.a.createElement(L.a, {_precomputed: me("en-US", "Enter the words and concepts your students need to study in minutes.", {}, "study_feed.onboarding_cards.create_set_modal.feature_subjects.text_teacher")}) : p.a.createElement(L.a, {_precomputed: me("en-US", "Enter the words and concepts you need to study in minutes.", {}, "study_feed.onboarding_cards.create_set_modal.feature_subjects.text_student")});
                return p.a.createElement(ne.a, {
                    headerContent: e,
                    includeCloseButton: !0,
                    isOpen: this.props.isOpen,
                    onClose: this.props.onClose
                }, p.a.createElement(oe.a, null, p.a.createElement(he, {
                    "aria-label": me("en-US", "Create a study set", {}, "study_feed.onboarding_cards.create_set_modal.button_text"),
                    linkTo: this.props.createSetPath,
                    onClick: this.handleCreateSetClick,
                    source: "onboarding-create-set"
                }, p.a.createElement(L.a, {_precomputed: me("en-US", "Create a study set", {}, "study_feed.onboarding_cards.create_set_modal.button_text")}))), p.a.createElement(ae.a, {
                    headline: p.a.createElement(L.a, {_precomputed: me("en-US", "Any subject, any topic", {}, "study_feed.onboarding_cards.create_set_modal.feature_subjects.title")}),
                    icon: "create-set"
                }, this.props.isTeacher ? p.a.createElement(L.a, {_precomputed: me("en-US", "Enter the words and concepts your students need to study in minutes.", {}, "study_feed.onboarding_cards.create_set_modal.feature_subjects.text_teacher")}) : p.a.createElement(L.a, {_precomputed: me("en-US", "Enter the words and concepts you need to study in minutes.", {}, "study_feed.onboarding_cards.create_set_modal.feature_subjects.text_student")})), p.a.createElement(ae.a, {
                    headline: p.a.createElement(L.a, {_precomputed: me("en-US", "Take it anywhere", {}, "study_feed.onboarding_cards.create_set_modal.feature_mobile.title")}),
                    icon: "mobile"
                }, this.props.isTeacher ? p.a.createElement(L.a, {_precomputed: me("en-US", "Students can access your study set anywhere with our iOS and Android apps.", {}, "study_feed.onboarding_cards.create_set_modal.feature_mobile.text_teacher")}) : p.a.createElement(L.a, {_precomputed: me("en-US", "Access your study set anywhere with our iOS and Android apps.", {}, "study_feed.onboarding_cards.create_set_modal.feature_mobile.text_student")})), p.a.createElement(ae.a, {
                    headline: p.a.createElement(L.a, {_precomputed: me("en-US", "Quick and Easy", {}, "study_feed.onboarding_cards.create_set_modal.feature_quick.title")}),
                    icon: "check"
                }, p.a.createElement(L.a, {_precomputed: me("en-US", "Get started in minutes - and even import your terms from an existing document.", {}, "study_feed.onboarding_cards.create_set_modal.feature_quick.text")})))
            }, r
        }(d.PureComponent);
        fe.defaultProps = {createSetPath: "/create-set"};
        var _e = r("GE6+"), ge = r("TEdO"), ve = r("fhhs"), ye = r("AQxD"), Ce = r("bBvF").default;
        var be = {
            blog: "/blog",
            facebook: "https://www.facebook.com/quizlet/",
            helpCenter: "/help",
            mobile: "/mobile",
            privacyPolicy: "/privacy",
            renew: Object(g.l)("mobile_nav_renew"),
            teachers: "/teachers",
            twitter: "https://twitter.com/quizlet",
            instagram: "https://www.instagram.com/quizlet/",
            upgrade: Object(g.l)("mobile_nav")
        }, Se = function (e) {
            u()(r, e);
            var t;
            t = r;

            function r(t) {
                var r;
                (r = e.call(this, t) || this).handleToggleMaxClassesUpsell = function () {
                    r.props.actions.toggleUpsellModalMaxClasses()
                }, r.handleClickLogout = function (e) {
                    e.preventDefault(), Object(M.c)("/logout")
                }, r.handleClickShowMoreBookmarks = function () {
                    r.setState({isShowingAllBookmarks: !0})
                }, r.handleClickShowMoreClasses = function () {
                    r.setState({isShowingAllClasses: !0})
                }, r.handleClickShowMoreFolders = function () {
                    r.setState({isShowingAllFolders: !0})
                }, r.handleClickDiagramShowcase = function () {
                    return r.logClickEvent("diagrams_browse_link"), !0
                }, r.handleClickCreateClass = function () {
                    r.logClickEvent("create_class_link"), r.checkIsTeacher() && !r.isUserUnderAge() && r.props.actions.toggleCreateClassModal()
                }, r.handleClickCreateFolder = function () {
                    r.logClickEvent("create_folder_link"), r.props.actions.toggleCreateFolderModal()
                }, r.handleRequestCloseSiteBrowseNav = function () {
                    r.props.actions.updateIsSiteBrowseNavOpen(!r.props.isBrowseNavOpen)
                }, r.handleClickHome = function () {
                    Object(ue.j)()
                }, r.onReferAFriendSeenMobile = function () {
                    r.props.showReferral && Object(re.a)("li_homepage_sidebar_referrals_cta_seen")
                }, r.onReferAFriendClick = function () {
                    Object(re.a)("li_homepage_sidebar_referrals_cta_clicked")
                }, r.checkIsTeacher = function () {
                    return r.props.user.get("selfIdentifiedTeacherStatus") === f.jb.TEACHER
                }, r.logClickEvent = function (e) {
                    Object(w.a)("dashboard_sidebar", f.F.BROWSE, e)
                }, r.shouldShowBrowseLink = function () {
                    return Object(P.a)()
                };
                return r.state = {
                    isShowingAllBookmarks: t.bookmarkedFolders.count() <= 4,
                    isShowingAllClasses: t.classMemberships.count() <= 4,
                    isShowingAllFolders: t.folders.count() <= 4,
                    expandableItemsThreshold: 3
                }, r
            }

            var n = r.prototype;
            return n.componentDidMount = function () {
                Object(ve.a)({above: "m"}).matches && this.props.showReferral && Object(re.a)("li_homepage_sidebar_referrals_cta_seen")
            }, n.getBlogImageSrc = function () {
                return Object(y.h)() || !Object(v.h)() ? this.props.blogEntry.get("imagePath") : this.props.blogEntry.get("imagePath").replace("700.jpg", "200s.jpg")
            }, n.renderCreateModals = function () {
                var e = this.props.user.get("selfIdentifiedTeacherStatus") === f.jb.TEACHER;
                return p.a.createElement("div", null, p.a.createElement(S.a, {
                    isOpen: this.props.isCreateClassModalOpen,
                    isTriggeredFromTeacherTips: this.props.isTriggeredFromTeacherTips,
                    mainSchool: this.props.mainSchool ? this.props.mainSchool.toJS() : null,
                    onClose: this.props.actions.toggleCreateClassModal,
                    schools: this.props.userSchools.isEmpty() ? {} : this.props.userSchools.toJS(),
                    user: this.props.user.toJS()
                }), p.a.createElement(E.a, {
                    actions: {onClose: this.props.actions.toggleCreateFolderModal},
                    isOpen: this.props.isCreateFolderModalOpen
                }), p.a.createElement(fe, {
                    isOpen: this.props.isCreateSetModalOpen,
                    isTeacher: e,
                    onClose: this.props.actions.toggleCreateSetModal
                }), p.a.createElement(le, {
                    isOpen: this.props.isCreateImageSetUpsellModalOpen,
                    onClose: this.props.actions.toggleCreateImageSetUpsellModal
                }), p.a.createElement(b.default, {
                    isOpen: this.props.isClassProgressUpsellModalOpen,
                    onClose: this.props.actions.toggleClassProgressUpsellModal
                }))
            }, n.renderStudyPlanner = function () {
                var e = "/study-planner";
                return p.a.createElement(J, {
                    icon: "calendar",
                    isActive: this.isActivePath(e),
                    linkTo: e,
                    onClick: function () {
                        Object(M.a)(e)
                    },
                    title: Ce("en-US", "Study Planner", {}, "dashboard.side_nav.study_planner_link")
                })
            }, n.renderProgressDashboard = function () {
                var e = "/progress";
                return p.a.createElement(J, {
                    icon: "nav-progress",
                    isActive: this.isActivePath(e),
                    linkTo: e,
                    onClick: function () {
                        Object(M.a)(e)
                    },
                    title: Ce("en-US", "Progress Dashboard", {}, "dashboard.side_nav.progress_dashboard_link")
                })
            }, n.renderTopSection = function () {
                var e = "/latest", t = "/settings";
                this.props.user.get("username"), this.props.user.get("username");
                return p.a.createElement("div", {className: "SiteNav-section"}, p.a.createElement(J, {
                    icon: "home",
                    isActive: this.isActivePath(e),
                    linkTo: e,
                    onClick: this.handleClickHome,
                    title: Ce("en-US", "Home", {}, "dashboard.side_nav.home_link")
                }), this.props.shouldShowStudyPlanner ? this.renderStudyPlanner() : null, this.props.shouldShowProgressDashboard ? this.renderProgressDashboard() : null, this.renderDiagramsOrPremiumContentItem(), this.renderReferralSection(), this.renderBrowseSection(), p.a.createElement(J, {
                    icon: "settings",
                    isActive: this.isActivePath(t),
                    linkTo: t,
                    onClick: function () {
                        Object(M.a)("/settings")
                    },
                    title: Ce("en-US", "Settings", {}, "dashboard.side_nav.settings_link")
                }))
            }, n.renderDiagramsOrPremiumContentItem = function () {
                var e = "/diagram-showcase", t = "/features/premium-content";
                return "en" === C.d ? p.a.createElement(J, {
                    icon: "showcase",
                    isActive: this.isActivePath(t),
                    linkTo: t,
                    onClick: function () {
                        Object(ge.h)(f.y.SIDEBAR_PROMO), Object(w.a)("dashboard_sidebar", f.F.BROWSE, "premium_content"), Object(M.a)(t)
                    },
                    title: Ce("en-US", "Premium Content", {}, "dashboard.side_nav.premium_content_link")
                }) : p.a.createElement(J, {
                    icon: "showcase",
                    isActive: this.isActivePath(e),
                    linkTo: e,
                    onClick: this.handleClickDiagramShowcase,
                    title: Ce("en-US", "Browse diagrams", {}, "dashboard.side_nav.browse_diagrams_link")
                })
            }, n.renderReferralSection = function () {
                var e = "/refer-a-friend",
                    t = Ce("en-US", "Refer a Friend", {}, "userinfo_header.settings_dropdown.refer_a_friend");
                return this.props.showReferral ? p.a.createElement(J, {
                    icon: "gift",
                    isActive: this.isActivePath(e),
                    linkTo: e,
                    onClick: this.onReferAFriendClick,
                    title: Object(_.b)(new Date(2020, 8, 1)) ? t : p.a.createElement("div", {className: "SiteNav-menuItem-highlightedItem"}, p.a.createElement("div", null, t), p.a.createElement(ye.a, {variant: "yellow"}, Ce("en-US", "NEW", {}, "header.rich_text_beta_banner.new")))
                }) : null
            }, n.renderBrowseSection = function () {
                var e = this;
                return p.a.createElement(A.b, null, (function (t) {
                    return t && e.shouldShowBrowseLink() ? p.a.createElement(J, {
                        icon: "subjects",
                        isActive: !1,
                        onClick: e.handleRequestCloseSiteBrowseNav,
                        title: Ce("en-US", "Browse", {}, "dashboard.side_nav.browse_link")
                    }) : null
                }))
            }, n.renderLibrarySection = function () {
                var e = {
                    classes: "/" + this.props.user.get("username") + "/classes",
                    folders: "/" + this.props.user.get("username") + "/folders",
                    profile: "/" + this.props.user.get("username")
                };
                return p.a.createElement("div", {className: "SiteNav-section"}, p.a.createElement(J, {
                    icon: "sets",
                    isActive: this.isActivePath(e.profile),
                    linkTo: e.profile,
                    title: Ce("en-US", "Sets", {}, "dashboard.side_nav.library_links.sets_link") + " (" + this.props.numSetsCreated + ")"
                }), p.a.createElement(J, {
                    icon: "folder",
                    isActive: this.isActivePath(e.folders),
                    linkTo: e.folders,
                    title: Ce("en-US", "Folders", {}, "dashboard.side_nav.library_links.folders_link") + " (" + this.props.folders.count() + ")"
                }), this.props.folders.count() > 0 ? this.renderFolders(!1) : null, p.a.createElement(J, {
                    icon: "folder-add",
                    isActive: !1,
                    isIndented: !0,
                    onClick: this.handleClickCreateFolder,
                    title: Ce("en-US", "Create a folder", {}, "dashboard.side_nav.folders.create_folder")
                }), p.a.createElement(J, {
                    icon: "people",
                    isActive: this.isActivePath(e.classes),
                    linkTo: e.classes,
                    title: Ce("en-US", "Classes", {}, "dashboard.side_nav.library_links.classes_link") + " (" + this.props.classMemberships.count() + ")"
                }), this.renderClasses(!1), p.a.createElement(_e.a, {
                    actions: {onClose: this.handleToggleMaxClassesUpsell},
                    isOpen: this.props.isUpsellModalMaxClassesOpen,
                    numClassesAllowed: this.props.numClassesAllowed
                }), this.renderAddOrJoinClassLink())
            }, n.renderClassesInvitedTo = function (e) {
                var t = this;
                return void 0 === e && (e = !0), this.props.classInvitations.map((function (r, n) {
                    var a = Object(T.a)(r.getIn(["class", "_webUrl"])).pathname,
                        o = n >= t.state.expandableItemsThreshold && !t.state.isShowingAllClasses,
                        i = p.a.createElement(V, {
                            invitation: r,
                            isActive: t.props.activeInviteId === r.get("id"),
                            openOnMount: !t.isCurrentLocationClassPage() && !Object(v.h)() && t.props.showSidebarOnDesktop
                        });
                    return p.a.createElement(k.a, {
                        key: n,
                        transitionName: "SiteNav-classInvitationTransition"
                    }, r.get("_dismissed") ? null : p.a.createElement("div", {
                        className: m()({"SiteNav-menuItem--hidden": o}),
                        key: "class-" + n
                    }, p.a.createElement(J, {
                        icon: e ? "class" : null,
                        isActive: t.isActivePath(a),
                        linkTo: a,
                        notification: i,
                        title: r.getIn(["class", "title"])
                    })))
                }))
            }, n.renderClassesMemberOf = function (e) {
                var t = this;
                void 0 === e && (e = !0);
                var r = this.props.classInvitations.count();
                return this.props.classMemberships.map((function (n, a) {
                    var o = Object(T.a)(n.getIn(["class", "_webUrl"])).pathname, i = n.get("level") === f.j.APPLICANT,
                        s = r + a >= t.state.expandableItemsThreshold && !t.state.isShowingAllClasses,
                        c = n.get("numNotifications"),
                        l = c > 0 ? p.a.createElement("div", {className: "SiteNav-classNotification"}, c) : null,
                        u = m()("SiteNav-menuItem--class", {
                            "SiteNav-menuItem--hidden": s,
                            "SiteNav-menuItem--pending": i
                        });
                    return p.a.createElement("div", {
                        className: u,
                        key: "class-" + a
                    }, p.a.createElement(J, {
                        icon: e ? "class" : null,
                        isActive: t.isActivePath(o),
                        linkTo: o,
                        notification: l,
                        title: n.getIn(["class", "title"])
                    }))
                }))
            }, n.renderAddOrJoinClassLink = function () {
                var e = this.checkIsTeacher(),
                    t = Ce("en-US", "Create a class", {}, "dashboard.side_nav.classes.create_class");
                e || (t = this.props.canCreateClass ? Ce("en-US", "Join or create a class", {}, "dashboard.side_nav.classes.join_or_create_class") : Ce("en-US", "Join a class", {}, "dashboard.side_nav.classes.join_class"));
                var r = e ? null : "/add-class", n = this.handleClickCreateClass;
                return this.props.canCreateClass || !e || this.isUserUnderAge() || (r = null, n = this.handleToggleMaxClassesUpsell), this.isUserUnderAge() && (r = "/add-class", t = Ce("en-US", "Join a class", {}, "dashboard.side_nav.classes.join_class")), p.a.createElement(J, {
                    icon: "class-add",
                    isActive: this.isActivePath("/add-class"),
                    isIndented: !0,
                    linkTo: r,
                    onClick: n,
                    title: t
                })
            }, n.renderClasses = function (e) {
                return void 0 === e && (e = !0), p.a.createElement(p.a.Fragment, null, this.props.classInvitations.count() > 0 ? this.renderClassesInvitedTo(e) : null, this.props.classMemberships.count() > 0 ? this.renderClassesMemberOf(e) : null, this.state.isShowingAllClasses ? null : p.a.createElement(J, {
                    icon: e ? "wedge-down" : null,
                    isActive: !1,
                    isNavViewMore: !0,
                    onClick: this.handleClickShowMoreClasses,
                    title: Ce("en-US", "View more", {}, "dashboard.side_nav.general_overflow_label")
                }))
            }, n.renderFolders = function (e) {
                var t = this;
                void 0 === e && (e = !0);
                var r = this.props.folders.map((function (r, n) {
                    var a = Object(T.a)(r.get("_webUrl")).pathname,
                        o = n >= t.state.expandableItemsThreshold && !t.state.isShowingAllFolders;
                    return p.a.createElement("div", {
                        className: m()("SiteNav-menuItem--folder", {"SiteNav-menuItem--hidden": o}),
                        key: "folder-" + n
                    }, p.a.createElement(J, {
                        icon: e ? "folder" : null,
                        isActive: t.isActivePath(a),
                        linkTo: a,
                        title: r.get("name")
                    }))
                }));
                return p.a.createElement(p.a.Fragment, null, r, this.state.isShowingAllFolders ? null : p.a.createElement(J, {
                    icon: e ? "wedge-down" : null,
                    isActive: !1,
                    isNavViewMore: !0,
                    onClick: this.handleClickShowMoreFolders,
                    title: Ce("en-US", "View more", {}, "dashboard.side_nav.general_overflow_label")
                }))
            }, n.renderBookmarksSection = function () {
                var e = this;
                return p.a.createElement("div", {className: "SiteNav-section"}, p.a.createElement(K, null, p.a.createElement(L.a, {_precomputed: Ce("en-US", "BOOKMARKED FOLDERS", {}, "dashboard.side_nav.bookmarks.section_label")})), p.a.createElement("div", {className: "SiteNav-menuItemWrapper"}, this.props.bookmarkedFolders.map((function (t, r) {
                    var n = Object(T.a)(t.get("_webUrl")).pathname,
                        a = r >= e.state.expandableItemsThreshold && !e.state.isShowingAllBookmarks;
                    return p.a.createElement("div", {
                        className: m()("SiteNav-menuItem-bookmark", {"SiteNav-menuItem--hidden": a}),
                        key: "class-" + r
                    }, p.a.createElement(J, {
                        icon: "folder-bookmarked",
                        isActive: e.isActivePath(n),
                        linkTo: n,
                        subtitle: p.a.createElement(L.a, {_precomputed: Ce("en-US", "by {folderCreator}", {folderCreator: t.getIn(["person", "username"])}, "dashboard.side_nav.bookmarks.folder_byline")}),
                        title: t.get("name")
                    }))
                })), this.state.isShowingAllBookmarks ? null : p.a.createElement(J, {
                    icon: "wedge-down",
                    isActive: !1,
                    onClick: this.handleClickShowMoreBookmarks,
                    title: Ce("en-US", "{numRemainingBookmarks, plural, other {# more}}", {numRemainingBookmarks: this.props.bookmarkedFolders.count() - this.state.expandableItemsThreshold}, "dashboard.side_nav.bookmarks.overflow_label")
                })))
            }, n.renderBlogSection = function () {
                return p.a.createElement("div", {className: "SiteNav-section"}, p.a.createElement(K, {linkTo: "/blog?source=blog"}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "QUIZLET NEWS", {}, "dashboard.side_nav.blog.section_label")})), p.a.createElement("a", {
                    className: "SiteNav-blogSection",
                    href: "/blog/" + this.props.blogEntry.get("slug") + "?source=blog_post"
                }, this.props.blogEntry.get("imagePath") ? p.a.createElement("span", {className: "SiteNav-blogImageWrapper"}, p.a.createElement("img", {
                    className: "SiteNav-blogImage",
                    role: "presentation",
                    src: this.getBlogImageSrc()
                })) : null, p.a.createElement($.a, {deprecatedStyle: !0, size: 4}, this.props.blogEntry.get("title"))))
            }, n.renderUpgradeFooterLink = function () {
                if (this.props.user.get("selfIdentifiedTeacherStatus") === f.jb.TEACHER) return p.a.createElement("div", null, p.a.createElement(R.a, {to: be.teachers}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Teachers", {}, "dashboard.side_nav.teachers_feature_page_link")})));
                if (this.props.showRenewLink) {
                    var e = this.props.isUserInFreeTrial ? p.a.createElement(L.a, {_precomputed: Ce("en-US", "Upgrade now", {}, "upsell.upgrade_now_button")}) : p.a.createElement(L.a, {_precomputed: Ce("en-US", "Renew now", {}, "upsell.renew_now_button")});
                    return p.a.createElement("div", null, p.a.createElement(R.a, {to: be.renew}, e))
                }
                return this.props.user.get("type") !== f.Ob.TEACHER && this.props.user.get("type") !== f.Ob.PLUS ? p.a.createElement("div", null, p.a.createElement(R.a, {to: be.upgrade}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Upgrade", {}, "dashboard.side_nav.mobile_upgrade_page_link")}))) : void 0
            }, n.renderDesktopFooter = function () {
                return p.a.createElement("div", {className: "SiteNav-footer"}, p.a.createElement("div", null, p.a.createElement(R.a, {to: be.helpCenter}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Help Center", {}, "dashboard.side_nav.help_center_link")}))), p.a.createElement("div", null, p.a.createElement(R.a, {to: be.privacyPolicy}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Privacy Policy", {}, "dashboard.side_nav.privacy_policy_link")}))), this.renderUpgradeFooterLink(), this.isUserUnderAge() ? null : p.a.createElement("div", {className: "SiteNav-socialIcons"}, p.a.createElement(R.a, {to: be.twitter}, p.a.createElement(F.a, {
                    icon: "twitter",
                    size: "medium"
                })), p.a.createElement(R.a, {to: be.instagram}, p.a.createElement(F.a, {
                    icon: "instagram",
                    size: "medium"
                })), p.a.createElement(R.a, {to: be.facebook}, p.a.createElement(F.a, {
                    icon: "facebook",
                    size: "medium"
                }))))
            }, n.renderMobileFooter = function () {
                return p.a.createElement("div", {className: "SiteNav-footer"}, p.a.createElement(te.a, null, p.a.createElement(X.a, {
                    mobileWidth: .5,
                    width: .5
                }, this.props.showBlog ? p.a.createElement("div", null, p.a.createElement(R.a, {to: be.blog}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Latest Updates", {}, "dashboard.side_nav.blog_link")}))) : null, p.a.createElement("div", null, p.a.createElement(R.a, {to: be.helpCenter}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Help Center", {}, "dashboard.side_nav.help_center_link")}))), p.a.createElement("div", null, p.a.createElement(R.a, {to: be.privacyPolicy}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Privacy Policy", {}, "dashboard.side_nav.privacy_policy_link")})))), p.a.createElement(X.a, {
                    mobileWidth: .5,
                    width: .5
                }, p.a.createElement("div", null, p.a.createElement(R.a, {to: be.mobile}, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Mobile", {}, "dashboard.side_nav.mobile_feature_page_link")}))), this.renderUpgradeFooterLink(), p.a.createElement("div", null, p.a.createElement(R.a, {
                    onClick: this.handleClickLogout,
                    variant: "alert"
                }, p.a.createElement(L.a, {_precomputed: Ce("en-US", "Log out", {}, "dashboard.side_nav.mobile_logout_link")}))))))
            }, n.renderDesktopNav = function () {
                return p.a.createElement(Z.a, {className: "SiteNav"}, this.renderTopSection(), this.renderLibrarySection(), this.props.bookmarkedFolders.count() > 0 ? this.renderBookmarksSection() : null, this.props.showBlog ? this.renderBlogSection() : null, this.renderDesktopFooter())
            }, n.renderMobileNav = function () {
                var e = p.a.createElement("div", {className: "SiteNav-mobileHeader"}, p.a.createElement(R.a, {
                    to: "/",
                    variant: "inverted"
                }, p.a.createElement(U.a, null)));
                return p.a.createElement(ee.a, {
                    fullWidthBody: !0,
                    headerContent: e,
                    isOpen: this.props.isMobileNavOpen,
                    onClose: this.props.actions.closeMobileNav,
                    onOpen: this.onReferAFriendSeenMobile,
                    takeoverScreenAt: "m"
                }, p.a.createElement("div", {className: "SiteNav"}, this.renderTopSection(), this.renderLibrarySection(), this.props.bookmarkedFolders.count() > 0 ? this.renderBookmarksSection() : null, this.props.showBlog ? this.renderBlogSection() : null, this.renderMobileFooter()))
            }, n.render = function () {
                var e = this;
                return p.a.createElement("div", null, p.a.createElement(A.b, null, (function (t) {
                    return t ? e.renderMobileNav() : e.renderDesktopNav()
                })), this.props.user ? this.renderCreateModals() : null)
            }, n.isCurrentLocationClassPage = function () {
                return this.props.currentLocation.pathname.indexOf("/class/") > -1
            }, n.isUserUnderAge = function () {
                return this.props.user && this.props.user.get("_isUnderAge")
            }, n.isProgressDashboardPage = function (e) {
                return e.includes("/progress")
            }, n.isFolderPage = function (e) {
                return e.includes("/folders/")
            }, n.isProfileFolderPage = function (e) {
                return e.endsWith("/folders")
            }, n.isClassPage = function (e) {
                return e.includes("/class/")
            }, n.isProfileClassPage = function (e) {
                return e.endsWith("/classes")
            }, n.isProfileRecentPage = function (e) {
                return e.endsWith("/recent")
            }, n.isProfilePage = function (e) {
                return e.endsWith(this.props.user.get("username"))
            }, n.isHomePage = function (e) {
                return "/latest" === e
            }, n.isMemberOfClass = function (e) {
                return this.props.classMemberships.filter((function (t) {
                    return e.includes(Object(T.a)(t.getIn(["class", "_webUrl"])).pathname)
                })).size > 0
            }, n.isActivePath = function (e) {
                var t = this.props.currentLocation.pathname;
                return this.isHomePage(e) ? this.isProfileRecentPage(t) || O(e, t) : this.isProgressDashboardPage(t) ? O(e, t) : this.isProfileRecentPage(t) ? O(e, t) && !this.isProfilePage(e) : this.isProfileFolderPage(t) || this.isFolderPage(t) ? O(e, t) && this.isProfileFolderPage(e) : this.isProfileClassPage(t) ? O(e, t) && this.isProfileClassPage(e) : this.isClassPage(t) ? this.isProfileClassPage(e) && this.isMemberOfClass(t) : !(this.isFolderPage(t) && !this.isFolderPage(e)) && O(e, t)
            }, r
        }(d.PureComponent), Ee = r("peh1");
        Object(c.b)();
        var ke = Object(Ee.createSelector)(Object(o.a)("siteNav", {
            activeInviteId: function (e) {
                return e.get("activeInviteId")
            }, blogEntry: function (e) {
                return e.get("blogEntry")
            }, bookmarkedFolders: function (e) {
                return e.get("bookmarkedFolders")
            }, canCreateClass: function (e) {
                return e.get("canCreateClass")
            }, classInvitations: function (e) {
                return e.get("classInvitations")
            }, classMemberships: function (e) {
                return e.get("classMemberships")
            }, currentLocation: function (e, t, r) {
                return Object(c.a)(r)
            }, folders: function (e) {
                return e.get("folders")
            }, isBrowseNavOpen: function (e) {
                return e.get("isBrowseNavOpen")
            }, isClassProgressUpsellModalOpen: function (e) {
                return e.get("isClassProgressUpsellModalOpen")
            }, isCreateClassModalOpen: function (e) {
                return e.get("isCreateClassModalOpen")
            }, isCreateFolderModalOpen: function (e) {
                return e.get("isCreateFolderModalOpen")
            }, isCreateImageSetUpsellModalOpen: function (e) {
                return e.get("isCreateImageSetUpsellModalOpen")
            }, isCreateSetModalOpen: function (e) {
                return e.get("isCreateSetModalOpen")
            }, isMobileNavOpen: function (e) {
                return e.get("isMobileNavOpen")
            }, isUpsellModalMaxClassesOpen: function (e) {
                return e.get("isUpsellModalMaxClassesOpen")
            }, isUserInFreeTrial: function (e) {
                return e.get("isUserInFreeTrial")
            }, mainSchool: function (e) {
                return e.get("mainSchool")
            }, numClassesAllowed: function (e) {
                return e.get("numClassesAllowed")
            }, numClassesUsed: function (e) {
                return e.get("numClassesUsed")
            }, numSetsCreated: function (e) {
                return e.get("numSetsCreated")
            }, shouldShowProgressDashboard: function (e) {
                return e.get("shouldShowProgressDashboard")
            }, shouldShowStudyPlanner: function (e) {
                return e.get("shouldShowStudyPlanner")
            }, showBlog: function (e) {
                return e.get("showBlog")
            }, showReferral: function (e) {
                return e.get("showReferral")
            }, showNewNav: function (e) {
                return e.get("shouldShowNewNav")
            }, showRenewLink: function (e) {
                return e.get("showRenewLink")
            }, user: function (e) {
                return e.get("user")
            }, userSchools: function (e) {
                return e.get("userSchools")
            }, isTriggeredFromTeacherTips: function (e) {
                return e.get("isTriggeredFromTeacherTips")
            }
        }), Object(o.a)("core", {
            isBrowseNavOpen: function (e) {
                return e.get("isBrowseNavOpen")
            }
        }), (function () {
            return Object.assign.apply(Object, arguments)
        }));
        t.a = Object(a.connect)(ke, (function (e) {
            return {
                actions: Object(n.bindActionCreators)({
                    closeMobileNav: i.b,
                    toggleClassProgressUpsellModal: i.h,
                    toggleCreateClassModal: i.i,
                    toggleCreateFolderModal: i.j,
                    toggleCreateImageSetUpsellModal: i.k,
                    toggleCreateSetModal: i.l,
                    toggleUpsellModalMaxClasses: i.m,
                    updateIsSiteBrowseNavOpen: s.g
                }, e)
            }
        }))(Se)
    }, "/yDZ": function (e, t, r) {
        "use strict";
        t.__esModule = !0;
        t.PUSH = "PUSH", t.REPLACE = "REPLACE", t.POP = "POP"
    }, "5JEQ": function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return o
        }));
        r("yq1k");
        var n = r("zK28"), a = ["fr", "gb", "us"];

        function o() {
            var e = n.a.countryCode;
            return a.includes(e)
        }
    }, "5eZy": function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return l
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("q1tI"), i = r.n(o), s = r("TSYQ"), c = r.n(s);
        var l = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                var e = c()("UIVerticalRule", {
                    "UIVerticalRule--onWhite": "white" === this.props.bgColor,
                    "UIVerticalRule--onGray": "gray" === this.props.bgColor
                });
                return i.a.createElement("span", {className: e})
            }, r
        }(i.a.PureComponent);
        l.defaultProps = {bgColor: "white"}
    }, "5nSj": function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return s
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("q1tI"), i = r.n(o);
        var s = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                return i.a.createElement("s", {className: "UIStrikethrough"}, this.props.children)
            }, r
        }(i.a.PureComponent)
    }, "8C/+": function (e, t, r) {
        "use strict";
        r.d(t, "b", (function () {
            return c
        })), r.d(t, "a", (function () {
            return l
        })), r.d(t, "d", (function () {
            return u
        })), r.d(t, "c", (function () {
            return d
        }));
        r("QWBl"), r("FZtP");
        var n = r("shtt"), a = r("QLaP"), o = r.n(a), i = function (e, t) {
            var r = document.querySelector(e);
            r && (r.style.display = t)
        }, s = function (e, t) {
            var r = document.querySelector(e);
            r && r.classList.remove(t)
        }, c = function (e) {
            if (e) {
                var t = document.querySelector(".CheckoutErrorMessage .UINotice");
                t && (t.innerHTML = "", e.forEach((function (e) {
                    t.append(Object(n.a)(e) + "\n")
                })), t.scrollIntoView({behavior: "smooth"}))
            }
        }, l = function () {
            var e = document.querySelector(".CheckoutCreditCardForm-submitButton .UIButton"),
                t = e ? e.textContent : null;
            return o()(null !== t, "Submit button text cannot be empty"), t
        }, u = function (e) {
            var t, r, n;
            i(".CheckoutCreditCardHeader-savedCard", "none"), i(".CheckoutSavedCreditCardForm", "none"), i(".CheckoutCreditCardForm", "block"), !0 === e ? (t = ".CheckoutCreditCardHeader-changeCard", r = "is-hidden", (n = document.querySelector(t)) && n.classList.add(r), s(".CheckoutCreditCardHeader-regularHeader", "is-hidden"), i(".CheckoutCreditCardHeader-savedCardToggle", "none")) : (s(".CheckoutCreditCardHeader-changeCard", "is-hidden"), i(".CheckoutCreditCardHeader-savedCardToggle", "block"))
        }, d = function (e) {
            window.location.href = e
        }
    }, "8U9d": function (e, t, r) {
        "use strict";
        r("zKZe"), r("eoL8"), Object.defineProperty(t, "__esModule", {value: !0});
        var n = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.default = function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = r.selectLocationState,
                s = void 0 === i ? o : i, c = r.adjustUrlOnReplay, l = void 0 === c || c;
            if (void 0 === s(t.getState())) throw new Error("Expected the routing state to be available either as `state.routing` or as the custom expression you can specify as `selectLocationState` in the `syncHistoryWithStore()` options. Ensure you have added the `routerReducer` to your store's reducers via `combineReducers` or whatever method you use to isolate your reducers.");
            var u = void 0, d = void 0, p = void 0, h = void 0, m = void 0, f = function (e) {
                return s(t.getState()).locationBeforeTransitions || (e ? u : void 0)
            };
            if (u = f(), l) {
                var _ = function () {
                    var t = f(!0);
                    m !== t && u !== t && (d = !0, m = t, e.transitionTo(n({}, t, {action: "PUSH"})), d = !1)
                };
                p = t.subscribe(_), _()
            }
            var g = function (e) {
                d || (m = e, !u && (u = e, f()) || t.dispatch({type: a.LOCATION_CHANGE, payload: e}))
            };
            h = e.listen(g), e.getCurrentLocation && g(e.getCurrentLocation());
            return n({}, e, {
                listen: function (r) {
                    var n = f(!0), a = !1, o = t.subscribe((function () {
                        var e = f(!0);
                        e !== n && (n = e, a || r(n))
                    }));
                    return e.getCurrentLocation || r(n), function () {
                        a = !0, o()
                    }
                }, unsubscribe: function () {
                    l && p(), h()
                }
            })
        };
        var a = r("dan0"), o = function (e) {
            return e.routing
        }
    }, A00f: function (e, t, r) {
        "use strict";
        r("ma9I"), r("zKZe"), r("rB9j"), r("UxlC"), r("hByQ"), t.__esModule = !0;
        var n, a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, o = r("cr+I"), i = r("Yqds"), s = (n = i) && n.__esModule ? n : {default: n}, c = r("mHnE"), l = r("ZR02");
        var u = function (e) {
            return (0, o.stringify)(e).replace(/%20/g, "+")
        }, d = o.parse;
        t.default = function (e) {
            return function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e(t),
                    n = t.stringifyQuery, o = t.parseQueryString;
                "function" != typeof n && (n = u), "function" != typeof o && (o = d);
                var i = function (e) {
                    return e ? (null == e.query && (e.query = o(e.search.substring(1))), e) : e
                }, p = function (e, t) {
                    if (null == t) return e;
                    var r = "string" == typeof e ? (0, l.parsePath)(e) : e, o = n(t);
                    return a({}, r, {search: o ? "?" + o : ""})
                }, h = function () {
                    return i(r.getCurrentLocation())
                }, m = function (e) {
                    return r.listenBefore((function (t, r) {
                        return (0, s.default)(e, i(t), r)
                    }))
                }, f = function (e) {
                    return r.listen((function (t) {
                        return e(i(t))
                    }))
                }, _ = function (e) {
                    return r.push(p(e, e.query))
                }, g = function (e) {
                    return r.replace(p(e, e.query))
                }, v = function (e) {
                    return r.createPath(p(e, e.query))
                }, y = function (e) {
                    return r.createHref(p(e, e.query))
                }, C = function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                    var o = r.createLocation.apply(r, [p(e, e.query)].concat(n));
                    return e.query && (o.query = (0, c.createQuery)(e.query)), i(o)
                };
                return a({}, r, {
                    getCurrentLocation: h,
                    listenBefore: m,
                    listen: f,
                    push: _,
                    replace: g,
                    createPath: v,
                    createHref: y,
                    createLocation: C
                })
            }
        }
    }, Ad4u: function (e, t, r) {
        "use strict";
        r("yXV3"), t.__esModule = !0;
        t.addEventListener = function (e, t, r) {
            return e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent("on" + t, r)
        }, t.removeEventListener = function (e, t, r) {
            return e.removeEventListener ? e.removeEventListener(t, r, !1) : e.detachEvent("on" + t, r)
        }, t.supportsHistory = function () {
            var e = window.navigator.userAgent;
            return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && (window.history && "pushState" in window.history)
        }, t.supportsGoWithoutReloadUsingHash = function () {
            return -1 === window.navigator.userAgent.indexOf("Firefox")
        }, t.supportsPopstateOnHashchange = function () {
            return -1 === window.navigator.userAgent.indexOf("Trident")
        }, t.isExtraneousPopstateEvent = function (e) {
            return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
        }
    }, BX20: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return T
        }));
        r("QWBl"), r("DQNa"), r("zKZe"), r("07d7"), r("SuFq"), r("JfAA"), r("FZtP");
        var n = r("pVnL"), a = r.n(n), o = (r("a1gu"), r("Nsbk"), r("VbXa")), i = r.n(o), s = r("fvM1"), c = r("t1Ez"),
            l = r("a08m"), u = r("dxfC"), d = r("og3H"), p = r("17x9"), h = r.n(p), m = r("q1tI"), f = r.n(m),
            _ = r("ojxP"), g = r.n(_), v = r("xvNY"), y = r("TtcH"), C = r("X0lI"), b = r.n(C), S = r("fdo3"),
            E = r("ysfV"), k = r("R7uB"), O = r.n(k), P = r("bBvF").default;
        var w = Object(E.a)(f.a.createElement(l.a, {
                newTab: !0,
                to: "/tos"
            }, f.a.createElement(c.a, {_precomputed: P("en-US", "Terms of Service", {}, "checkout.coupon.terms_of_service_link")}))),
            A = Object(E.a)(f.a.createElement(l.a, {
                newTab: !0,
                to: "/help/2807911/article"
            }, f.a.createElement(c.a, {_precomputed: P("en-US", "here", {}, "checkout.credit_card_form.recurring_disclaimer_faq_link")}))),
            T = function (e) {
                i()(r, e);
                var t;
                t = r;

                function r(t) {
                    var r;
                    return (r = e.call(this, t) || this).getPrice = function () {
                        switch (r.props.productType) {
                            case d.J.RECURRING_ONE_YEAR_GO:
                            case d.J.RECURRING_ONE_YEAR_GO_TIER2:
                            case d.J.RECURRING_ONE_YEAR_GO_TIER3:
                                return Object(y.i)();
                            default:
                                return Object(y.n)()
                        }
                    }, r.handleInlineCheckoutStart = function (e, t) {
                        window.recurly || r.loadRecurlyJs(), r.state.inlineCheckoutCartData ? r.setState({
                            inlineCheckoutShowing: !0,
                            inlineCheckoutState: "default"
                        }) : r.setState({inlineCheckoutState: "loading"}, (function () {
                            Object(y.a)(e, t).then((function (e) {
                                return r.setState({
                                    inlineCheckoutCartData: e,
                                    inlineCheckoutShowing: !0,
                                    inlineCheckoutState: "default"
                                })
                            })).catch((function () {
                                return Object(S.a)(Object(y.l)(t))
                            }))
                        }))
                    }, r.handleInlineCheckoutAttempt = function () {
                        r.setState({inlineCheckoutState: "submitting"})
                    }, r.handleInlineCheckoutCancel = function () {
                        r.setState({
                            inlineCheckoutShowing: !1,
                            inlineCheckoutCartData: null,
                            inlineCheckoutState: "default"
                        }, (function () {
                            r.props.onInlineCheckoutCancel && r.props.onInlineCheckoutCancel()
                        }))
                    }, r.handleInlineCheckoutComplete = function () {
                        var e = r.state.inlineCheckoutCartData, t = r.props.purchasableContentData;
                        e ? Object(v.u)(e.trackingData.purchaseAmount, e.trackingData.purchaseCurrency, e.trackingData.purchasedUpgrade, !1) : t && t.length > 0 && t.forEach((function (e) {
                            var t = e.modelData, r = t.modelId, n = t.modelType, a = e.title, o = e.trackingData,
                                i = o.priceCurrency, s = o.priceValue;
                            Object(v.l)({
                                content_ids: r,
                                content_type: v.a.PRODUCT,
                                modelType: n,
                                priceCurrency: i,
                                priceValue: s,
                                title: a
                            })
                        })), r.setState({inlineCheckoutState: "complete"}), r.props.onInlineCheckoutComplete && r.props.onInlineCheckoutComplete()
                    }, r.handleInlineCheckoutError = function () {
                        r.setState({inlineCheckoutState: "default"})
                    }, r.handleModalClose = function () {
                        r.state.inlineCheckoutShowing && "default" === r.state.inlineCheckoutState ? r.handleInlineCheckoutCancel() : r.state.inlineCheckoutShowing || r.props.onClose && r.props.onClose()
                    }, r.handleModalOpen = function () {
                        r.props.purchasableContentData && !r.state.inlineCheckoutShowing && r.initiatePurchasableContentInlineCheckout(), r.props.onOpen && r.props.onOpen()
                    }, r.loadRecurlyJs = function () {
                        g()("https://js.recurly.com/v4/recurly.js", (function () {
                            O()((function () {
                                QLoad("qrecurly")
                            }))
                        }))
                    }, r.state = {
                        inlineCheckoutShowing: !1,
                        inlineCheckoutCartData: null,
                        inlineCheckoutState: "default"
                    }, r
                }

                var n = r.prototype;
                return n.componentDidUpdate = function (e, t) {
                    !t.inlineCheckoutShowing && this.state.inlineCheckoutShowing && this.props.onInlineCheckoutStart && this.props.onInlineCheckoutStart()
                }, n.getChildContext = function () {
                    return {
                        inlineCheckout: this.props.inlineCheckout,
                        inlineCheckoutStart: this.handleInlineCheckoutStart,
                        inlineCheckoutState: this.state.inlineCheckoutState,
                        productType: this.props.productType
                    }
                }, n.renderInlineCheckout = function () {
                    var e = this.props.purchasableContentData;
                    return e ? f.a.createElement(s.a, {
                        cartData: e,
                        couponCode: this.props.couponCode,
                        creditCardDetails: this.props.creditCardDetails,
                        disclaimer: this.props.disclaimer,
                        offerToSaveCreditCard: !0,
                        onChangePurchaseDuration: this.props.onInlineCheckoutChangePurchaseDuration,
                        onCheckoutAttempt: this.handleInlineCheckoutAttempt,
                        onCheckoutComplete: this.handleInlineCheckoutComplete,
                        onCheckoutError: this.handleInlineCheckoutError,
                        showCouponCode: !0,
                        source: this.props.inlineCheckoutSource
                    }) : f.a.createElement(s.a, {
                        cartData: b()(this.state.inlineCheckoutCartData),
                        checkoutButtonTextSource: Object(y.s)() ? this.renderFreeTrialCheckoutButtonText() : null,
                        creditCardDetails: this.props.creditCardDetails,
                        disclaimer: Object(y.s)() ? this.renderFreeTrialDisclaimer() : null,
                        headerContent: this.props.inlineCheckoutHeadline,
                        onCheckoutAttempt: this.handleInlineCheckoutAttempt,
                        onCheckoutComplete: this.handleInlineCheckoutComplete,
                        onCheckoutError: this.handleInlineCheckoutError,
                        showMonthlyPricing: this.props.showMonthlyPricing,
                        source: this.props.inlineCheckoutSource
                    })
                }, n.renderFreeTrialCheckoutButtonText = function () {
                    var e = Object(y.f)();
                    switch (e.unit) {
                        case d.Eb.DAY:
                            return f.a.createElement(c.a, {_precomputed: P("en-US", "Start {couponFreeTrialAmount, plural, one {1-day} other {#-day}} free trial", {couponFreeTrialAmount: e.amount}, "checkout.credit_card_form.checkout_button_coupon_free_trial_days")});
                        case d.Eb.WEEK:
                            return f.a.createElement(c.a, {_precomputed: P("en-US", "Start {couponFreeTrialAmount, plural, one {1-week} other {#-week}} free trial", {couponFreeTrialAmount: e.amount}, "checkout.credit_card_form.checkout_button_coupon_free_trial_weeks")});
                        case d.Eb.MONTH:
                            return f.a.createElement(c.a, {_precomputed: P("en-US", "Start {couponFreeTrialAmount, plural, one {1-month} other {#-month}} free trial", {couponFreeTrialAmount: e.amount}, "checkout.credit_card_form.checkout_button_coupon_free_trial_months")});
                        default:
                            throw new Error("Invalid freeTrialData unit supplied!")
                    }
                }, n.renderFreeTrialDisclaimer = function () {
                    var e = Object(y.f)();
                    switch (e.unit) {
                        case d.Eb.DAY:
                            return f.a.createElement(c.a, {
                                _precomputed: P("en-US", "Your subscription will renew automatically every 12 months. By clicking Start {couponFreeTrialAmount, plural, one {1-day} other {#-day}} free trial, you agree to be charged {formattedPrice} when your trial ends and each subsequent year until you cancel. You also agree to Quizlet's {tosLink}. Details on managing your subscription available {faqLink}", {
                                    couponFreeTrialAmount: e.amount,
                                    faqLink: A,
                                    formattedPrice: this.getPrice(),
                                    tosLink: w
                                }, "checkout.coupon.free_trial_disclaimer_description_days")
                            });
                        case d.Eb.WEEK:
                            return f.a.createElement(c.a, {
                                _precomputed: P("en-US", "Your subscription will renew automatically every 12 months. By clicking Start {couponFreeTrialAmount, plural, one {1-week} other {#-week}} free trial, you agree to be charged {formattedPrice} when your trial ends and each subsequent year until you cancel. You also agree to Quizlet's {tosLink}. Details on managing your subscription available {faqLink}", {
                                    couponFreeTrialAmount: e.amount,
                                    faqLink: A,
                                    formattedPrice: this.getPrice(),
                                    tosLink: w
                                }, "checkout.coupon.free_trial_disclaimer_description_weeks")
                            });
                        case d.Eb.MONTH:
                            return f.a.createElement(c.a, {
                                _precomputed: P("en-US", "Your subscription will renew automatically every 12 months. By clicking Start {couponFreeTrialAmount, plural, one {1-month} other {#-month}} free trial, you agree to be charged {formattedPrice} when your trial ends and each subsequent year until you cancel. You also agree to Quizlet's {tosLink}. Details on managing your subscription available {faqLink}", {
                                    couponFreeTrialAmount: e.amount,
                                    faqLink: A,
                                    formattedPrice: this.getPrice(),
                                    tosLink: w
                                }, "checkout.coupon.free_trial_disclaimer_description_months")
                            });
                        default:
                            throw new Error("Invalid freeTrialData unit supplied!")
                    }
                }, n.render = function () {
                    var e = Object.assign({}, this.props);
                    return delete e.children, delete e.inlineCheckout, delete e.inlineCheckoutHeadline, delete e.inlineCheckoutSource, delete e.onInlineCheckoutCancel, delete e.onInlineCheckoutComplete, delete e.onInlineCheckoutStart, this.state.inlineCheckoutShowing ? f.a.createElement(u.a, a()({}, e, {
                        background: "white",
                        fullWidthBody: !1,
                        headerContent: this.props.headerContent || f.a.createElement(c.a, {_precomputed: P("en-US", "Upgrade your account", {}, "checkout_modal.title")}),
                        includeCloseButton: !0,
                        onClose: this.handleModalClose
                    }), f.a.createElement("div", {className: "UpsellModal"}, this.renderInlineCheckout())) : f.a.createElement(u.a, a()({}, e, {
                        onClose: this.handleModalClose,
                        onOpen: this.handleModalOpen
                    }), f.a.createElement("div", {className: "UpsellModal"}, this.props.children))
                }, n.initiatePurchasableContentInlineCheckout = function () {
                    window.recurly || this.loadRecurlyJs(), this.setState({
                        inlineCheckoutShowing: !0,
                        inlineCheckoutState: "default"
                    })
                }, r
            }(f.a.Component);
        T.childContextTypes = {
            inlineCheckout: h.a.bool,
            inlineCheckoutStart: h.a.func,
            inlineCheckoutState: h.a.string,
            productType: h.a.number
        }, T.defaultProps = {
            background: "gray",
            creditCardDetails: null,
            fullWidthBody: !0,
            headerContent: f.a.createElement(c.a, {_precomputed: P("en-US", "Upgrade your account", {}, "upsell_modal.header")}),
            isOpen: !1,
            onClose: function () {
            },
            productType: Object(y.o)()
        }
    }, EVih: function (e, t, r) {
        "use strict";
        r("ma9I"), r("yXV3"), r("+2oP"), r("zKZe"), r("rB9j"), r("UxlC"), t.__esModule = !0;
        var n, a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, o = r("Yqds"), i = (n = o) && n.__esModule ? n : {default: n}, s = r("ZR02");
        t.default = function (e) {
            return function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e(t), n = t.basename,
                    o = function (e) {
                        return e ? (n && null == e.basename && (0 === e.pathname.toLowerCase().indexOf(n.toLowerCase()) ? (e.pathname = e.pathname.substring(n.length), e.basename = n, "" === e.pathname && (e.pathname = "/")) : e.basename = ""), e) : e
                    }, c = function (e) {
                        if (!n) return e;
                        var t = "string" == typeof e ? (0, s.parsePath)(e) : e, r = t.pathname,
                            o = "/" === n.slice(-1) ? n : n + "/", i = "/" === r.charAt(0) ? r.slice(1) : r;
                        return a({}, t, {pathname: o + i})
                    }, l = function () {
                        return o(r.getCurrentLocation())
                    }, u = function (e) {
                        return r.listenBefore((function (t, r) {
                            return (0, i.default)(e, o(t), r)
                        }))
                    }, d = function (e) {
                        return r.listen((function (t) {
                            return e(o(t))
                        }))
                    }, p = function (e) {
                        return r.push(c(e))
                    }, h = function (e) {
                        return r.replace(c(e))
                    }, m = function (e) {
                        return r.createPath(c(e))
                    }, f = function (e) {
                        return r.createHref(c(e))
                    }, _ = function (e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                        return o(r.createLocation.apply(r, [c(e)].concat(n)))
                    };
                return a({}, r, {
                    getCurrentLocation: l,
                    listenBefore: u,
                    listen: d,
                    push: p,
                    replace: h,
                    createPath: m,
                    createHref: f,
                    createLocation: _
                })
            }
        }
    }, "GE6+": function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return h
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("q1tI"), i = r.n(o), s = r("t1Ez"), c = r("zt8I"), l = r("BX20"),
            u = r("PTpY"), d = r("qbFX"), p = r("bBvF").default;
        var h = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                return i.a.createElement(l.a, {
                    headerContent: i.a.createElement(s.a, {_precomputed: p("en-US", "No more classes left", {}, "classes.max_classes_upsell_modal.title")}),
                    isOpen: this.props.isOpen,
                    onClose: this.props.actions.onClose
                }, i.a.createElement(u.a, null, i.a.createElement(c.a, null, i.a.createElement(s.a, {_precomputed: p("en-US", "You can only create a maximum of {numClassesAllowed, plural, other {# classes}}.", {numClassesAllowed: this.props.numClassesAllowed}, "classes.max_classes_upsell_modal.remaining_classes")})), i.a.createElement(c.a, null, i.a.createElement(s.a, {_precomputed: p("en-US", "You can delete an old class in order to create a new one or upgrade your account for an unlimited number of classes.", {}, "classes.max_classes_upsell_modal.unlock_unlimited_classes")})), i.a.createElement(d.a, {
                    shouldShowFreeTrial: !0,
                    showMonthlyPricing: !0,
                    source: "classes"
                })))
            }, r
        }(i.a.PureComponent)
    }, GcHW: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return i
        }));
        var n = r("q1tI"), a = r.n(n), o = r("KAy6");

        function i(e, t, r) {
            return Object(o.renderToStaticMarkup)(a.a.createElement(e, t, r))
        }
    }, HGUJ: function (e, t, r) {
        "use strict";
        r("eoL8"), r("rB9j"), r("UxlC"), Object.defineProperty(t, "__esModule", {value: !0});
        var n = t.CALL_HISTORY_METHOD = "@@router/CALL_HISTORY_METHOD";

        function a(e) {
            return function () {
                for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                return {type: n, payload: {method: e, args: r}}
            }
        }

        var o = t.push = a("push"), i = t.replace = a("replace"), s = t.go = a("go"), c = t.goBack = a("goBack"),
            l = t.goForward = a("goForward");
        t.routerActions = {push: o, replace: i, go: s, goBack: c, goForward: l}
    }, HKPj: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, "default", (function () {
            return _
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("q1tI"), i = r.n(o), s = r("t1Ez"), c = r("FFEN"), l = r("a08m"),
            u = r("BX20"), d = r("XUS/"), p = r("PTpY"), h = r("qbFX"), m = r("M3Qh"), f = r("bBvF").default;
        var _ = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                var e = "en-us" === Object(m.a)() ? "/features/teacher-class-progress" : "/features/class-progress";
                return i.a.createElement(u.a, {
                    isOpen: this.props.isOpen,
                    onClose: this.props.onClose
                }, i.a.createElement(p.a, null, i.a.createElement(c.a, {
                    deprecatedStyle: !0,
                    size: 3
                }, i.a.createElement(s.a, {_precomputed: f("en-US", "Introducing class progress", {}, "class_progress_upsell_modal.title")})), i.a.createElement("div", {className: "ClassProgressUpsellModal-message"}, i.a.createElement(s.a, {_precomputed: f("en-US", "Gain valuable insights into your students' performance and study habits, all in one place.", {}, "class_progress_upsell_modal.message")})), i.a.createElement(h.a, {
                    onClick: this.props.onUpgradeButtonClick,
                    shouldShowFreeTrial: !0,
                    showMonthlyPricing: !0,
                    source: this.props.upgradeSource || "class_progress"
                }), i.a.createElement("div", {className: "ClassProgressUpsellModal-learnMoreLink"}, i.a.createElement(l.a, {
                    newTab: !0,
                    to: e
                }, i.a.createElement(s.a, {_precomputed: f("en-US", "Learn more", {}, "class_progress_upsell_modal.learn_more_link")})))), i.a.createElement(d.a, {
                    headline: i.a.createElement(s.a, {_precomputed: f("en-US", "Track student progress", {}, "class_progress_upsell_modal.features.first.title")}),
                    icon: "class"
                }, i.a.createElement(s.a, {_precomputed: f("en-US", "See how your students are studying and track their progress", {}, "class_progress_upsell_modal.features.first.description")})), i.a.createElement(d.a, {
                    headline: i.a.createElement(s.a, {_precomputed: f("en-US", "Most missed words", {}, "class_progress_upsell_modal.features.second.title")}),
                    icon: "test"
                }, i.a.createElement(s.a, {_precomputed: f("en-US", "View which words or concepts your students are struggling with most.", {}, "class_progress_upsell_modal.features.second.description")})), i.a.createElement(d.a, {
                    headline: i.a.createElement(s.a, {_precomputed: f("en-US", "See progress over time", {}, "class_progress_upsell_modal.features.third.title")}),
                    icon: "clock"
                }, i.a.createElement(s.a, {_precomputed: f("en-US", "Compare study data from the past day, week, and year.", {}, "class_progress_upsell_modal.features.third.description")})), i.a.createElement(d.a, {
                    headline: i.a.createElement(s.a, {_precomputed: f("en-US", "Convenient and simple to use", {}, "class_progress_upsell_modal.features.fourth.title")}),
                    icon: "check"
                }, i.a.createElement(s.a, {_precomputed: f("en-US", "Check these stats on any set you create (or any set in your classes).", {}, "class_progress_upsell_modal.features.fourth.description")})))
            }, r
        }(o.PureComponent)
    }, HaSr: function (e, t, r) {
        "use strict";
        t.__esModule = !0;
        t.canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement)
    }, HmKC: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return o
        }));
        var n = r("X0lI"), a = r.n(n), o = function () {
            return a()(window.recurly, "global.recurly missing in module")
        }
    }, JdxP: function (e, t, r) {
        "use strict";
        r("07d7"), r("5s+n");
        var n = r("mr8R");
        t.a = Object(n.a)((function () {
            return Promise.all([r.e(2), r.e(3), r.e(0), r.e(134)]).then(r.bind(null, "hQWh"))
        }))
    }, KX5j: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return s
        }));
        var n = r("GcHW"), a = r("9WHe"), o = r("a08m"), i = r("bBvF").default;

        function s(e) {
            switch (e) {
                case"errors.purchase_error.already_subscribed.self":
                    return i("en-US", "YOU ALREADY HAVE A QUIZLET SUBSCRIPTION.", {}, "errors.purchase_error.already_subscribed.self");
                case"errors.purchase_error.already_subscribed.someone_else":
                    return i("en-US", "THE USER ALREADY HAS A QUIZLET SUBSCRIPTION.", {}, "errors.purchase_error.already_subscribed.someone_else");
                case"errors.purchase_error.already_subscribed_plus.self":
                    return i("en-US", "YOU ALREADY HAVE A QUIZLET PLUS SUBSCRIPTION.", {}, "errors.purchase_error.already_subscribed_plus.self");
                case"errors.purchase_error.already_subscribed_plus.someone_else":
                    return i("en-US", "THE USER ALREADY HAS A QUIZLET PLUS SUBSCRIPTION.", {}, "errors.purchase_error.already_subscribed_plus.someone_else");
                case"errors.purchase_error.already_subscribed_teacher.self":
                    return i("en-US", "YOU ALREADY HAVE A QUIZLET TEACHER SUBSCRIPTION.", {}, "errors.purchase_error.already_subscribed_teacher.self");
                case"errors.purchase_error.already_subscribed_teacher.someone_else":
                    return i("en-US", "THE USER ALREADY HAS A QUIZLET TEACHER SUBSCRIPTION.", {}, "errors.purchase_error.already_subscribed_teacher.someone_else");
                case"errors.purchase_error.cart_out_of_date":
                    return i("en-US", "YOUR CART IS OUT OF DATE! RELOAD THE PAGE BEFORE CHECKING OUT.", {}, "errors.purchase_error.cart_out_of_date");
                case"errors.purchase_error.error_loading_cart":
                    return i("en-US", "ERROR LOADING YOUR CART. PLEASE RELOAD THIS PAGE.", {}, "errors.purchase_error.error_loading_cart");
                case"errors.purchase_error.generic_error":
                    return i("en-US", "THERE WAS A PROBLEM PROCESSING YOUR TRANSACTION. PLEASE TRY AGAIN AND LET US KNOW IF THE PROBLEM PERSISTS.", {}, "errors.purchase_error.generic_error");
                case"recurly.payment_errors.cardholder_requested_stop":
                    return i("en-US", "Your requested recurring payments can no longer be accepted using this card. Please update your billing information.", {}, "errors.recurly.purchase_errors.requested_stop");
                case"recurly.payment_errors.customer_canceled_transaction":
                    return i("en-US", "You canceled the transaction after it was approved. Please update your billing information to authorize a new transaction.", {}, "errors.recurly.purchase_errors.canceled_transaction");
                case"recurly.payment_errors.declined":
                    return i("en-US", "The transaction was declined. Please use a different card or contact your bank.", {}, "errors.recurly.purchase_errors.declined");
                case"recurly.payment_errors.declined_missing_data":
                    return i("en-US", "The card information you entered is not valid. Please double check.", {}, "errors.recurly.purchase_errors.invalid_card_information");
                case"recurly.payment_errors.duplicate_transaction":
                    return i("en-US", "A similar transaction was recently submitted. Please wait a few minutes and try again.", {}, "errors.recurly.purchase_errors.duplicate_transaction");
                case"recurly.payment_errors.exceeds_daily_limit":
                    return i("en-US", "The transaction exceeds your daily approval limit. Please contact your bank or try another card.", {}, "errors.recurly.purchase_errors.exceeds_daily_limit");
                case"recurly.payment_errors.fraud_too_many_attempts":
                    return i("en-US", "The transaction was declined. You have exceeded a reasonable number of attempts. Please wait a while before retrying or try a different card.", {}, "errors.recurly.purchase_errors.too_many_attempts");
                case"recurly.payment_errors.insufficient_funds":
                    return i("en-US", "The transaction was declined due to insufficient funds in your account. Please use a different card or contact your bank.", {}, "errors.recurly.purchase_errors.insufficient_funds");
                case"recurly.payment_errors.invalid_account_number":
                    return i("en-US", "The account number you provided is not valid. Please double check.", {}, "errors.recurly.purchase_errors.invalid_account_number");
                case"recurly.payment_errors.invalid_email":
                    return i("en-US", "Your email address is not valid. Please double check.", {}, "errors.recurly.purchase_errors.invalid_email");
                case"recurly.payment_errors.temporary_hold":
                    return i("en-US", "Your card has a temporary hold. Please use a different card or contact your bank.", {}, "errors.recurly.purchase_errors.temporary_hold");
                case"recurly.payment_errors.declined_card_number":
                case"recurly.payment_errors.invalid_card_number":
                    return i("en-US", "The card number you entered is not valid. Please double check.", {}, "errors.recurly.purchase_errors.invalid_card_number");
                case"recurly.payment_errors.declined_expiration_date":
                case"recurly.payment_errors.expired_card":
                    return i("en-US", "Your credit card is expired, please update your card.", {}, "errors.recurly.purchase_errors.expired_card");
                case"recurly.payment_errors.declined_security_code":
                case"recurly.payment_errors.fraud_security_code":
                    return i("en-US", "The CVC you entered is not valid. Please double check.", {}, "errors.recurly.purchase_errors.invalid_cvc");
                case"recurly.payment_errors.approved":
                case"recurly.payment_errors.approved_fraud_review":
                    return i("en-US", "Approved", {}, "errors.recurly.purchase_errors.approved");
                case"recurly.payment_errors.restricted_card":
                case"recurly.payment_errors.restricted_card_chargeback":
                    return i("en-US", "Your card cannot be accepted. Please contact your bank for details or try another card.", {}, "errors.recurly.purchase_errors.restricted_card");
                case"recurly.payment_errors.authorization_expired":
                case"recurly.payment_errors.gateway_token_not_found":
                case"recurly.payment_errors.no_billing_information":
                    var t = Object(n.a)(o.a, {to: "/settings#upgrade-setting"}, i("en-US", "billing information", {}, "errors.recurly.purchase_errors.update_billing_information_link"));
                    return i("en-US", "Your payment details were not found. Please update your {billingLink}.", {billingLink: t}, "errors.recurly.purchase_errors.update_billing_information");
                case"recurly.payment_errors.cvv_required":
                case"recurly.payment_errors.declined_exception":
                case"recurly.payment_errors.recurly_failed_to_get_token":
                case"recurly.payment_errors.try_again":
                case"recurly.payment_errors.unknown":
                    return i("en-US", "The payment processing system experienced an error. Your card was not charged. Please try again later.", {}, "errors.recurly.purchase_errors.try_again");
                case"recurly.payment_errors.paypal_account_issue":
                case"recurly.payment_errors.paypal_declined_use_alternate":
                case"recurly.payment_errors.paypal_hard_decline":
                case"recurly.payment_errors.paypal_invalid_billing_agreement":
                case"recurly.payment_errors.paypal_primary_declined":
                    return i("en-US", "Your primary funding source was declined. Please update your billing information with PayPal or try again.", {}, "errors.recurly.purchase_errors.paypal_try_again");
                case"recurly.payment_errors.call_issuer":
                case"recurly.payment_errors.call_issuer_update_cardholder_data":
                case"recurly.payment_errors.card_not_activated":
                case"recurly.payment_errors.card_type_not_accepted":
                case"recurly.payment_errors.invalid_data":
                case"recurly.payment_errors.invalid_issuer":
                case"recurly.payment_errors.invalid_merchant_type":
                case"recurly.payment_errors.invalid_transaction":
                case"recurly.payment_errors.payment_not_accepted":
                    return i("en-US", "You cannot complete this transaction using this card. Please try another card or contact your bank.", {}, "errors.recurly.purchase_errors.invalid_payment");
                case"recurly.payment_errors.ach_transactions_not_supported":
                case"recurly.payment_errors.api_error":
                case"recurly.payment_errors.api-error":
                case"recurly.payment_errors.authorization_already_captured":
                case"recurly.payment_errors.authorization_amount_depleted":
                case"recurly.payment_errors.cannot_refund_unsettled_transactions":
                case"recurly.payment_errors.contact_gateway":
                case"recurly.payment_errors.currency_not_supported":
                case"recurly.payment_errors.deposit_referenced_chargeback":
                case"recurly.payment_errors.fraud_address":
                case"recurly.payment_errors.fraud_address_recurly":
                case"recurly.payment_errors.fraud_advanced_verification":
                case"recurly.payment_errors.fraud_gateway":
                case"recurly.payment_errors.fraud_generic":
                case"recurly.payment_errors.fraud_ip_address":
                case"recurly.payment_errors.fraud_manual_decision":
                case"recurly.payment_errors.fraud_risk_check":
                case"recurly.payment_errors.fraud_stolen_card":
                case"recurly.payment_errors.fraud_velocity":
                case"recurly.payment_errors.gateway_error":
                case"recurly.payment_errors.gateway_timeout":
                case"recurly.payment_errors.gateway_unavailable":
                case"recurly.payment_errors.invalid_gateway_configuration":
                case"recurly.payment_errors.invalid_login":
                case"recurly.payment_errors.issuer_unavailable":
                case"recurly.payment_errors.no_gateway":
                case"recurly.payment_errors.partial_credits_not_supported":
                case"recurly.payment_errors.payment_cannot_void_authorization":
                case"recurly.payment_errors.processor_unavailable":
                case"recurly.payment_errors.recurly_error":
                case"recurly.payment_errors.recurly_token_not_found":
                case"recurly.payment_errors.ssl_error":
                case"recurly.payment_errors.three_d_secure_not_supported":
                case"recurly.payment_errors.contact_support":
                case"recurly.payment_errors.total_credit_exceeds_capture":
                case"recurly.payment_errors.transaction_already_voided":
                case"recurly.payment_errors.transaction_cannot_be_refunded":
                case"recurly.payment_errors.transaction_cannot_be_voided":
                case"recurly.payment_errors.transaction_failed_to_settled":
                case"recurly.payment_errors.transaction_not_found":
                case"recurly.payment_errors.transaction_settled":
                case"recurly.payment_errors.zero_dollar_auth_not_supported":
                    var r = Object(n.a)(o.a, {to: "mailto:upgradesupport@quizlet.com"}, i("en-US", "upgradesupport@quizlet.com", {}, "errors.recurly.purchase_errors.contact_support_link"));
                    return i("en-US", "The payment processing system experienced an error. Your card was not charged. Please contact us at {supportLink}.", {supportLink: r}, "errors.recurly.purchase_errors.contact_support");
                case"recurly.payment_errors.validation":
                case"recurly.payment_errors.invalid-parameter":
                    return i("en-US", "The credit card information you provided is invalid. Please correct the fields highlighted in red and try again.", {}, "errors.recurly.purchase_errors.tokenization_error");
                case"recurly.payment_errors.paypal-canceled":
                    return i("en-US", "You canceled the PayPal transaction.", {}, "errors.recurly.purchase_errors.paypal_canceled");
                case"recurly.payment_errors.amazon_error":
                    return i("en-US", "There was a problem processing your Amazon transaction. Please double check your funding source in Amazon and try again.", {}, "errors.recurly.purchase_errors.amazon_generic");
                case"recurly.payment_errors.coupon.max_redemption":
                    return i("en-US", "YOU’VE ALREADY USED THIS DISCOUNT.", {}, "errors.recurly.purchase_errors.coupon_max_redemption");
                default:
                    return a.a.error("Invalid exception in getLocalizedCheckoutException()", {exceptionKey: e}), i("en-US", "THERE WAS A PROBLEM PROCESSING YOUR TRANSACTION. PLEASE TRY AGAIN AND LET US KNOW IF THE PROBLEM PERSISTS.", {}, "errors.purchase_error.generic_error")
            }
        }
    }, L2el: function (e, t, r) {
        "use strict";
        r("pjDv"), r("J30X"), r("eoL8"), r("PKPk"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return function () {
                return function (t) {
                    return function (r) {
                        if (r.type !== n.CALL_HISTORY_METHOD) return t(r);
                        var a = r.payload, o = a.method, i = a.args;
                        e[o].apply(e, function (e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r
                            }
                            return Array.from(e)
                        }(i))
                    }
                }
            }
        };
        var n = r("HGUJ")
    }, L3Ur: function (e, t, r) {
        "use strict";
        r("eoL8"), r("rB9j"), r("UxlC"), Object.defineProperty(t, "__esModule", {value: !0}), t.routerMiddleware = t.routerActions = t.goForward = t.goBack = t.go = t.replace = t.push = t.CALL_HISTORY_METHOD = t.routerReducer = t.LOCATION_CHANGE = t.syncHistoryWithStore = void 0;
        var n = r("dan0");
        Object.defineProperty(t, "LOCATION_CHANGE", {
            enumerable: !0, get: function () {
                return n.LOCATION_CHANGE
            }
        }), Object.defineProperty(t, "routerReducer", {
            enumerable: !0, get: function () {
                return n.routerReducer
            }
        });
        var a = r("HGUJ");
        Object.defineProperty(t, "CALL_HISTORY_METHOD", {
            enumerable: !0, get: function () {
                return a.CALL_HISTORY_METHOD
            }
        }), Object.defineProperty(t, "push", {
            enumerable: !0, get: function () {
                return a.push
            }
        }), Object.defineProperty(t, "replace", {
            enumerable: !0, get: function () {
                return a.replace
            }
        }), Object.defineProperty(t, "go", {
            enumerable: !0, get: function () {
                return a.go
            }
        }), Object.defineProperty(t, "goBack", {
            enumerable: !0, get: function () {
                return a.goBack
            }
        }), Object.defineProperty(t, "goForward", {
            enumerable: !0, get: function () {
                return a.goForward
            }
        }), Object.defineProperty(t, "routerActions", {
            enumerable: !0, get: function () {
                return a.routerActions
            }
        });
        var o = s(r("8U9d")), i = s(r("L2el"));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.syncHistoryWithStore = o.default, t.routerMiddleware = i.default
    }, LODH: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return P
        }));
        r("ma9I"), r("yXV3"), r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("q1tI"), i = r.n(o), s = r("TSYQ"), c = r.n(s), l = r("zK28"),
            u = r("9WHe"), d = r("moAd"), p = (r("zKZe"), r("bvRJ")), h = r("a08m");
        var m = function (e) {
                a()(r, e);
                var t;
                t = r;

                function r(t) {
                    var r;
                    return (r = e.call(this, t) || this).renderPlayButton = function () {
                        return i.a.createElement(h.a, {onClick: r.props.onPlay}, i.a.createElement("div", {className: "VideoAd-control"}, i.a.createElement(p.a, {
                            className: "VideoAd-icon",
                            icon: "play"
                        })))
                    }, r.renderPauseButton = function () {
                        return i.a.createElement(h.a, {onClick: r.props.onPause}, i.a.createElement("div", {className: "VideoAd-control"}, i.a.createElement(p.a, {
                            className: "VideoAd-icon",
                            icon: "pause"
                        })))
                    }, r.renderMuteButton = function () {
                        return i.a.createElement(h.a, {onClick: r.props.onUnmute}, i.a.createElement("div", {className: "VideoAd-control"}, i.a.createElement(p.a, {
                            className: "VideoAd-icon",
                            icon: "mute"
                        })))
                    }, r.renderCountdown = function (e) {
                        return e ? i.a.createElement("div", {className: "VideoAd-control"}, e) : null
                    }, r.renderSoundButton = function () {
                        return i.a.createElement(h.a, {onClick: r.props.onMute}, i.a.createElement("div", {className: "VideoAd-control"}, i.a.createElement(p.a, {
                            className: "VideoAd-icon",
                            icon: "audio"
                        })))
                    }, r.renderPlaybackButton = function (e) {
                        return e ? r.renderPlayButton() : r.renderPauseButton()
                    }, r.renderVolumeButton = function (e) {
                        return e ? r.renderMuteButton() : r.renderSoundButton()
                    }, r.controlOptions = Object.assign({
                        playbackButton: !0,
                        volumeButton: !0,
                        remainingTime: !1
                    }, t.controlOptions), r
                }

                return r.prototype.render = function () {
                    var e = this.props, t = e.isMuted, r = e.isPaused, n = e.playerSize, a = e.remainingTime,
                        o = n ? n[0] : 0;
                    return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                        className: "VideoAd-playback-controls",
                        style: {maxWidth: o + "px"}
                    }, this.controlOptions.playbackButton ? this.renderPlaybackButton(r) : null, this.controlOptions.volumeButton ? this.renderVolumeButton(t) : null, this.controlOptions.remainingTime ? this.renderCountdown(a) : null))
                }, r
            }(i.a.PureComponent), f = r("C6mj"), _ = r("T3U7"), g = (r("4mDm"), r("5s+n"), r("PKPk"), r("3bBZ"), r("o0o1")),
            v = r.n(g), y = (r("ls82"), r("yXPU")), C = r.n(y), b = r("ojxP"), S = r.n(b);

        function E() {
            return (E = C()(v.a.mark((function e() {
                return v.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Promise.all([new Promise((function (e) {
                                S()("https://imasdk.googleapis.com/js/sdkloader/ima3.js", e)
                            })), new Promise((function (e) {
                                S()("https://content.jwplatform.com/libraries/LgLmI9tV.js", e)
                            }))]);
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var k = r("08um"), O = r("WDAW");
        var P = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r() {
                for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                return (t = e.call.apply(e, [this].concat(n)) || this).state = {
                    adPlayed: !1,
                    adType: "",
                    hasInitProblems: !1,
                    isDisabled: !1,
                    isMuted: !0,
                    isPaused: !1,
                    isPausedByUser: !1,
                    isPlayerVisible: !1,
                    monthlyPrice: l.a.goUpsellMonthlyPrice,
                    repeats: 0,
                    remainingTime: 0,
                    shouldShowAdHeading: !1,
                    startedPaused: t.props.startPaused
                }, t.handlePlayerViewable = function (e) {
                    var r = e.viewable, n = t.state, a = n.adPlayed, o = n.isPausedByUser, i = 1 === r;
                    a && (i && !o ? t.play() : i || t.pause(), t.setState({isPlayerVisible: i}, (function () {
                        t.props.onPlayerVisibilityChange(i)
                    })))
                }, t.handlePlayerMute = function (e) {
                    var r = e.mute;
                    t.setState({isMuted: r})
                }, t.handleAdClick = function () {
                    var e = t.props, r = e.id, n = e.onAdClick;
                    Object(_.a)("video_ad_clicked", {id: r}), n && n(r)
                }, t.handleAdEnded = function () {
                    var e = t.props, r = e.maxRepeats, n = e.onVideoAdFinished, a = t.state.repeats;
                    t.setState({adPlayed: !1, repeats: a + 1}, (function () {
                        void 0 !== r && t.state.repeats >= r && (t.hideComponent(), n())
                    }))
                }, t.handleError = function (e) {
                    var r = t.props.onError;
                    clearTimeout(t.videoPlayerErrorTimer), -1 === [2e4, 21012, 21021, 21009, 21010, 20900, 20403, 20301, 20303, 20400, 20901, -1, -2].indexOf(e.adErrorCode) && (e.adUnit = t.props.id, u.a.warning("Ads: VideoAd error: " + e.message, e)), t.hideComponent(), r(e)
                }, t.handleAdPause = function (e) {
                    var r = 1 === e.viewable;
                    t.setState({isPaused: !0, isPausedByUser: r}, (function () {
                        t.props.onAdPause && t.props.onAdPause()
                    }))
                }, t.handleAdSuccess = function () {
                    var e = t.props.onAdsSuccess;
                    e && e()
                }, t.handleAdPlay = function (e) {
                    var r = e.viewable, n = t.state.startedPaused;
                    clearTimeout(t.videoPlayerErrorTimer);
                    var a = (n || 1 !== r) && t.videoPlayerInstance;
                    a && t.videoPlayerInstance.pause(), t.handleAdSuccess(), t.setState({
                        adPlayed: !0,
                        isPaused: a,
                        isPausedByUser: !1,
                        startedPaused: !1
                    }, (function () {
                        t.props.onAdPlay && t.props.onAdPlay()
                    }))
                }, t.handleAdStarted = function () {
                    t.props.onAdStarted(!0)
                }, t.handleAdTime = function (e) {
                    var r = e.duration, n = e.position, a = t.props.onAdTime;
                    a && t.setState((function (e) {
                        var t = r - n;
                        return t === e.remainingTime ? null : (a(r, n), {remainingTime: t})
                    }))
                }, t.remountPlayer = function (e) {
                    t.state.hasInitProblems || (t.removePlayerInstance(), t.setState({
                        isDisabled: !1,
                        startedPaused: t.props.startPaused
                    }, (function () {
                        Object(f.b)() || Object(O.a)().then((function (r) {
                            var n = r.isOutstream(e);
                            t.videoPlayerInstance = r.displayVideoAd(e), t.initPlayerListeners(n)
                        }))
                    })))
                }, t.removePlayerInstance = function () {
                    t.videoPlayerInstance && (t.videoPlayerInstance.remove(), t.videoPlayerInstance = null)
                }, t.hideComponent = function () {
                    t.removePlayerInstance(), t.setState({adPlayed: !1, isDisabled: !0})
                }, t.play = function () {
                    t.videoPlayerInstance && t.videoPlayerInstance.play && t.videoPlayerInstance.play()
                }, t.pause = function () {
                    t.videoPlayerInstance && t.videoPlayerInstance.pause && t.videoPlayerInstance.pause()
                }, t.mute = function () {
                    t.videoPlayerInstance && t.videoPlayerInstance.setMute && t.videoPlayerInstance.setMute(!0)
                }, t.unmute = function () {
                    t.videoPlayerInstance && t.videoPlayerInstance.setMute && t.videoPlayerInstance.setMute(!1)
                }, t
            }

            var n = r.prototype;
            return n.componentDidMount = function () {
                var e = this, t = this.props.id;
                Object(f.b)() ? (this.handleError({
                    type: "adBlockerEnabled",
                    message: "Ad blocker is enabled. Video player instance will not be created.",
                    adErrorCode: 2e4
                }), this.setState({hasInitProblems: !0})) : Object(O.a)().then((function (r) {
                    var n = r.isRegistered(t), a = !!r.getShowAdHeading(t), o = r.getAdType(t) || "",
                        i = r.isOutstream(t);
                    e.videoPlayerSize = r.getVideoSize(t);
                    n ? function () {
                        return E.apply(this, arguments)
                    }().then((function () {
                        e.setState({
                            adType: o,
                            hasInitProblems: !1,
                            isDisabled: !n,
                            shouldShowAdHeading: a
                        }, (function () {
                            e.videoPlayerInstance = r.displayVideoAd(t), e.initPlayerListeners(i)
                        }))
                    }), (function () {
                        e.setState({hasInitProblems: !0}, (function () {
                            e.handleError({
                                type: "playerLoading",
                                message: "There was a failure when loading the JWPlayer lib"
                            })
                        }))
                    })) : e.setState({
                        adType: o,
                        hasInitProblems: !0,
                        isDisabled: !n,
                        shouldShowAdHeading: a
                    }, (function () {
                        e.handleError({type: "adNotRegistered", message: "The provided Ad id has not been registered!"})
                    }))
                }))
            }, n.componentDidUpdate = function (e) {
                this.props.shouldPlayVideo && this.props.shouldPlayVideo !== e.shouldPlayVideo && (this.play(), this.props.startMuted || this.unmute())
            }, n.componentWillUnmount = function () {
                clearTimeout(this.videoPlayerErrorTimer), this.removePlayerInstance()
            }, n.renderAdHeading = function () {
                var e = this.props.id, t = this.state.monthlyPrice;
                return i.a.createElement(d.a, {
                    containerId: Object(k.c)(Object(k.i)(e)),
                    headingAlignment: this.props.headingAlignment,
                    monthlyPrice: t
                })
            }, n.render = function () {
                var e = this.props, t = e.id, r = e.controlOptions, n = this.state, a = n.adType, o = n.isDisabled,
                    s = n.remainingTime, l = c()("VideoAd", "VideoAd--" + t, "VideoAd--" + a, {"VideoAd--disabled": o});
                return i.a.createElement("div", {className: l}, this.shouldShowAdHeading() ? this.renderAdHeading() : null, i.a.createElement("div", {className: "VideoAd-playerWrapper"}, i.a.createElement("div", {id: Object(k.i)(t)}), this.props.showControls ? i.a.createElement(m, {
                    controlOptions: r,
                    isMuted: this.state.isMuted,
                    isPaused: this.state.isPaused,
                    isPlayerVisible: this.state.isPlayerVisible,
                    onMute: this.mute,
                    onPause: this.pause,
                    onPlay: this.play,
                    onUnmute: this.unmute,
                    playerSize: this.videoPlayerSize,
                    remainingTime: s
                }) : null))
            }, n.initPlayerListeners = function (e) {
                var t = this;
                this.videoPlayerInstance ? ((!e || e && this.props.startPaused) && this.videoPlayerInstance.on("ready", (function () {
                    t.videoPlayerInstance.play()
                })), this.videoPlayerInstance.on("adError", this.handleError), this.videoPlayerInstance.on("error", this.handleError), this.videoPlayerInstance.on("setupError", this.handleError), this.videoPlayerInstance.on("adClick", this.handleAdClick), this.videoPlayerInstance.on("adComplete", this.handleAdEnded), this.videoPlayerInstance.on("adPause", this.handleAdPause), this.videoPlayerInstance.on("adPlay", this.handleAdPlay), this.videoPlayerInstance.on("adSkipped", this.handleAdEnded), this.videoPlayerInstance.on("adStarted", this.handleAdStarted), this.props.onAdTime && this.videoPlayerInstance.on("adTime", this.handleAdTime), this.videoPlayerInstance.on("mute", this.handlePlayerMute), this.videoPlayerInstance.on("viewable", this.handlePlayerViewable), clearTimeout(this.videoPlayerErrorTimer), this.videoPlayerErrorTimer = window.setTimeout((function () {
                    t.handleError({
                        type: "videoPlayerInstanceTimeout",
                        message: "Video player took longer than 10s to run.",
                        adErrorCode: -1
                    })
                }), 1e4)) : this.handleError({
                    type: "videoPlayerInstanceNull",
                    message: "Failed to get a valid video player instance to show",
                    adErrorCode: -2
                })
            }, n.shouldShowAdHeading = function () {
                return !Object(f.b)() && this.state.shouldShowAdHeading
            }, r
        }(i.a.Component);
        P.defaultProps = {
            isWatchWall: !1, onAdStarted: function () {
            }, onError: function () {
            }, onPlayerVisibilityChange: function () {
            }, onVideoAdFinished: function () {
            }, shouldPlayVideo: !1, showControls: !0, startMuted: !0, startPaused: !1
        }
    }, M3Qh: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return a
        }));
        var n = r("zK28");

        function a() {
            return n.a.user ? n.a.derivedLocale : null
        }
    }, O97I: function (e, t, r) {
        "use strict";
        r("07d7"), r("5s+n");
        var n = r("mr8R");
        t.a = Object(n.a)((function () {
            return Promise.all([r.e(3), r.e(0), r.e(78)]).then(r.bind(null, "UQ0i"))
        }))
    }, PTpY: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return s
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("q1tI"), i = r.n(o);
        var s = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                return i.a.createElement("div", {className: "UpsellModalMessage"}, this.props.children)
            }, r
        }(o.Component)
    }, Q051: function (e, t, r) {
        "use strict";
        r.d(t, "b", (function () {
            return a
        })), r.d(t, "a", (function () {
            return o
        }));
        var n = r("fdo3");

        function a(e) {
            Object(n.c)(e.href)
        }

        function o(e) {
            e.preventDefault(), a(e.currentTarget)
        }
    }, RF01: function (e, t, r) {
        "use strict";
        t.__esModule = !0;
        var n = o(r("gDiQ")), a = o(r("ar35"));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.default = (0, a.default)(n.default), e.exports = t.default
    }, SCbk: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return d
        }));
        var n = r("pVnL"), a = r.n(n), o = r("8OQS"), i = r.n(o), s = r("q1tI"), c = r.n(s), l = r("Q051"),
            u = r("SKs2");

        function d(e) {
            var t = e.href, r = e.funnelUUID, n = i()(e, ["href", "funnelUUID"]), o = Object(u.b)(t, r);
            return c.a.createElement("a", a()({href: o}, n, {onClick: l.a}))
        }
    }, TEdO: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return c
        })), r.d(t, "e", (function () {
            return u
        })), r.d(t, "d", (function () {
            return d
        })), r.d(t, "f", (function () {
            return p
        })), r.d(t, "i", (function () {
            return h
        })), r.d(t, "h", (function () {
            return f
        })), r.d(t, "g", (function () {
            return _
        })), r.d(t, "b", (function () {
            return g
        })), r.d(t, "c", (function () {
            return v
        }));
        r("pNMO"), r("4Brf"), r("sMBO"), r("qePV"), r("rB9j"), r("EnZy");
        var n = r("zK28"), a = r("QR21"), o = r("3XR0"), i = r("xNal");
        r("Rfxz");
        var s = r("og3H"), c = .5, l = 30 * i.b;

        function u(e) {
            return function (e) {
                return void 0 !== e._webUrl && void 0 !== e.accessType && void 0 !== e.creationSource && void 0 !== e.creatorId && void 0 !== e.description && void 0 !== e.hasDiagrams && void 0 !== e.hasImages && void 0 !== e.title
            }(e) ? s.B.SET : function (e) {
                return void 0 !== e.creatorId && void 0 !== e.description && void 0 !== e.examName && void 0 !== e.name && void 0 !== e.numStudyGuides && void 0 !== e.webUrl
            }(e) ? s.B.PURCHASABLE_BUNDLE : function (e) {
                return void 0 !== e._webUrl && void 0 !== e.isHidden && void 0 !== e.name
            }(e) ? s.B.FOLDER : null
        }

        function d(e) {
            switch (u(e)) {
                case s.B.SET:
                case s.B.PURCHASABLE_BUNDLE:
                    return e.price;
                case s.B.FOLDER:
                    return e._price;
                default:
                    return null
            }
        }

        function p(e) {
            return !!d(e)
        }

        function h(e, t, r, n) {
            return !!r && (!n || !function (e, t, r) {
                return r.some((function (r) {
                    return r.modelId === e && r.modelType === t
                }))
            }(e, t, n))
        }

        function m() {
            var e = i.c.read(s.l.MARKETPLACE__SESSION_LOGGING);
            return e ? JSON.parse(e) : null
        }

        function f(e) {
            i.c.write(s.l.MARKETPLACE__SESSION_LOGGING, JSON.stringify({channel: e}), {duration: l})
        }

        function _(e) {
            var t, r = m();
            f(null !== (t = null == r ? void 0 : r.channel) && void 0 !== t ? t : e)
        }

        function g(e, t) {
            void 0 === t && (t = !0);
            var r = e.action, i = e.channel, s = e.modelType, c = e.modelId;
            i && _(i);
            var l = m(), u = l ? l.channel : i;
            Object(a.a)("marketplace_events", {
                action: r,
                agent: window.navigator.userAgent,
                app_session_id: Object(o.b)(),
                channel: u,
                client_id: n.a.uid,
                model_type: s,
                page: window.location.href,
                referrer: window.document.referrer,
                server_model_id: c
            }, {includeUserDetails: t})
        }

        var v = function (e, t) {
            return function (r) {
                var n = function (e) {
                    var t = e.target.id.split("-"), r = t[0], n = t[1];
                    return [Number(r), Number(n)]
                }(r), a = n[0], o = n[1];
                a && o && g({action: e, channel: t, modelType: a, modelId: o})
            }
        }
    }, VPSI: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return a
        }));
        r("rB9j"), r("UxlC");
        var n = r("KD7m");

        function a(e) {
            var t = e.queryParams, r = e.searchAction, a = void 0 === r ? "/subject/" : r, o = e.searchInput,
                i = Object(n.a)(o.replace(/\s+/g, " "));
            if (!i) return !1;
            var s = encodeURIComponent(i).replace(/\-/g, "%252D").replace(/%20/g, "-").replace(/%2F/g, "%252F"),
                c = "/" + a.replace(/^\//m, "") + s + "/";
            void 0 !== t && (c = c + "?" + t), window.location.href = c
        }
    }, XUBu: function (e, t, r) {
        "use strict";
        r.d(t, "e", (function () {
            return p
        })), r.d(t, "d", (function () {
            return h
        })), r.d(t, "f", (function () {
            return m
        })), r.d(t, "b", (function () {
            return f
        })), r.d(t, "a", (function () {
            return g
        })), r.d(t, "h", (function () {
            return v
        })), r.d(t, "i", (function () {
            return y
        })), r.d(t, "j", (function () {
            return C
        })), r.d(t, "l", (function () {
            return b
        })), r.d(t, "k", (function () {
            return S
        })), r.d(t, "m", (function () {
            return E
        })), r.d(t, "g", (function () {
            return k
        })), r.d(t, "c", (function () {
            return O
        }));
        r("TeQF"), r("2B1R"), r("zKZe");
        var n, a = r("YDJX"), o = r("peh1"), i = r("JPcv"), s = r("xhj2"), c = r("Ri2w"), l = r("mEm4"),
            u = Object(l.a)("SITE_NAV", {
                CLEAR_CLASS_NOTIFICATION: null,
                CLOSE_MOBILE_NAV: null,
                DECLINE_INVITE: null,
                OPEN_CREATE_CLASS_MODAL_FOR_TEACHER_ONBOARDING_TEST: null,
                OPEN_MOBILE_NAV: null,
                TOGGLE_CLASS_PROGRESS_UPSELL_MODAL: null,
                TOGGLE_CREATE_CLASS_MODAL: null,
                TOGGLE_CREATE_FOLDER_MODAL: null,
                TOGGLE_CREATE_IMAGE_SET_UPSELL_MODAL: null,
                TOGGLE_CREATE_SET_MODAL: null,
                TOGGLE_MAX_CLASSES_UPSELL_MODAL: null
            }), d = ((n = {})[u.CLEAR_CLASS_NOTIFICATION] = function (e, t) {
                var r = t.payload;
                return e.update("classMemberships", (function (e) {
                    return e.map((function (e) {
                        return e.get("id") === r.id ? e.set("numNotifications", 0) : e
                    }))
                }))
            }, n[u.CLOSE_MOBILE_NAV] = function (e) {
                return e.set("isMobileNavOpen", !1)
            }, n[u.DECLINE_INVITE] = function (e, t) {
                var r = t.payload, n = e.update("classInvitations", (function (e) {
                    return e.map((function (e) {
                        return e && e.get("id") === r.id ? e.set("_dismissed", !0) : e
                    }))
                })), a = n.get("classInvitations").filter((function (e) {
                    return !e.get("_dismissed")
                })).first(), o = a ? a.get("id") : null;
                return n.set("activeInviteId", o)
            }, n[u.TOGGLE_CLASS_PROGRESS_UPSELL_MODAL] = function (e) {
                return e.update("isClassProgressUpsellModalOpen", (function (e) {
                    return !e
                }))
            }, n[u.TOGGLE_CREATE_CLASS_MODAL] = function (e) {
                return e.update("isCreateClassModalOpen", (function (e) {
                    return !e
                })).update("isTriggeredFromTeacherTips", (function () {
                    return !1
                }))
            }, n[u.TOGGLE_CREATE_FOLDER_MODAL] = function (e) {
                return e.update("isCreateFolderModalOpen", (function (e) {
                    return !e
                }))
            }, n[u.TOGGLE_CREATE_IMAGE_SET_UPSELL_MODAL] = function (e) {
                return e.update("isCreateImageSetUpsellModalOpen", (function (e) {
                    return !e
                }))
            }, n[u.TOGGLE_CREATE_SET_MODAL] = function (e) {
                return e.update("isCreateSetModalOpen", (function (e) {
                    return !e
                }))
            }, n[u.TOGGLE_MAX_CLASSES_UPSELL_MODAL] = function (e) {
                return e.update("isUpsellModalMaxClassesOpen", (function (e) {
                    return !e
                }))
            }, n[u.OPEN_CREATE_CLASS_MODAL_FOR_TEACHER_ONBOARDING_TEST] = function (e) {
                return e.update("isCreateClassModalOpen", (function () {
                    return !0
                })).update("isTriggeredFromTeacherTips", (function () {
                    return !0
                }))
            }, n[u.OPEN_MOBILE_NAV] = function (e) {
                return e.set("isMobileNavOpen", !0)
            }, n), p = function (e, t, r) {
                return r.get("siteNav")
            }, h = Object(o.createSelector)(p, (function (e) {
                return e.get("canCreateClass")
            })), m = Object(a.createAction)(u.OPEN_MOBILE_NAV), f = Object(a.createAction)(u.CLOSE_MOBILE_NAV),
            _ = Object(a.createAction)(u.DECLINE_INVITE), g = Object(a.createAction)(u.CLEAR_CLASS_NOTIFICATION),
            v = Object(a.createAction)(u.TOGGLE_CLASS_PROGRESS_UPSELL_MODAL),
            y = Object(a.createAction)(u.TOGGLE_CREATE_CLASS_MODAL),
            C = (Object(a.createAction)(u.OPEN_CREATE_CLASS_MODAL_FOR_TEACHER_ONBOARDING_TEST), Object(a.createAction)(u.TOGGLE_CREATE_FOLDER_MODAL)),
            b = Object(a.createAction)(u.TOGGLE_CREATE_SET_MODAL),
            S = Object(a.createAction)(u.TOGGLE_CREATE_IMAGE_SET_UPSELL_MODAL),
            E = Object(a.createAction)(u.TOGGLE_MAX_CLASSES_UPSELL_MODAL), k = function (e) {
                var t = e.id, r = e.path;
                return function (e) {
                    e(_({id: t})), Object(c.f)(r)
                }
            };

        function O(e) {
            var t, r = Object(a.handleActions)(d, (t = e, Object(i.fromJS)(Object.assign({}, t, {
                activeInviteId: t.classInvitations.length > 0 ? t.classInvitations[0].id : null,
                isCreateClassModalOpen: !1,
                isCreateFolderModalOpen: !1,
                isCreateSetModalOpen: !1,
                isMobileNavOpen: !1,
                isUpsellModalMaxClassesOpen: !1,
                isUpsellModalOpen: !1
            }))));
            s.a.register({siteNav: r})
        }
    }, "XUS/": function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return u
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("TSYQ"), i = r.n(o), s = r("q1tI"), c = r.n(s), l = r("bvRJ");
        var u = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                var e = i()("UpsellModalFeature", {"UpsellModalFeature--fill": "fill" === this.props.width});
                return c.a.createElement("div", {className: e}, c.a.createElement(l.a, {
                    className: "UpsellModalFeature-icon",
                    icon: this.props.icon
                }), c.a.createElement("div", {className: "UpsellModalFeature-text"}, this.props.headline && c.a.createElement("span", {className: "UpsellModalFeature-headline"}, this.props.headline), this.props.children && c.a.createElement("span", {className: "UpsellModalFeature-description"}, this.props.children)))
            }, r
        }(s.Component)
    }, Y0sT: function (e, t, r) {
        "use strict";
        r("ma9I"), r("TeQF"), r("QWBl"), r("yXV3"), r("+2oP"), r("DQNa"), r("07d7"), r("JfAA"), r("FZtP"), t.__esModule = !0;
        var n, a = r("mOtT"), o = r("ZR02"), i = r("Yqds"), s = (n = i) && n.__esModule ? n : {default: n},
            c = r("/yDZ"), l = r("mHnE");
        t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.getCurrentLocation,
                r = e.getUserConfirmation, n = e.pushLocation, i = e.replaceLocation, u = e.go, d = e.keyLength,
                p = void 0, h = void 0, m = [], f = [], _ = [], g = function () {
                    return h && h.action === c.POP ? _.indexOf(h.key) : p ? _.indexOf(p.key) : -1
                }, v = function (e) {
                    var t = g();
                    (p = e).action === c.PUSH ? _ = [].concat(_.slice(0, t + 1), [p.key]) : p.action === c.REPLACE && (_[t] = p.key), f.forEach((function (e) {
                        return e(p)
                    }))
                }, y = function (e) {
                    return m.push(e), function () {
                        return m = m.filter((function (t) {
                            return t !== e
                        }))
                    }
                }, C = function (e) {
                    return f.push(e), function () {
                        return f = f.filter((function (t) {
                            return t !== e
                        }))
                    }
                }, b = function (e, t) {
                    (0, a.loopAsync)(m.length, (function (t, r, n) {
                        (0, s.default)(m[t], e, (function (e) {
                            return null != e ? n(e) : r()
                        }))
                    }), (function (e) {
                        r && "string" == typeof e ? r(e, (function (e) {
                            return t(!1 !== e)
                        })) : t(!1 !== e)
                    }))
                }, S = function (e) {
                    p && (0, l.locationsAreEqual)(p, e) || h && (0, l.locationsAreEqual)(h, e) || (h = e, b(e, (function (t) {
                        if (h === e) if (h = null, t) {
                            if (e.action === c.PUSH) {
                                var r = (0, o.createPath)(p);
                                (0, o.createPath)(e) === r && (0, l.statesAreEqual)(p.state, e.state) && (e.action = c.REPLACE)
                            }
                            e.action === c.POP ? v(e) : e.action === c.PUSH ? !1 !== n(e) && v(e) : e.action === c.REPLACE && !1 !== i(e) && v(e)
                        } else if (p && e.action === c.POP) {
                            var a = _.indexOf(p.key), s = _.indexOf(e.key);
                            -1 !== a && -1 !== s && u(a - s)
                        }
                    })))
                }, E = function (e) {
                    return S(T(e, c.PUSH))
                }, k = function (e) {
                    return S(T(e, c.REPLACE))
                }, O = function () {
                    return u(-1)
                }, P = function () {
                    return u(1)
                }, w = function () {
                    return Math.random().toString(36).substr(2, d || 6)
                }, A = function (e) {
                    return (0, o.createPath)(e)
                }, T = function (e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w();
                    return (0, l.createLocation)(e, t, r)
                };
            return {
                getCurrentLocation: t,
                listenBefore: y,
                listen: C,
                transitionTo: S,
                push: E,
                replace: k,
                go: u,
                goBack: O,
                goForward: P,
                createKey: w,
                createPath: o.createPath,
                createHref: A,
                createLocation: T
            }
        }
    }, "YU+Q": function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return i
        }));
        r("zKZe");
        var n = r("9h4+"), a = r("bzNP"), o = r("bBvF").default;

        function i(e, t) {
            void 0 === t && (t = {}), QWait("qrecurly", (function () {
                window.recurly.configure({
                    fields: {
                        all: {
                            style: Object.assign({
                                fontColor: n.b,
                                fontSize: a.c.fontSize + "px",
                                fontSmoothing: "antialiased",
                                fontWeight: a.c.fontWeight,
                                lineHeight: a.c.lineHeight + "px",
                                placeholder: {color: n.c}
                            }, t)
                        },
                        card: {
                            displayIcon: !1,
                            style: {
                                fontSize: a.d.fontSize + "px",
                                placeholder: {
                                    content: {
                                        number: "···· ···· ···· ····",
                                        cvv: o("en-US", "CVC", {}, "checkout.credit_card_form.cvc_placeholder"),
                                        expiry: o("en-US", "MM / YY", {}, "checkout.credit_card_form.mm_yy_placeholder")
                                    }
                                }
                            }
                        },
                        number: {style: {fontFamily: "Roboto", placeholder: {content: "···· ···· ···· ····"}}},
                        month: {
                            style: {
                                fontFamily: "Roboto",
                                placeholder: {content: o("en-US", "MM", {}, "checkout.credit_card_form.mm_placeholder")}
                            }
                        },
                        year: {
                            style: {
                                fontFamily: "Roboto",
                                placeholder: {content: o("en-US", "YY", {}, "checkout.credit_card_form.yy_placeholder")}
                            }
                        },
                        cvv: {
                            style: {
                                fontFamily: "Roboto",
                                placeholder: {content: o("en-US", "CVC", {}, "checkout.credit_card_form.cvc_placeholder")}
                            }
                        }
                    }, publicKey: e
                })
            }))
        }
    }, YleJ: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return a
        }));
        var n = r("T3U7");

        function a(e) {
            Object(n.a)("create_set_navigation_" + e + "_click")
        }
    }, Yqds: function (e, t, r) {
        "use strict";
        t.__esModule = !0;
        var n, a = r("2W6z");
        (n = a) && n.__esModule;
        t.default = function (e, t, r) {
            var n = e(t, r);
            e.length < 2 && r(n)
        }
    }, ZFOp: function (e, t, r) {
        "use strict";
        r("DQNa"), r("07d7"), r("rB9j"), r("JfAA"), r("UxlC"), e.exports = function (e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, (function (e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }
    }, ZKm7: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return d
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("q1tI"), i = r.n(o), s = r("pyqB"), c = r("5eZy"), l = r("TSYQ"),
            u = r.n(l);
        var d = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                var e = u()("PreviewCardByline", {"is-truncated": this.props.canTruncate});
                return i.a.createElement("div", {className: e}, i.a.createElement(s.a, {separator: i.a.createElement(c.a, null)}, this.props.children))
            }, r
        }(i.a.PureComponent);
        d.defaultProps = {canTruncate: !1}
    }, ZR02: function (e, t, r) {
        "use strict";
        r("yXV3"), r("TWNs"), r("rB9j"), r("JfAA"), r("Rm1S"), r("UxlC"), r("hByQ"), t.__esModule = !0, t.createPath = t.parsePath = t.getQueryStringValueFromPath = t.stripQueryStringValueFromPath = t.addQueryStringValueToPath = void 0;
        var n, a = r("2W6z");
        (n = a) && n.__esModule;
        t.addQueryStringValueToPath = function (e, t, r) {
            var n = o(e), a = n.pathname, s = n.search, c = n.hash;
            return i({pathname: a, search: s + (-1 === s.indexOf("?") ? "?" : "&") + t + "=" + r, hash: c})
        }, t.stripQueryStringValueFromPath = function (e, t) {
            var r = o(e), n = r.pathname, a = r.search, s = r.hash;
            return i({
                pathname: n,
                search: a.replace(new RegExp("([?&])" + t + "=[a-zA-Z0-9]+(&?)"), (function (e, t, r) {
                    return "?" === t ? t : r
                })),
                hash: s
            })
        }, t.getQueryStringValueFromPath = function (e, t) {
            var r = o(e).search.match(new RegExp("[?&]" + t + "=([a-zA-Z0-9]+)"));
            return r && r[1]
        };
        var o = t.parsePath = function (e) {
            var t, r, n = null == (r = (t = e).match(/^(https?:)?\/\/[^\/]*/)) ? t : t.substring(r[0].length), a = "",
                o = "", i = n.indexOf("#");
            -1 !== i && (o = n.substring(i), n = n.substring(0, i));
            var s = n.indexOf("?");
            return -1 !== s && (a = n.substring(s), n = n.substring(0, s)), "" === n && (n = "/"), {
                pathname: n,
                search: a,
                hash: o
            }
        }, i = t.createPath = function (e) {
            if (null == e || "string" == typeof e) return e;
            var t = e.basename, r = e.pathname, n = e.search, a = e.hash, o = (t || "") + r;
            return n && "?" !== n && (o += n), a && (o += a), o
        }
    }, ar35: function (e, t, r) {
        "use strict";
        t.__esModule = !0, t.default = function (e) {
            var t = void 0;
            i && (t = (0, o.default)(e)());
            return t
        };
        var n, a = r("n/dV"), o = (n = a) && n.__esModule ? n : {default: n};
        var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
        e.exports = t.default
    }, bzNP: function (e, t, r) {
        "use strict";
        r.d(t, "b", (function () {
            return n
        })), r.d(t, "a", (function () {
            return a
        })), r.d(t, "d", (function () {
            return o
        })), r.d(t, "c", (function () {
            return i
        }));
        var n = {fontSize: 12, fontWeight: 400, lineHeight: 16}, a = {fontSize: 14, fontWeight: 400, lineHeight: 18},
            o = {fontSize: 16, fontWeight: 400, lineHeight: 19}, i = {fontSize: 18, fontWeight: 400, lineHeight: 22}
    }, cKUA: function (e, t, r) {
        "use strict";
        r("rB9j"), r("hByQ"), t.__esModule = !0, t.go = t.replaceLocation = t.pushLocation = t.startListener = t.getUserConfirmation = t.getCurrentLocation = void 0;
        var n = r("mHnE"), a = r("Ad4u"), o = r("rTRU"), i = r("ZR02"), s = r("HaSr"),
            c = s.canUseDOM && !(0, a.supportsPopstateOnHashchange)(), l = function (e) {
                var t = e && e.key;
                return (0, n.createLocation)({
                    pathname: window.location.pathname,
                    search: window.location.search,
                    hash: window.location.hash,
                    state: t ? (0, o.readState)(t) : void 0
                }, void 0, t)
            }, u = t.getCurrentLocation = function () {
                var e = void 0;
                try {
                    e = window.history.state || {}
                } catch (t) {
                    e = {}
                }
                return l(e)
            }, d = (t.getUserConfirmation = function (e, t) {
                return t(window.confirm(e))
            }, t.startListener = function (e) {
                var t = function (t) {
                    (0, a.isExtraneousPopstateEvent)(t) || e(l(t.state))
                };
                (0, a.addEventListener)(window, "popstate", t);
                var r = function () {
                    return e(u())
                };
                return c && (0, a.addEventListener)(window, "hashchange", r), function () {
                    (0, a.removeEventListener)(window, "popstate", t), c && (0, a.removeEventListener)(window, "hashchange", r)
                }
            }, function (e, t) {
                var r = e.state, n = e.key;
                void 0 !== r && (0, o.saveState)(n, r), t({key: n}, (0, i.createPath)(e))
            });
        t.pushLocation = function (e) {
            return d(e, (function (e, t) {
                return window.history.pushState(e, null, t)
            }))
        }, t.replaceLocation = function (e) {
            return d(e, (function (e, t) {
                return window.history.replaceState(e, null, t)
            }))
        }, t.go = function (e) {
            e && window.history.go(e)
        }
    }, "cr+I": function (e, t, r) {
        "use strict";
        r("ma9I"), r("TeQF"), r("QWBl"), r("J30X"), r("oVuX"), r("2B1R"), r("E9XD"), r("+2oP"), r("ToJy"), r("qePV"), r("uL8W"), r("tkto"), r("rB9j"), r("UxlC"), r("EnZy"), r("SYor"), r("FZtP");
        var n = r("ZFOp"), a = r("MgzW");

        function o(e, t) {
            return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
        }

        t.extract = function (e) {
            return e.split("?")[1] || ""
        }, t.parse = function (e, t) {
            var r = function (e) {
                var t;
                switch (e.arrayFormat) {
                    case"index":
                        return function (e, r, n) {
                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                        };
                    case"bracket":
                        return function (e, r, n) {
                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                        };
                    default:
                        return function (e, t, r) {
                            void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                        }
                }
            }(t = a({arrayFormat: "none"}, t)), n = Object.create(null);
            return "string" != typeof e ? n : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach((function (e) {
                var t = e.replace(/\+/g, " ").split("="), a = t.shift(), o = t.length > 0 ? t.join("=") : void 0;
                o = void 0 === o ? null : decodeURIComponent(o), r(decodeURIComponent(a), o, n)
            })), Object.keys(n).sort().reduce((function (e, t) {
                var r = n[t];
                return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                    return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((function (e, t) {
                        return Number(e) - Number(t)
                    })).map((function (e) {
                        return t[e]
                    })) : t
                }(r) : e[t] = r, e
            }), Object.create(null))) : n
        }, t.stringify = function (e, t) {
            var r = function (e) {
                switch (e.arrayFormat) {
                    case"index":
                        return function (t, r, n) {
                            return null === r ? [o(t, e), "[", n, "]"].join("") : [o(t, e), "[", o(n, e), "]=", o(r, e)].join("")
                        };
                    case"bracket":
                        return function (t, r) {
                            return null === r ? o(t, e) : [o(t, e), "[]=", o(r, e)].join("")
                        };
                    default:
                        return function (t, r) {
                            return null === r ? o(t, e) : [o(t, e), "=", o(r, e)].join("")
                        }
                }
            }(t = a({encode: !0, strict: !0, arrayFormat: "none"}, t));
            return e ? Object.keys(e).sort().map((function (n) {
                var a = e[n];
                if (void 0 === a) return "";
                if (null === a) return o(n, t);
                if (Array.isArray(a)) {
                    var i = [];
                    return a.slice().forEach((function (e) {
                        void 0 !== e && i.push(r(n, e, i.length))
                    })), i.join("&")
                }
                return o(n, t) + "=" + o(a, t)
            })).filter((function (e) {
                return e.length > 0
            })).join("&") : ""
        }
    }, ctRD: function (e, t, r) {
        "use strict";
        r.d(t, "d", (function () {
            return g
        })), r.d(t, "e", (function () {
            return y
        })), r.d(t, "f", (function () {
            return b
        })), r.d(t, "a", (function () {
            return E
        })), r.d(t, "b", (function () {
            return P
        })), r.d(t, "c", (function () {
            return A
        }));
        r("yq1k"), r("DQNa"), r("07d7"), r("JfAA"), r("JTJg");
        var n, a, o = r("o0o1"), i = r.n(o), s = (r("ls82"), r("yXPU")), c = r.n(s), l = r("zK28"),
            u = (r("5s+n"), r("44Ds")), d = r.n(u), p = r("4K/9"), h = d()((function () {
                return Object(p.a)(5, (function () {
                    return Promise.all([r.e(0), r.e(25)]).then(r.t.bind(null, "rfzL", 7))
                }))
            })), m = r("og3H"), f = r("T3U7");

        function _() {
            return !(!l.a || !l.a.user) && !(!l.a.user.id || l.a.user._isUnderAge)
        }

        function g() {
            return v.apply(this, arguments)
        }

        function v() {
            return (v = c()(i.a.mark((function e() {
                var t, r, n;
                return i.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (_()) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4, h();
                        case 4:
                            if (t = e.sent, e.prev = 5, t.resumeWebTracking(), t.initialize(window.getBrazeSdkKey, {
                                baseUrl: "https://sdk.iad-03.braze.com/api/v3",
                                disablePushTokenMaintenance: !0,
                                doNotLoadFontAwesome: !0
                            }), n = null === (r = l.a.user) || void 0 === r ? void 0 : r.id) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("return");
                        case 11:
                            t.changeUser(n.toString()), t.openSession(), e.next = 21;
                            break;
                        case 15:
                            if (e.prev = 15, e.t0 = e.catch(5), e.t0.message.includes("Notification is not defined") || e.t0.message.includes("Unexpected end of JSON input")) {
                                e.next = 19;
                                break
                            }
                            throw new Error(e.t0);
                        case 19:
                            Object(f.a)("error_appboy_tracking", e.t0), t.stopWebTracking();
                        case 21:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[5, 15]])
            })))).apply(this, arguments)
        }

        function y() {
            return C.apply(this, arguments)
        }

        function C() {
            return (C = c()(i.a.mark((function e() {
                return i.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h();
                        case 2:
                            e.sent.stopWebTracking();
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function b() {
            return S.apply(this, arguments)
        }

        function S() {
            return (S = c()(i.a.mark((function e() {
                var t;
                return i.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h();
                        case 2:
                            t = e.sent, _() && t.logCustomEvent("logged_in_homepage_view");
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function E(e, t) {
            return k.apply(this, arguments)
        }

        function k() {
            return (k = c()(i.a.mark((function e(t, r) {
                var n;
                return i.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h();
                        case 2:
                            n = e.sent, _() && n.logCustomEvent(t, r);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var O = ((n = {})[m.Ab.SET] = "set", n[m.Ab.FOLDER] = "folder", n[m.Ab.PURCHASABLE_BUNDLE] = "purchasable_bundle", n);

        function P(e) {
            return O[e]
        }

        var w = ((a = {})[m.xb.FLASHCARDS] = "flashcards", a[m.xb.LEARN] = "learn", a[m.xb.TEST] = "test", a[m.xb.SPACE_RACE] = "space_race", a[m.xb.SCATTER] = "scatter", a[m.xb.VOICE_RACE] = "voice_race", a[m.xb.VOICE_SCATTER] = "voice_scatter", a[m.xb.SPELLER] = "speller", a[m.xb.BISMARCK] = "bismarck", a[m.xb.MOBILE_CARDS] = "mobile_cards", a[m.xb.MOBILE_LEARN] = "mobile_learn", a[m.xb.MOBILE_SCATTER] = "mobile_scatter", a[m.xb.GRAVITY] = "gravity", a[m.xb.MICROSCATTER] = "microscatter", a[m.xb.REVIEW] = "review", a[m.xb.MULTIPLAYER] = "multiplayer", a[m.xb.LEARNING_ASSISTANT] = "learning_assistant", a[m.xb.LOCATE] = "locate", a);

        function A(e) {
            return w[e]
        }
    }, dan0: function (e, t, r) {
        "use strict";
        r("zKZe"), r("eoL8"), Object.defineProperty(t, "__esModule", {value: !0});
        var n = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.routerReducer = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = t.type, i = t.payload;
            if (r === a) return n({}, e, {locationBeforeTransitions: i});
            return e
        };
        var a = t.LOCATION_CHANGE = "@@router/LOCATION_CHANGE", o = {locationBeforeTransitions: null}
    }, fkdw: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return s
        }));
        r("zKZe");
        var n = r("QR21"), a = r("zK28"), o = r("og3H"), i = r("sLV1");

        function s(e, t, r, s, c) {
            var l = {
                agent: window.navigator.userAgent,
                click_category: t,
                click_name: r,
                client_timestamp: Object(i.c)(),
                platform: o.H.WEB,
                screen_name: e,
                action: c,
                uid: a.a.uid,
                user_id: a.a.user ? a.a.user.id : null
            };
            s && (l = Object.assign({}, l, {}, s)), Object(n.a)("navigation_events", l)
        }
    }, fvM1: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return J
        }));
        r("TeQF"), r("QWBl"), r("yXV3"), r("J30X"), r("2B1R"), r("E9XD"), r("DQNa"), r("toAj"), r("tkto"), r("07d7"), r("SuFq"), r("JfAA"), r("SYor"), r("FZtP");
        var n = r("o0o1"), a = r.n(n), o = (r("ls82"), r("yXPU")), i = r.n(o), s = (r("a1gu"), r("Nsbk"), r("VbXa")),
            c = r.n(s), l = r("TSYQ"), u = r.n(l), d = r("q1tI"), p = r.n(d), h = r("KAy6"), m = r("KX5j"),
            f = r("T3U7"), _ = r("zK28"), g = r("YU+Q"), v = r("t1Ez"), y = r("nXOR"), C = r("Vd5f"), b = r("S41V"),
            S = r("Pxp3"), E = r("FFEN"), k = r("/i8B"), O = r("vlgG"), P = r("a08m"), w = r("E/Xc"), A = r("DLQF"),
            T = r("OpqZ"), M = r("5nSj"), U = r("su65");
        var I = function (e) {
                c()(r, e);
                var t;
                t = r;

                function r() {
                    return e.apply(this, arguments) || this
                }

                var n = r.prototype;
                return n.getCardClass = function () {
                    switch (this.props.creditCardType) {
                        case"American Express":
                            return "amex";
                        case"Discover":
                            return "discover";
                        case"MasterCard":
                            return "mastercard";
                        case"Visa":
                            return "visa";
                        default:
                            return "unknown"
                    }
                }, n.render = function () {
                    var e = this.getCardClass(), t = u()("CheckoutCreditCardLogo", "CheckoutCreditCardLogo--" + e);
                    return p.a.createElement("span", {className: t})
                }, r
            }(p.a.PureComponent), L = r("HmKC"), N = r("TtcH"), D = r("QLaP"), F = r.n(D), R = r("Ri2w"), j = r("EFuM"),
            x = r("ZKm7"), B = r("s52C"), H = r("bBvF").default;
        var W = function (e) {
            c()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            var n = r.prototype;
            return n.renderCardByline = function () {
                var e = this.props, t = e.numMcqs, r = e.numSets, n = e.numStudyGuides, a = e.numTerms;
                return p.a.createElement("div", {className: "CheckoutItemPreview-cardBylineWrapper"}, p.a.createElement(x.a, null, n ? this.renderStudyGuideCount(n) : null, r ? this.renderSetCount(r) : null, a ? this.renderTermCount(a) : null, t ? this.renderMcqCount(t) : null, this.renderCreatorLink()))
            }, n.renderCreatorLink = function () {
                var e = this.props.creator;
                return p.a.createElement("div", {className: "CheckoutItemPreview-cardBylineCreator"}, p.a.createElement(B.a, {
                    badge: e.isVerified,
                    highlightQuery: this.props.highlightQuery,
                    user: e
                }))
            }, n.renderMcqCount = function (e) {
                return p.a.createElement("span", {className: "CheckoutItemPreview-cardBylineItemsCount"}, p.a.createElement(v.a, {_precomputed: H("en-US", "{mcqCount, plural, one {1 Practice question} other {# Practice questions}}", {mcqCount: e}, "purchasable_content.checkout_modal.num_of_mcqs")}))
            }, n.renderSetCount = function (e) {
                return p.a.createElement("span", {className: "CheckoutItemPreview-cardBylineItemsCount"}, p.a.createElement(v.a, {_precomputed: H("en-US", "{setCount, plural, one {1 Set} other {# Sets}}", {setCount: e}, "purchasable_content.checkout_modal.num_of_sets")}))
            }, n.renderStudyGuideCount = function (e) {
                return p.a.createElement("span", {className: "CheckoutItemPreview-cardBylineItemsCount"}, p.a.createElement(v.a, {_precomputed: H("en-US", "{studyGuideCount, plural, one {1 Study guide} other {# Study guides}}", {studyGuideCount: e}, "purchasable_content.checkout_modal.num_of_study_guides")}))
            }, n.renderTermCount = function (e) {
                return p.a.createElement("span", {className: "CheckoutItemPreview-cardBylineItemsCount"}, p.a.createElement(v.a, {_precomputed: H("en-US", "{termCount, plural, one {1 Term} other {# Terms}}", {termCount: e}, "purchasable_content.checkout_modal.num_of_terms")}))
            }, n.renderThumbnail = function () {
                F()(this.props.thumbnail, "Thumbnail cannot be null here because null check already completed.");
                var e = this.props.thumbnail;
                return p.a.createElement("div", {
                    className: "CheckoutItemPreview-thumbnail",
                    style: {backgroundImage: 'url("' + e + '")'}
                })
            }, n.renderTitle = function () {
                F()(this.props.title, "Title cannot be null here because null check already completed.");
                var e = this.props.title;
                return p.a.createElement("div", {className: "CheckoutItemPreview-title"}, p.a.createElement(E.a, {
                    deprecatedStyle: !0,
                    size: 4
                }, e))
            }, n.render = function () {
                return p.a.createElement("div", {className: "CheckoutItemPreview"}, this.props.thumbnail ? this.renderThumbnail() : null, p.a.createElement("div", {className: "CheckoutItemPreview-wrapper"}, this.props.title ? this.renderTitle() : null, this.props.creator ? this.renderCardByline() : null))
            }, r
        }(p.a.Component), z = r("xNal"), V = r("og3H"), G = r("8C/+"), q = r("bBvF").default;
        var Q = Object(h.renderToStaticMarkup)(p.a.createElement(P.a, {
                newTab: !0,
                to: "/help/2807911/article"
            }, p.a.createElement(v.a, {_precomputed: q("en-US", "here", {}, "checkout.credit_card_form.recurring_disclaimer_faq_link")}))),
            Y = Object(h.renderToStaticMarkup)(p.a.createElement(P.a, {
                newTab: !0,
                to: "/tos"
            }, p.a.createElement(v.a, {_precomputed: q("en-US", "here", {}, "checkout.credit_card_form.recurring_disclaimer_tos_link")}))),
            J = function (e) {
                c()(r, e);
                var t;
                t = r;

                function r(t) {
                    var r;
                    return (r = e.call(this, t) || this).handleRecurlyStateChange = function (e) {
                        var t = r.state.errorFields;
                        Object.keys(e.fields).forEach((function (n) {
                            var a = e.fields[n];
                            a.focus && r.recurlyFieldHasChanged(n, a) && (t = t.filter((function (e) {
                                return e !== n
                            })))
                        })), r.setState({
                            lastRecurlyState: JSON.parse(JSON.stringify(e)),
                            errorFields: t
                        }, (function () {
                            r.clearErrorMessageIfThereAreNoErrors()
                        }))
                    }, r.handleFormRef = function (e) {
                        r.creditCardForm = e
                    }, r.handleSubmit = function (e) {
                        e && e.preventDefault(), "submitting" !== r.state.status && r.setState({
                            errorFields: [],
                            errorMessages: [],
                            status: "submitting"
                        }, (function () {
                            r.props.onCheckoutAttempt && r.props.onCheckoutAttempt(), r.shouldRenderSavedCreditCardRows() ? r.checkout(null) : Object(L.a)().token(r.creditCardForm, (function (e, t) {
                                e ? r.handleErrors(["recurly.payment_errors." + e.code], e.fields) : r.checkout(t.id)
                            }))
                        }))
                    }, r.handleSubmitResponse = function (e) {
                        e.success ? (r.shouldLogSavedNewCreditCardPageAction() && Object(f.a)("purchasable_content_checkout_saved_new_credit_card", {userContentPurchasableId: e.userContentPurchasableId}), r.setState({status: "complete"}, r.handleUpgraded)) : r.handleErrors(e.errors, e.fields, e.couponErrorIdentifier)
                    }, r.handleUpgraded = function () {
                        r.props.onCheckoutComplete()
                    }, r.handleApplyCoupon = function () {
                        return r.applyCoupon()
                    }, r.handleCouponCodeChange = function (e) {
                        z.c.read(V.l.TOAST_NOTIFICATION__COUPON_CODE) && z.c.dispose(V.l.TOAST_NOTIFICATION__COUPON_CODE), r.setState({
                            couponCode: e.target.value,
                            couponData: null,
                            couponCodeErrorMessage: null,
                            errorFields: r.state.errorFields.filter((function (e) {
                                return "coupon" !== e
                            })),
                            formattedDiscountPrice: null
                        }, (function () {
                            r.clearErrorMessageIfThereAreNoErrors()
                        }))
                    }, r.handleCouponCodeFocus = function () {
                        r.hasLoggedCouponCodeFocus || (r.hasLoggedCouponCodeFocus = !0, Object(f.a)("opened_coupon_field"))
                    }, r.handleDurationChange = function (e) {
                        r.props.onChangePurchaseDuration && r.props.onChangePurchaseDuration(e), Object(f.a)("clicked_study_guide_duration", {duration: e}), r.state.couponData && r.setState({couponData: null}, (function () {
                            return r.applyCoupon(e)
                        }))
                    }, r.handleSaveCreditCardChange = function () {
                        r.setState({saveCreditCard: !r.state.saveCreditCard})
                    }, r.handleInputChange = function (e) {
                        var t = e.target.getAttribute("data-recurly");
                        r.setState({
                            errorFields: r.state.errorFields.filter((function (e) {
                                return e !== t
                            }))
                        }, (function () {
                            r.clearErrorMessageIfThereAreNoErrors()
                        }))
                    }, r.handleChangeCard = function (e) {
                        e.preventDefault(), r.setState({isOverridingSavedPaymentData: !0}, (function () {
                            r.initializeRecurlyFormFields()
                        }))
                    }, r.clearErrorMessageIfThereAreNoErrors = function () {
                        r.state.errorFields.length < 1 && r.setState({errorMessages: []})
                    }, r.recurlyFieldHasChanged = function (e, t) {
                        return r.state.lastRecurlyState && t.length !== r.state.lastRecurlyState.fields[e].length
                    }, r.state = {
                        couponCode: t.couponCode || null,
                        couponCodeErrorMessage: null,
                        couponData: null,
                        errorFields: [],
                        errorMessages: [],
                        formattedDiscountAmount: null,
                        formattedDiscountPrice: null,
                        isOverridingSavedPaymentData: !1,
                        isValidatingCoupon: !1,
                        lastRecurlyState: null,
                        saveCreditCard: "us" === _.a.countryCode,
                        status: "default"
                    }, r
                }

                var n = r.prototype;
                return n.componentDidMount = function () {
                    this.initializeRecurlyFormFields(), this.firstNameInput && this.firstNameInput.focus(), this.state.couponCode && this.handleApplyCoupon()
                }, n.componentWillUnmount = function () {
                    var e = this;
                    QWait("qrecurly", (function () {
                        Object(L.a)().off("change", e.handleRecurlyStateChange), Object(L.a)().off("field:submit", e.handleSubmit)
                    }))
                }, n.getCouponCode = function () {
                    return this.state.couponCode ? this.state.couponCode.trim() : null
                }, n.getCouponCodeInvalidState = function () {
                    var e = this.state, t = e.couponCodeErrorMessage, r = e.couponData;
                    return !(null === t && !this.hasError("coupon")) || null === r && void 0
                }, n.getCouponCodeLabel = function () {
                    var e = this.state, t = e.couponCodeErrorMessage, r = e.couponData;
                    return null !== t ? p.a.createElement(p.a.Fragment, null, t) : null !== r ? p.a.createElement(v.a, {_precomputed: q("en-US", "PROMO APPLIED!", {}, "checkout.coupon.coupon_code_applied")}) : p.a.createElement(v.a, {_precomputed: q("en-US", "Promo code", {}, "checkout.credit_card_form.coupon_code_label")})
                }, n.handleErrors = function (e, t, r) {
                    var n = e.map(m.a);
                    Object(f.a)("contextual_checkout_error", {errorMessages: n}), r && this.handleCouponCodeError([r]), this.props.isCheckoutPage && Object(G.b)(n), this.setState({
                        errorFields: t || [],
                        errorMessages: n,
                        status: "default"
                    }), this.props.onCheckoutError && this.props.onCheckoutError()
                }, n.handleCouponCodeError = function (e) {
                    var t = q("en-US", "PLEASE ENTER A VALID CODE", {}, "errors.purchase_error.coupon_code_invalid");
                    if (Object(f.a)("contextual_checkout_coupon_code_error"), e && e.length > 0) switch (e[0]) {
                        case"coupon_code_max_redemption":
                            t = q("en-US", "YOU’VE ALREADY USED THIS CODE", {}, "errors.purchase_error.coupon_code_max_redemption");
                            break;
                        case"coupon_code_expired":
                            t = q("en-US", "THIS CODE HAS EXPIRED", {}, "errors.purchase_error.coupon_code_expired");
                            break;
                        case"coupon_code_invalid":
                        default:
                            t = q("en-US", "PLEASE ENTER A VALID CODE", {}, "errors.purchase_error.coupon_code_invalid")
                    }
                    this.setState({
                        couponCodeErrorMessage: t,
                        couponData: null,
                        formattedDiscountPrice: null,
                        isValidatingCoupon: !1
                    })
                }, n.renderCardField = function (e, t) {
                    var r = u()("CheckoutForm-input", {"is-invalid": this.hasError(e)});
                    return p.a.createElement("div", {className: r}, p.a.createElement("div", {"data-recurly": e}), p.a.createElement("div", {className: "CheckoutForm-label"}, t))
                }, n.renderCouponField = function () {
                    var e = this.state.couponCode || "";
                    return p.a.createElement("span", {className: "CheckoutForm-couponCodeInput"}, p.a.createElement(O.a, {
                        "data-recurly": "coupon",
                        invalid: this.getCouponCodeInvalidState(),
                        label: this.getCouponCodeLabel(),
                        name: "coupon",
                        onChange: this.handleCouponCodeChange,
                        onFocus: this.handleCouponCodeFocus,
                        placeholder: q("en-US", "Enter code here", {}, "checkout.credit_card_form.coupon_code_placeholder"),
                        value: e
                    }))
                }, n.renderNameField = function (e, t, r, n) {
                    return p.a.createElement(O.a, {
                        "data-recurly": e,
                        invalid: !!this.hasError(e) || void 0,
                        label: t,
                        onChange: this.handleInputChange,
                        placeholder: r,
                        ref: n
                    })
                }, n.renderErrors = function () {
                    var e = this.state.errorMessages.length ? this.state.errorMessages : [q("en-US", "An error occurred trying to process your payment", {}, "checkout.submit_payment.error")];
                    return p.a.createElement(A.a, {
                        boxed: !0,
                        uppercaseDeprecated: !0,
                        variant: "alert"
                    }, e.map((function (e, t) {
                        return p.a.createElement(S.a, {key: t}, e)
                    })))
                }, n.renderHeader = function (e) {
                    return p.a.createElement(S.a, {className: "CheckoutForm-heading"}, p.a.createElement(E.a, {
                        deprecatedStyle: !0,
                        size: 3
                    }, e))
                }, n.renderCouponCodeArea = function () {
                    return p.a.createElement(p.a.Fragment, null, p.a.createElement(k.a, null), p.a.createElement(T.a, null, p.a.createElement(b.a, {width: 2 / 3}, this.renderCouponField()), p.a.createElement(b.a, {width: 1 / 3}, p.a.createElement(w.a, {
                        disabled: this.shouldDisableApplyCouponCodeButton(),
                        loading: this.state.isValidatingCoupon,
                        onClick: this.handleApplyCoupon,
                        type: "button",
                        width: "fill"
                    }, null === this.state.couponData ? p.a.createElement(v.a, {_precomputed: q("en-US", "Apply", {}, "checkout.coupon.apply_coupon_button")}) : p.a.createElement(v.a, {_precomputed: q("en-US", "Applied!", {}, "checkout.coupon.apply_coupon_button_success")})))))
                }, n.renderSaveCreditCardRow = function () {
                    return p.a.createElement(T.a, null, p.a.createElement(b.a, {width: 1}, p.a.createElement(C.a, {
                        checked: this.state.saveCreditCard,
                        extraClassNames: "CheckoutForm-saveCreditCardCheckbox",
                        label: p.a.createElement(v.a, {_precomputed: q("en-US", "Save this card for future purchases and subscriptions", {}, "checkout.credit_card_form.save_credit_card_checkbox")}),
                        onChange: this.handleSaveCreditCardChange
                    })))
                }, n.renderNewCreditCardRows = function () {
                    var e = this;
                    return p.a.createElement(p.a.Fragment, null, p.a.createElement(T.a, null, p.a.createElement(b.a, {width: .5}, this.renderNameField("first_name", p.a.createElement(v.a, {_precomputed: q("en-US", "First name", {}, "checkout.credit_card_form.first_name_label")}), q("en-US", "First name", {}, "checkout.credit_card_form.first_name_label"), (function (t) {
                        e.firstNameInput = t
                    }))), p.a.createElement(b.a, {width: .5}, this.renderNameField("last_name", p.a.createElement(v.a, {_precomputed: q("en-US", "Last name", {}, "checkout.credit_card_form.last_name_label")}), q("en-US", "Last name", {}, "checkout.credit_card_form.last_name_label")))), p.a.createElement(T.a, null, p.a.createElement(b.a, {width: 1}, this.renderCardField("number", p.a.createElement(v.a, {_precomputed: q("en-US", "Card number", {}, "checkout.credit_card_form.card_number")})))), p.a.createElement(T.a, null, p.a.createElement(b.a, {width: Object(j.c)() ? 1 / 4 : 1 / 3}, this.renderCardField("month", p.a.createElement(v.a, {_precomputed: q("en-US", "Month", {}, "checkout.credit_card_form.mm_label")}))), p.a.createElement(b.a, {width: Object(j.c)() ? 1 / 4 : 1 / 3}, this.renderCardField("year", p.a.createElement(v.a, {_precomputed: q("en-US", "Year", {}, "checkout.credit_card_form.yy_label")}))), p.a.createElement(b.a, {width: 1 / 3}, this.renderCardField("cvv", p.a.createElement(v.a, {_precomputed: q("en-US", "Card code", {}, "checkout.credit_card_form.card_code")})))), this.shouldRenderSaveCreditCardRow() ? this.renderSaveCreditCardRow() : null)
                }, n.renderChangeCreditCardLink = function () {
                    var e = this.props.onChangeCardClick, t = this.handleChangeCard;
                    return p.a.createElement(P.a, {onClick: e || t}, p.a.createElement(v.a, {_precomputed: q("en-US", "Change card", {}, "checkout.credit_card_form.override_saved_card")}))
                }, n.renderSavedCreditCardRows = function () {
                    var e = this.props.creditCardDetails;
                    return F()(e, "Credit card details must exist"), p.a.createElement(T.a, null, p.a.createElement(b.a, null, p.a.createElement("div", {className: "CheckoutForm-savedCreditCard"}, p.a.createElement("div", {className: "CheckoutForm-creditCardLogo"}, p.a.createElement(I, {creditCardType: e.cardType})), p.a.createElement("span", {className: "CheckoutForm-creditCardDescription"}, this.hasExpiredSavedCreditCardDetails() ? p.a.createElement("span", {className: "CheckoutForm-savedCardExpirationMessage"}, p.a.createElement(v.a, {_precomputed: q("en-US", "This card is no longer valid", {}, "checkout.credit_card_form.saved_card_expired")})) : null, p.a.createElement(U.a, null, p.a.createElement(v.a, {
                        _precomputed: q("en-US", "{creditCardType} ending in {lastFour}", {
                            creditCardType: e.cardType,
                            lastFour: e.lastFour
                        }, "checkout.credit_card_form.saved_card_description")
                    })), p.a.createElement(y.a, {below: "s"}, p.a.createElement("div", {className: "CheckoutForm-changeCreditCardLink"}, this.renderChangeCreditCardLink()))), p.a.createElement(y.a, {above: "s"}, this.renderChangeCreditCardLink()))))
                }, n.renderForm = function () {
                    return p.a.createElement("form", {
                        className: "CheckoutForm-form",
                        onSubmit: this.handleSubmit,
                        ref: this.handleFormRef
                    }, this.shouldRenderSavedCreditCardRows() ? this.renderSavedCreditCardRows() : this.renderNewCreditCardRows(), this.props.showCouponCode ? this.renderCouponCodeArea() : null, p.a.createElement("input", {
                        "data-recurly": "token",
                        type: "hidden"
                    }), p.a.createElement("div", {className: "CheckoutForm-submit"}, this.renderCheckoutButton()), p.a.createElement("div", {className: "CheckoutForm-disclaimer"}, !this.props.isCheckoutPage && (this.props.disclaimer || this.renderUpsellDisclaimer())))
                }, n.renderUpsellDisclaimer = function () {
                    var e = this.props.cartData;
                    if (this.isCartDataPurchasableContent(e)) throw new Error("subscription cartData should include formattedMonthlyPrice");
                    return this.props.showMonthlyPricing ? p.a.createElement(v.a, {
                        _precomputed: q("en-US", "Pay {formattedTotalPrice} ({monthlyPrice}/month x 12 months). By clicking Check out you agree to be charged the subscription fee automatically every year until you cancel. Full terms and conditions available {tosLink}. Details on managing your subscription available {faqLink}.", {
                            faqLink: Q,
                            formattedTotalPrice: e.formattedPrice,
                            monthlyPrice: e.formattedMonthlyPrice,
                            tosLink: Y
                        }, "checkout.credit_card_form.recurring_disclaimer_monthly")
                    }) : p.a.createElement(v.a, {
                        _precomputed: q("en-US", "By clicking Check out you agree to be charged the subscription fee automatically every year until you cancel. Full terms and conditions available {tosLink}. Details on managing your subscription available {faqLink}.", {
                            faqLink: Q,
                            tosLink: Y
                        }, "checkout.credit_card_form.recurring_disclaimer")
                    })
                }, n.renderCheckoutItemPreview = function (e) {
                    return p.a.createElement("div", {className: "CheckoutForm-checkoutItemPreview"}, p.a.createElement("div", {className: "CheckoutForm-checkoutItemBackground"}), e.map((function (e) {
                        var t = e.modelData.modelType + "-" + e.modelData.modelId;
                        return p.a.createElement(W, {
                            creator: e.creator,
                            key: t,
                            numMcqs: e.numMcqs,
                            numSets: e.numSets,
                            numStudyGuides: e.numStudyGuides,
                            numTerms: e.numTerms,
                            thumbnail: e.thumbnail,
                            title: e.title
                        })
                    })))
                }, n.renderTotalPrice = function () {
                    return p.a.createElement(U.a, null, this.calculateFormattedPrice())
                }, n.renderDiscountedPrice = function () {
                    return p.a.createElement(U.a, null, p.a.createElement(M.a, null, this.calculateFormattedPrice()), this.state.formattedDiscountPrice)
                }, n.renderCartLineItemCheckoutButton = function () {
                    return this.props.checkoutButtonTextSource ? this.props.checkoutButtonTextSource : p.a.createElement(v.a, {_precomputed: q("en-US", "Check out ({formattedPrice}/yr)", {formattedPrice: this.calculateFormattedPrice()}, "checkout.credit_card_form.checkout_button_recurring")})
                }, n.renderCheckoutButton = function () {
                    var e = this.props.cartData;
                    return p.a.createElement(w.a, {
                        disabled: this.shouldDisableCheckoutButton(),
                        hero: !0,
                        loading: "submitting" === this.state.status,
                        type: "submit",
                        width: "fill"
                    }, this.isCartDataPurchasableContent(e) ? p.a.createElement(v.a, {_precomputed: q("en-US", "Buy now - {totalAmount}", {totalAmount: this.state.formattedDiscountPrice || this.calculateFormattedPrice()}, "checkout.credit_card_form.checkout_button_premium_content")}) : this.renderCartLineItemCheckoutButton())
                }, n.renderOrderTotalSection = function () {
                    var e = this.state, t = e.couponData, r = e.formattedDiscountAmount;
                    return p.a.createElement(p.a.Fragment, null, p.a.createElement(T.a, null, p.a.createElement(b.a, null, p.a.createElement("div", {className: "CheckoutForm-totalSection"}, p.a.createElement(U.a, null, p.a.createElement(v.a, {_precomputed: q("en-US", "Total", {}, "checkout.order_total.total")}), t ? p.a.createElement("span", {className: "CheckoutForm-discount"}, t.discountType === V.O.PERCENT ? p.a.createElement(v.a, {_precomputed: q("en-US", "{discount}% OFF", {discount: t.discountPercent}, "checkout.coupon.premium_content_coupon_percent_discount")}) : null, t.discountType === V.O.FIXED_AMOUNT && r ? p.a.createElement(v.a, {_precomputed: q("en-US", "{discount} OFF", {discount: r}, "checkout.coupon.price_badge_amount_discount")}) : null) : null), p.a.createElement("div", {className: "CheckoutForm-totalPrice"}, t ? this.renderDiscountedPrice() : this.renderTotalPrice())))), p.a.createElement(k.a, null))
                }, n.render = function () {
                    var e = this.props, t = e.cartData, r = e.headerContent;
                    return p.a.createElement("div", {className: "CheckoutForm"}, this.isCartDataPurchasableContent(t) ? this.renderCheckoutItemPreview(t) : null, this.shouldDisplayErrorsHeader() ? this.renderErrors() : null, r && !this.shouldDisplayErrorsHeader() ? this.renderHeader(r) : null, this.props.showCouponCode ? this.renderOrderTotalSection() : null, this.renderForm())
                }, n.calculateFormattedPrice = function () {
                    var e = this.props.cartData;
                    return this.isCartDataPurchasableContent(e) ? "$" + (e.map((function (e) {
                        return e.trackingData.priceValue
                    })).reduce((function (e, t) {
                        return e + t
                    })) / 100).toFixed(2) : e.formattedPrice
                }, n.initializeRecurlyFormFields = function () {
                    var e = this;
                    Object(g.a)(_.a.recurlyKey), QWait("qrecurly", (function () {
                        Object(L.a)().on("change", e.handleRecurlyStateChange), Object(L.a)().on("field:submit", e.handleSubmit)
                    }))
                }, n.hasError = function (e) {
                    return this.state.errorFields.indexOf(e) > -1
                }, n.applyCoupon = function (e) {
                    var t = this, r = this.props.cartData;
                    if (this.isCartDataPurchasableContent(r)) {
                        var n = r.reduce((function (e, t) {
                            return e.modelIds.push(t.modelData.modelId), e.modelTypes.push(t.modelData.modelType), e
                        }), {modelIds: [], modelTypes: []}), o = n.modelIds, s = n.modelTypes;
                        this.setState({isValidatingCoupon: !0}, i()(a.a.mark((function n() {
                            var i;
                            return a.a.wrap((function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Object(R.f)("/recurly/coupon/" + (t.state.couponCode || ""), {
                                            modelIds: o,
                                            modelTypes: s,
                                            purchaseDuration: e || r[0].purchaseDuration
                                        });
                                    case 2:
                                        if (!(i = n.sent)) {
                                            n.next = 6;
                                            break
                                        }
                                        return i.success ? (t.setState({
                                            couponCodeErrorMessage: null,
                                            couponData: i.coupon,
                                            formattedDiscountAmount: i.formattedDiscountAmount,
                                            formattedDiscountPrice: i.formattedDiscountPrice,
                                            isValidatingCoupon: !1
                                        }), Object(f.a)("contextual_checkout_coupon_code_applied")) : t.handleCouponCodeError(i.errors), n.abrupt("return");
                                    case 6:
                                        t.handleCouponCodeError();
                                    case 7:
                                    case"end":
                                        return n.stop()
                                }
                            }), n)
                        }))))
                    }
                }, n.checkout = function (e) {
                    var t = this, r = this.props, n = r.cartData, a = r.couponCode, o = r.source,
                        i = this.isCartDataPurchasableContent(n) ? Object(N.r)(e, this.getCouponCode(), this.state.saveCreditCard, n) : Object(N.q)(e, o, n, a);
                    i && i.then(this.handleSubmitResponse).catch((function () {
                        t.handleErrors(["checkout.submit_payment.error"])
                    }))
                }, n.isCartDataPurchasableContent = function (e) {
                    return Array.isArray(e) && "creator" in e[0]
                }, n.shouldDisableApplyCouponCodeButton = function () {
                    return 0 === (this.getCouponCode() || "").length || null !== this.state.couponData
                }, n.hasExpiredSavedCreditCardDetails = function () {
                    var e = this.props.creditCardDetails;
                    if (!e) return !1;
                    if (this.state.isOverridingSavedPaymentData) return !1;
                    var t = new Date;
                    return new Date(e.expirationYear, e.expirationMonth - 1, 1) < t
                }, n.shouldDisableCheckoutButton = function () {
                    return this.hasExpiredSavedCreditCardDetails() || "complete" === this.state.status
                }, n.shouldDisplayErrorsHeader = function () {
                    return !this.props.isCheckoutPage && (this.state.errorMessages.length > 0 || this.state.errorFields.length > 0 && (!this.props.showCouponCode || !(1 === this.state.errorFields.length && this.hasError("coupon"))))
                }, n.shouldLogSavedNewCreditCardPageAction = function () {
                    return this.isCartDataPurchasableContent(this.props.cartData) && (this.state.isOverridingSavedPaymentData || !this.props.creditCardDetails && this.state.saveCreditCard)
                }, n.shouldRenderSavedCreditCardRows = function () {
                    return null !== this.props.creditCardDetails && !this.state.isOverridingSavedPaymentData
                }, n.shouldRenderSaveCreditCardRow = function () {
                    return !(!this.props.offerToSaveCreditCard || this.props.creditCardDetails && !this.state.isOverridingSavedPaymentData)
                }, r
            }(p.a.Component);
        J.defaultProps = {offerToSaveCreditCard: !1, showCouponCode: !1}
    }, gDiQ: function (e, t, r) {
        "use strict";
        r("zKZe"), t.__esModule = !0;
        var n = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, a = d(r("QLaP")), o = r("HaSr"), i = u(r("cKUA")), s = u(r("ncWH")), c = r("Ad4u"), l = d(r("Y0sT"));

        function u(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o.canUseDOM || (0, a.default)(!1);
            var t = e.forceRefresh || !(0, c.supportsHistory)(), r = t ? s : i, u = r.getUserConfirmation,
                d = r.getCurrentLocation, p = r.pushLocation, h = r.replaceLocation, m = r.go,
                f = (0, l.default)(n({getUserConfirmation: u}, e, {
                    getCurrentLocation: d,
                    pushLocation: p,
                    replaceLocation: h,
                    go: m
                })), _ = 0, g = void 0, v = function (e, t) {
                    1 == ++_ && (g = i.startListener(f.transitionTo));
                    var r = t ? f.listenBefore(e) : f.listen(e);
                    return function () {
                        r(), 0 == --_ && g()
                    }
                }, y = function (e) {
                    return v(e, !0)
                }, C = function (e) {
                    return v(e, !1)
                };
            return n({}, f, {listenBefore: y, listen: C})
        }
    }, lHBz: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return u
        })), r.d(t, "b", (function () {
            return d
        }));
        r("yq1k"), r("JTJg");
        var n = r("44Ds"), a = r.n(n), o = r("xhj2"), i = r("RF01"), s = r.n(i), c = r("L3Ur"), l = r("9WHe");
        o.a.register({router: c.routerReducer});
        var u = function (e) {
            return e.get("router").locationBeforeTransitions
        }, d = a()((function () {
            try {
                s.a.getCurrentLocation()
            } catch (e) {
                console.info("Cleaning URL after failing to parse", window.location), s.a.push(window.location.pathname), window.location.pathname.includes("/embed") && l.a.warn("Embedding had malformed URL")
            }
            return Object(c.syncHistoryWithStore)(s.a, o.b, {
                selectLocationState: function (e) {
                    return e.get("router")
                }
            })
        }))
    }, m6aF: function (e, t, r) {
        "use strict";
        r("07d7"), r("5s+n");
        var n = r("mr8R");
        t.a = Object(n.a)((function () {
            return Promise.all([r.e(2), r.e(3), r.e(0), r.e(134)]).then(r.bind(null, "o2l2"))
        }))
    }, mHnE: function (e, t, r) {
        "use strict";
        r("pNMO"), r("4Brf"), r("0oug"), r("piMb"), r("J30X"), r("4mDm"), r("DQNa"), r("zKZe"), r("uL8W"), r("tkto"), r("07d7"), r("rB9j"), r("JfAA"), r("PKPk"), r("hByQ"), r("3bBZ"), t.__esModule = !0, t.locationsAreEqual = t.statesAreEqual = t.createLocation = t.createQuery = void 0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, o = c(r("QLaP")), i = (c(r("2W6z")), r("ZR02")), s = r("/yDZ");

        function c(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.createQuery = function (e) {
            return a(Object.create(null), e)
        }, t.createLocation = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.POP,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = "string" == typeof e ? (0, i.parsePath)(e) : e, a = n.pathname || "/", o = n.search || "",
                c = n.hash || "", l = n.state;
            return {pathname: a, search: o, hash: c, state: l, action: t, key: r}
        };
        var l = function (e) {
            return "[object Date]" === Object.prototype.toString.call(e)
        }, u = t.statesAreEqual = function e(t, r) {
            if (t === r) return !0;
            var a = void 0 === t ? "undefined" : n(t);
            if (a !== (void 0 === r ? "undefined" : n(r))) return !1;
            if ("function" === a && (0, o.default)(!1), "object" === a) {
                if (l(t) && l(r) && (0, o.default)(!1), !Array.isArray(t)) {
                    var i = Object.keys(t), s = Object.keys(r);
                    return i.length === s.length && i.every((function (n) {
                        return e(t[n], r[n])
                    }))
                }
                return Array.isArray(r) && t.length === r.length && t.every((function (t, n) {
                    return e(t, r[n])
                }))
            }
            return !1
        };
        t.locationsAreEqual = function (e, t) {
            return e.key === t.key && e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && u(e.state, t.state)
        }
    }, mOtT: function (e, t, r) {
        "use strict";
        t.__esModule = !0;
        t.loopAsync = function (e, t, r) {
            var n = 0, a = !1, o = !1, i = !1, s = void 0, c = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                a = !0, o ? s = t : r.apply(void 0, t)
            };
            !function l() {
                if (!a && (i = !0, !o)) {
                    for (o = !0; !a && n < e && i;) i = !1, t(n++, l, c);
                    o = !1, a ? r.apply(void 0, s) : n >= e && i && (a = !0, r())
                }
            }()
        }
    }, mahw: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return p
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA");
        var n = r("8OQS"), a = r.n(n), o = (r("a1gu"), r("Nsbk"), r("VbXa")), i = r.n(o), s = r("q1tI"), c = r.n(s),
            l = r("bvRJ"), u = r("ugal"), d = r("AQxD");
        var p = function (e) {
            i()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            var n = r.prototype;
            return n.renderBadge = function () {
                return "yellow" === this.props.badgeColor ? c.a.createElement("div", {className: "MenuItemWithIcon-UIBadge"}, c.a.createElement(d.a, {
                    menu: !0,
                    variant: "yellow"
                }, this.props.badgeText)) : "indigo" === this.props.badgeColor ? c.a.createElement("div", {className: "MenuItemWithIcon-featureBadge"}, this.props.badgeText) : null
            }, n.render = function () {
                var e = this.props, t = e.icon, r = e.iconPosition, n = e.iconSize, o = e.text,
                    i = a()(e, ["icon", "iconPosition", "iconSize", "text"]);
                return c.a.createElement(u.a, i, c.a.createElement("span", {className: "MenuItemWithIcon-inner"}, t ? c.a.createElement(l.a, {
                    className: "MenuItemWithIcon-" + r,
                    icon: t,
                    size: n
                }) : null, this.props.badgeText ? this.renderBadge() : null, c.a.createElement("span", {className: "MenuItemWithIcon-text"}, o)))
            }, r
        }(c.a.PureComponent);
        p.defaultProps = {iconPosition: "left", iconSize: "medium"}
    }, "n/dV": function (e, t, r) {
        "use strict";
        t.__esModule = !0, t.default = function (e) {
            return function (t) {
                return (0, n.default)((0, a.default)(e))(t)
            }
        };
        var n = o(r("A00f")), a = o(r("EVih"));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        e.exports = t.default
    }, ncWH: function (e, t, r) {
        "use strict";
        r("eoL8"), r("rB9j"), r("UxlC"), t.__esModule = !0, t.replaceLocation = t.pushLocation = t.getCurrentLocation = t.go = t.getUserConfirmation = void 0;
        var n = r("cKUA");
        Object.defineProperty(t, "getUserConfirmation", {
            enumerable: !0, get: function () {
                return n.getUserConfirmation
            }
        }), Object.defineProperty(t, "go", {
            enumerable: !0, get: function () {
                return n.go
            }
        });
        var a = r("mHnE"), o = r("ZR02");
        t.getCurrentLocation = function () {
            return (0, a.createLocation)(window.location)
        }, t.pushLocation = function (e) {
            return window.location.href = (0, o.createPath)(e), !1
        }, t.replaceLocation = function (e) {
            return window.location.replace((0, o.createPath)(e)), !1
        }
    }, ojxP: function (e, t, r) {
        var n, a, o;
        r("yXV3"), r("oVuX"), r("rB9j"), r("EnZy"),
            /*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
            o = function () {
                var e, t, r = document, n = r.getElementsByTagName("head")[0], a = {}, o = {}, i = {}, s = {};

                function c(e, t) {
                    for (var r = 0, n = e.length; r < n; ++r) if (!t(e[r])) return !1;
                    return 1
                }

                function l(e, t) {
                    c(e, (function (e) {
                        return !t(e)
                    }))
                }

                function u(t, r, n) {
                    t = t.push ? t : [t];
                    var p = r && r.call, h = p ? r : n, m = p ? t.join("") : r, f = t.length;

                    function _(e) {
                        return e.call ? e() : a[e]
                    }

                    function g() {
                        if (!--f) for (var e in a[m] = 1, h && h(), i) c(e.split("|"), _) && !l(i[e], _) && (i[e] = [])
                    }

                    return setTimeout((function () {
                        l(t, (function t(r, n) {
                            return null === r ? g() : (n || /^https?:\/\//.test(r) || !e || (r = -1 === r.indexOf(".js") ? e + r + ".js" : e + r), s[r] ? (m && (o[m] = 1), 2 == s[r] ? g() : setTimeout((function () {
                                t(r, !0)
                            }), 0)) : (s[r] = 1, m && (o[m] = 1), void d(r, g)))
                        }))
                    }), 0), u
                }

                function d(e, a) {
                    var o, i = r.createElement("script");
                    i.onload = i.onerror = i.onreadystatechange = function () {
                        i.readyState && !/^c|loade/.test(i.readyState) || o || (i.onload = i.onreadystatechange = null, o = 1, s[e] = 2, a())
                    }, i.async = 1, i.src = t ? e + (-1 === e.indexOf("?") ? "?" : "&") + t : e, n.insertBefore(i, n.lastChild)
                }

                return u.get = d, u.order = function (e, t, r) {
                    !function n(a) {
                        a = e.shift(), e.length ? u(a, n) : u(a, t, r)
                    }()
                }, u.path = function (t) {
                    e = t
                }, u.urlArgs = function (e) {
                    t = e
                }, u.ready = function (e, t, r) {
                    e = e.push ? e : [e];
                    var n, o = [];
                    return !l(e, (function (e) {
                        a[e] || o.push(e)
                    })) && c(e, (function (e) {
                        return a[e]
                    })) ? t() : (n = e.join("|"), i[n] = i[n] || [], i[n].push(t), r && r(o)), u
                }, u.done = function (e) {
                    u([null], e)
                }, u
            }, e.exports ? e.exports = o() : void 0 === (a = "function" == typeof (n = o) ? n.call(t, r, t, e) : n) || (e.exports = a)
    }, qbFX: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return _
        }));
        r("DQNa"), r("07d7"), r("SuFq"), r("JfAA"), r("a1gu"), r("Nsbk");
        var n = r("VbXa"), a = r.n(n), o = r("t1Ez"), i = r("JxFz"), s = r("Pxp3"), c = r("E/Xc"), l = r("og3H"),
            u = r("17x9"), d = r.n(u), p = r("q1tI"), h = r.n(p), m = r("TtcH"), f = r("bBvF").default;
        var _ = function (e) {
            a()(r, e);
            var t;
            t = r;

            function r(t, r) {
                var n;
                if ((n = e.call(this, t, r) || this).getMonthlyPrice = function () {
                    switch (n.context.productType) {
                        case l.J.RECURRING_ONE_YEAR_GO:
                        case l.J.RECURRING_ONE_YEAR_GO_TIER2:
                        case l.J.RECURRING_ONE_YEAR_GO_TIER3:
                            return Object(m.h)();
                        default:
                            return Object(m.m)()
                    }
                }, n.handleButtonClick = function () {
                    n.context.inlineCheckoutStart(n.context.productType, n.props.source)
                }, n.context.inlineCheckout && n.props.onClick) throw new Error("Cannot pass a custom onClick to <UpsellModalUpgradeButton> when its parent <UpsellModal> has inlineCheckout=true");
                return n
            }

            var n = r.prototype;
            return n.renderText = function () {
                return this.props.shouldShowFreeTrial && Object(m.s)() ? h.a.createElement(h.a.Fragment, null, Object(m.e)()) : this.props.customText ? h.a.createElement(h.a.Fragment, null, this.props.customText) : this.props.showMonthlyPricing ? h.a.createElement(o.a, {_precomputed: f("en-US", "Upgrade ({monthlyPrice}/month)", {monthlyPrice: this.getMonthlyPrice()}, "upsell_modal.upgrade_button_monthly")}) : h.a.createElement(o.a, {_precomputed: f("en-US", "Upgrade ({annualPrice}/year)", {annualPrice: this.props.price}, "upsell_modal.upgrade_button")})
            }, n.renderLink = function () {
                return h.a.createElement(i.a, {
                    hero: !0,
                    linkTo: Object(m.l)(this.props.source),
                    linkToNewTab: this.props.shouldOpenNewTab
                }, this.renderText())
            }, n.renderButton = function () {
                return h.a.createElement(c.a, {
                    hero: !0,
                    loading: "loading" === this.context.inlineCheckoutState,
                    onClick: this.handleButtonClick
                }, this.renderText())
            }, n.render = function () {
                return h.a.createElement(s.a, {
                    className: "UpsellModalUpgradeButton",
                    onClick: this.context.inlineCheckout ? null : this.props.onClick
                }, this.context.inlineCheckout ? this.renderButton() : this.renderLink())
            }, r
        }(h.a.Component);
        _.contextTypes = {
            inlineCheckout: d.a.bool,
            inlineCheckoutStart: d.a.func,
            inlineCheckoutState: d.a.string,
            productType: d.a.number
        }, _.defaultProps = {
            monthlyPrice: Object(m.m)(),
            price: Object(m.n)(),
            shouldOpenNewTab: !0,
            shouldShowFreeTrial: !1,
            showMonthlyPricing: !1
        }
    }, rTRU: function (e, t, r) {
        "use strict";
        r("sMBO"), t.__esModule = !0, t.readState = t.saveState = void 0;
        var n, a = r("2W6z");
        (n = a) && n.__esModule;
        var o = {QuotaExceededError: !0, QUOTA_EXCEEDED_ERR: !0}, i = {SecurityError: !0}, s = function (e) {
            return "@@History/" + e
        };
        t.saveState = function (e, t) {
            if (window.sessionStorage) try {
                null == t ? window.sessionStorage.removeItem(s(e)) : window.sessionStorage.setItem(s(e), JSON.stringify(t))
            } catch (r) {
                if (i[r.name]) return;
                if (o[r.name] && 0 === window.sessionStorage.length) return;
                throw r
            }
        }, t.readState = function (e) {
            var t = void 0;
            try {
                t = window.sessionStorage.getItem(s(e))
            } catch (r) {
                if (i[r.name]) return
            }
            if (t) try {
                return JSON.parse(t)
            } catch (r) {
            }
        }
    }, ugal: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return p
        }));
        r("DQNa"), r("zKZe"), r("07d7"), r("SuFq"), r("JfAA");
        var n = r("8OQS"), a = r.n(n), o = (r("a1gu"), r("Nsbk"), r("VbXa")), i = r.n(o), s = r("q1tI"), c = r.n(s),
            l = r("TSYQ"), u = r.n(l), d = r("a08m");
        var p = function (e) {
            i()(r, e);
            var t;
            t = r;

            function r() {
                return e.apply(this, arguments) || this
            }

            return r.prototype.render = function () {
                var e, t = this.props, r = t.children, n = t.variant, o = a()(t, ["children", "variant"]),
                    i = u()("UIMenuItem", ((e = {})["UIMenuItem--" + n] = void 0 !== n && "none" !== n, e));
                return c.a.createElement("span", {className: i}, c.a.createElement(d.a, o, c.a.createElement("span", {className: "UIMenuItem-inner"}, r)))
            }, r
        }(c.a.PureComponent);
        p.defaultProps = Object.assign({}, d.a.defaultProps)
    }, xvNY: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return n
        })), r.d(t, "g", (function () {
            return c
        })), r.d(t, "u", (function () {
            return l
        })), r.d(t, "r", (function () {
            return u
        })), r.d(t, "f", (function () {
            return d
        })), r.d(t, "o", (function () {
            return p
        })), r.d(t, "i", (function () {
            return h
        })), r.d(t, "w", (function () {
            return m
        })), r.d(t, "l", (function () {
            return f
        })), r.d(t, "k", (function () {
            return _
        })), r.d(t, "s", (function () {
            return g
        })), r.d(t, "t", (function () {
            return v
        })), r.d(t, "p", (function () {
            return y
        })), r.d(t, "h", (function () {
            return C
        })), r.d(t, "m", (function () {
            return b
        })), r.d(t, "n", (function () {
            return S
        })), r.d(t, "q", (function () {
            return E
        })), r.d(t, "d", (function () {
            return k
        })), r.d(t, "b", (function () {
            return O
        })), r.d(t, "v", (function () {
            return P
        })), r.d(t, "e", (function () {
            return w
        })), r.d(t, "j", (function () {
            return A
        })), r.d(t, "c", (function () {
            return T
        }));
        r("sMBO"), r("toAj"), r("zKZe");
        var n, a = r("9WHe"), o = r("og3H"), i = r("ctRD");
        !function (e) {
            e.PRODUCT = "product", e.PRODUCT_GROUP = "product_group"
        }(n || (n = {}));
        var s = function (e) {
            var t = window;
            t.dataLayer && t.dataLayer.push(e)
        }, c = function () {
            s({event: "initiatecheckout"})
        }, l = function (e, t, r, n) {
            n ? function (e, t, r) {
                s({
                    event: "FreeTrial",
                    action: "Start",
                    value: Math.round(e),
                    valueFB: null == e ? void 0 : e.toFixed(2),
                    product: r,
                    currency: (t || "").toUpperCase(),
                    nonInteraction: !0
                })
            }(e, t, r) : function (e, t, r) {
                var n = {
                    action: "Complete",
                    valueFB: null == e ? void 0 : e.toFixed(2),
                    value: Math.round(e),
                    product: r,
                    currency: (t || "").toUpperCase(),
                    nonInteraction: !0
                };
                s(Object.assign({}, n, {event: "Purchase"})), s(Object.assign({}, n, {event: "Purchase " + r}))
            }(e, t, r)
        }, u = function (e) {
            s(e)
        }, d = function (e) {
            s(e)
        }, p = function (e) {
            s({event: "Search", search_term: e})
        }, h = function (e) {
            s(Object.assign({}, e, {event: "initiatecheckout"}))
        }, m = function (e) {
            s(Object.assign({event: "ViewContent"}, e))
        }, f = function (e) {
            var t = function (e) {
                switch (e) {
                    case o.B.PURCHASABLE_BUNDLE:
                        return "Prep Pack";
                    case o.B.FOLDER:
                    case o.B.SET:
                        return "Supplemental";
                    default:
                        return "Unknown"
                }
            }(e.modelType), r = {
                action: "Complete",
                content_type: e.content_type,
                product: t,
                valueFB: (e.priceValue / 100).toFixed(2),
                value: Math.round(e.priceValue / 100),
                content_name: e.title,
                content_ids: e.content_ids,
                currency: (e.priceCurrency || "").toUpperCase()
            };
            s(Object.assign({}, r, {event: "Purchase"})), s(Object.assign({}, r, {event: "Purchase " + t}))
        }, _ = function (e) {
            s(Object.assign({event: "ViewContent"}, e))
        }, g = function (e) {
            s({event: "study-set-create", studySetSource: e})
        }, v = function (e) {
            s({event: "study-set-publish", studySetSource: e})
        }, y = function (e) {
            s({event: "product-impressions", ecommerce: {currencyCode: "USD", impressions: e}})
        }, C = function (e, t) {
            s({event: "product-impressions", ecommerce: {currencyCode: t, impressions: e}})
        }, b = function (e) {
            var t = {
                event: "product-impressions",
                ecommerce: {currencyCode: e.currentCode, impressions: e.impressions}
            };
            s(t)
        }, S = function (e) {
            var t = {
                event: "product-click",
                ecommerce: {
                    currencyCode: e.currentCode,
                    click: {actionField: {list: "categories"}, products: e.productClick[0]}
                }
            };
            s(t)
        }, E = function (e) {
            var t = {
                event: "product-click",
                ecommerce: {
                    currencyCode: e.currentCode,
                    click: {actionField: {list: "search results"}, products: [e.productClick[0]]}
                }
            };
            s(t)
        }, k = function (e) {
            var t = {
                event: "add-to-cart",
                ecommerce: {
                    currencyCode: e.currentCode,
                    add: {actionField: {list: "categories"}, products: [e.products[0]]}
                }
            };
            s(t)
        }, O = function (e, t) {
            return t.impressionGo && t.impressionGo[0] && e === t.impressionGo[0].id ? t.impressionGo[0] : t.impressionPlus && t.impressionPlus[0] && e === t.impressionPlus[0].id ? t.impressionPlus[0] : void 0
        }, P = function (e) {
            try {
                var t = {name: e.name, id: e.id, price: e.price, brand: e.brand, category: e.category, quantity: "1"};
                k({products: [t], currentCode: "usd"})
            } catch (r) {
                a.a.error("Unable to track GA event", {e: r})
            }
        }, w = function () {
            s({event: "after-login"})
        }, A = function () {
            i.f()
        }, T = function () {
            i.e()
        }
    }, ySsn: function (e, t, r) {
        "use strict";
        QWait("Quizlet.Common.i18n", (function () {
            r.r(t);
            r("07d7"), r("5s+n");
            var e = r("pVnL"), n = r.n(e), a = r("o0o1"), o = r.n(a), i = (r("ls82"), r("yXPU")), s = r.n(i),
                c = r("q1tI"), l = r.n(c), u = r("Vg22"), d = r("xhj2"), p = (r("zKZe"), r("pn57")), h = r("XUBu"),
                m = r("ETT7"),
                f = (r("QWBl"), r("2B1R"), r("DQNa"), r("wLYn"), r("SuFq"), r("JfAA"), r("FZtP"), r("8OQS")),
                _ = r.n(f), g = (r("a1gu"), r("Nsbk"), r("VbXa")), v = r.n(g), y = r("og3H"), C = r("M3Qh"),
                b = r("08um"), S = r("l6OD"), E = r("EFuM"), k = r("ApwE"), O = r("932g"), P = r("fdo3"), w = r("xvNY"),
                A = r("mr8R"), T = Object(A.a)((function () {
                    return Promise.all([r.e(0), r.e(23)]).then(r.bind(null, "KWko"))
                })), M = Object(A.a)((function () {
                    return Promise.all([r.e(0), r.e(24)]).then(r.bind(null, "z8WE"))
                })), U = r("TSYQ"), I = r.n(U), L = Object(A.a)((function () {
                    return Promise.all([r.e(0), r.e(47)]).then(r.bind(null, "6xDS"))
                })), N = r("xNal"), D = r("sfiu"), F = Object(A.a)((function () {
                    return Promise.all([r.e(0), r.e(50)]).then(r.bind(null, "c+GJ"))
                })), R = r("+IfW"), j = r("C6mj"), x = r("5JEQ"), B = r("jytc"), H = r("QR21"), W = r("3XR0");
            var z = r("YleJ"), V = Object(A.a)((function () {
                return Promise.all([r.e(3), r.e(0), r.e(78)]).then(r.bind(null, "gTWh"))
            })), G = Object(A.a)((function () {
                return r.e(79).then(r.bind(null, "2UVi"))
            })), q = r("T3U7"), Q = r("Bm/d"), Y = r("mahw"), J = (r("+2oP"), r("JYcJ")), K = r("WDAW");
            var X = function (e) {
                v()(r, e);
                var t;
                t = r;

                function r() {
                    return e.apply(this, arguments) || this
                }

                var n = r.prototype;
                return n.componentDidMount = function () {
                    var e = this.props.id;
                    Object(j.b)() || Object(K.a)().then((function (t) {
                        t.displayOutOfPageAd(e)
                    }))
                }, n.render = function () {
                    return l.a.createElement("div", {id: Object(b.b)(this.props.id)})
                }, r
            }(c.Component), Z = function () {
                var e = Object(c.useState)(0), t = e[0], r = e[1];
                Object(c.useEffect)((function () {
                    Object(j.b)() || Object(K.a)().then((function (e) {
                        r(e.getOutOfPageAdsSlotsNumber())
                    }))
                }), []);
                var n = [l.a.createElement(X, {
                    id: J.OUT_OF_PAGE_1,
                    key: J.OUT_OF_PAGE_1
                }), l.a.createElement(X, {
                    id: J.OUT_OF_PAGE_2,
                    key: J.OUT_OF_PAGE_2
                }), l.a.createElement(X, {id: J.OUT_OF_PAGE_3, key: J.OUT_OF_PAGE_3})];
                return l.a.createElement(l.a.Fragment, null, n.slice(0, t))
            }, $ = Object(A.a)((function () {
                return r.e(87).then(r.bind(null, "QdQ/"))
            })), ee = Object(A.a)((function () {
                return r.e(88).then(r.bind(null, "iFkk"))
            })), te = Object(A.a)((function () {
                return r.e(89).then(r.bind(null, "uJvi"))
            })), re = r("6MTt"), ne = r("zK28"), ae = r("t1Ez"), oe = r("JxFz"), ie = r("a08m"), se = r("bBvF").default;

            function ce(e) {
                var t = e.onClickSignIn, r = e.onClickSignUp;
                return l.a.createElement("div", {className: "SiteHeader-signIn"}, l.a.createElement(ie.a, {
                    key: "mobileSignInLink",
                    onClick: t,
                    variant: "inverted"
                }, l.a.createElement("span", {className: "SiteHeader-signInBtn"}, l.a.createElement(ae.a, {_precomputed: se("en-US", "Log in", {}, "global.header.log_in.button")}))), l.a.createElement(oe.a, {
                    "aria-label": se("en-US", "Sign up", {}, "global.header.sign_up.button"),
                    onClick: r
                }, l.a.createElement(ae.a, {_precomputed: se("en-US", "Sign up", {}, "global.header.sign_up.button")})))
            }

            var le = r("O97I"), ue = Object(A.a)((function () {
                    return r.e(144).then(r.bind(null, "N/cs"))
                })), de = Object(A.a)((function () {
                    return Promise.all([r.e(0), r.e(145)]).then(r.bind(null, "Q+on"))
                })), pe = (r("ma9I"), r("rfz2")), he = r("jvKz"), me = r("vzun"), fe = r("Pxp3"), _e = r("Y2nb"),
                ge = r("bBvF").default;
            var ve = function (e) {
                    v()(r, e);
                    var t;
                    t = r;

                    function r() {
                        for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(n)) || this).state = {tooltipVisible: t.props.shouldShowChicletTooltip}, t.getTooltipText = function () {
                            return t.isTeacherUser() ? l.a.createElement(ae.a, {_precomputed: ge("en-US", "Get Teacher superpowers.<br /> Try it for free.", {}, "header_chiclet.tooltip.teacher")}) : l.a.createElement(ae.a, {_precomputed: ge("en-US", "Get more out of your studying.<br />Try it for free.", {}, "header_chiclet.tooltip.student")})
                        }, t.handleClick = function (e) {
                            return function () {
                                var r, n = t.state.tooltipVisible;
                                n && (t.setState({tooltipVisible: !n}), _e.a.writeData(((r = {}).headerLastChicletTooltipShowTimestampInSecondsV2 = (new Date).getTime() / 1e3, r)));
                                t.props.isHeaderChicletForAutoRenewal && Object(q.a)("auto_renewal_chiclet_click"), window.location.assign(e)
                            }
                        }, t.isTeacherUser = function () {
                            return ne.a.user && ne.a.user.selfIdentifiedTeacherStatus === y.jb.TEACHER
                        }, t.tooltip = l.a.createRef(), t
                    }

                    return r.prototype.render = function () {
                        var e = this.props, t = e.isSearchExpanded, r = e.text, n = e.url, a = this.state.tooltipVisible,
                            o = I()("SiteHeaderChiclet", {"SiteHeaderChiclet--mWeb": this.props.isUpgradeChicletEnabled});
                        return l.a.createElement(he.a, {
                            className: "SiteHeaderChiclet-tooltip",
                            overlay: l.a.createElement(me.a, {variant: "micro"}, l.a.createElement(fe.a, {onClick: this.handleClick("/upgrade?source=header_chiclet_tooltip")}, this.getTooltipText())),
                            position: "bottom",
                            triggerAction: a && !t ? "always" : "never"
                        }, l.a.createElement(ie.a, {
                            onClick: this.handleClick(n),
                            variant: "inverted"
                        }, l.a.createElement("span", {className: o}, l.a.createElement(pe.a, {dangerouslySetInnerHTML: {__html: r}}))))
                    }, r
                }(c.PureComponent), ye = r("PHlw"), Ce = r("FdmV"), be = Object(Ce.a)("setPage", {isSearchExpanded: ye.d}),
                Se = Object(u.connect)(be)(ve), Ee = r("LszE"), ke = Object(A.a)((function () {
                    return Promise.all([r.e(0), r.e(150)]).then(r.bind(null, "cSCi"))
                })), Oe = r("VPSI"), Pe = r("nXOR"), we = r("8WOz"), Ae = r("bvRJ"), Te = r("ugal"), Me = r("FJLI"),
                Ue = r("1q5m"), Ie = r("FFEN"), Le = r("KAy6"), Ne = r("LODH"), De = r("bBvF").default;
            var Fe = Object(u.connect)(null, (function (e) {
                return {
                    actions: Object(p.bindActionCreators)({
                        updateIsWatchWallOpen: m.h,
                        finishedWatchWallVideo: m.e
                    }, e)
                }
            }))((function (e) {
                var t = Object(c.useState)(e.shouldPlayVideo || !1), r = t[0], n = t[1],
                    a = Object(c.useState)(e.hasVideoStartedPlaying || !1), o = a[0], i = a[1],
                    s = Object(c.useState)(e.hasAdStarted || !1), u = s[0], d = s[1];
                Object(c.useEffect)((function () {
                    return Object(q.a)("watch_wall_video_modal_opened")
                }), []);
                var p = Object(b.g)("watch_wall_video_modal_upgrade_clicked"),
                    h = Object(Le.renderToStaticMarkup)(l.a.createElement(ae.a, {_precomputed: De("en-US", "upgrade", {}, "watch_wall.upgrade")})),
                    m = '<a class="UILink" href="' + p + '" target="_blank">' + h + "</a>", f = function () {
                        Object(q.a)("watch_wall_video_started"), n(!0), o || i(!0)
                    }, _ = function () {
                        e.actions.updateIsWatchWallOpen(!1), Object(q.a)("watch_wall_video_modal_closed")
                    };
                return l.a.createElement("div", {className: "WatchWall"}, l.a.createElement("div", {className: "WatchWall-header"}, l.a.createElement(Ie.a, {
                    deprecatedStyle: !0,
                    size: 4
                }, l.a.createElement(ae.a, {_precomputed: De("en-US", "Watch this short video for an ad-free experience", {}, "watch_wall.header_message")})), l.a.createElement("div", {
                    className: "WatchWall-closeIcon",
                    onClick: function () {
                        return _()
                    },
                    onKeyDown: function () {
                        return _()
                    }
                }, l.a.createElement(Ae.a, {
                    icon: "x-thin",
                    size: "medium"
                }))), l.a.createElement("div", {className: "WatchWall-videoContainer"}, l.a.createElement(Ne.a, {
                    controlOptions: {
                        playbackButton: !1,
                        remainingTime: !0,
                        volumeButton: !1
                    },
                    id: J.WATCH_WALL_VIDEO,
                    maxRepeats: 1,
                    onAdClick: function () {
                        Object(q.a)("watch_wall_video_clicked")
                    },
                    onAdStarted: function (e) {
                        Object(q.a)("watch_wall_video_loaded"), d(e)
                    },
                    onError: function () {
                        e.actions.updateIsWatchWallOpen(!1), window.open(p, "_blank")
                    },
                    onPlayerVisibilityChange: function (e) {
                        if (!o) return !1;
                        r && !e && n(!1), !r && e && n(!0)
                    },
                    onVideoAdFinished: e.actions.finishedWatchWallVideo,
                    shouldPlayVideo: r,
                    startMuted: !1,
                    startPaused: !0
                })), l.a.createElement("div", {className: "WatchWall-upgradeLink"}, l.a.createElement(Ie.a, {
                    deprecatedStyle: !0,
                    size: 5
                }, l.a.createElement(ae.a, {_precomputed: De("en-US", "Or {upgradeLink} to remove ads", {upgradeLink: m}, "watch_wall.upgrade_message")}))), !r && u ? l.a.createElement("div", {
                    className: "WatchWall-videoPlayButton",
                    onClick: f,
                    onKeyDown: f
                }, l.a.createElement(Ae.a, {icon: "play", size: "large"})) : null)
            })), Re = r("bBvF").default;
            var je = function (e) {
                v()(r, e);
                var t;
                t = r;

                function r(t) {
                    var r;
                    (r = e.call(this, t) || this).handleSubmitSearch = function (e) {
                        e.preventDefault(), Object(Oe.a)({
                            searchAction: r.getSearchActionWithSlash(),
                            searchInput: r.state.query
                        })
                    }, r.handleClickSearchLink = function () {
                        r.expandSearch()
                    }, r.handleSignUpHeader = function (e) {
                        return function () {
                            r.handleOpenSignupModal({signupOrigin: e, screenName: ne.a.actionString})
                        }
                    }, r.handleCollapseSearch = function () {
                        r.collapseSearch()
                    }, r.handleLogoutClick = function (e) {
                        e.preventDefault(), Object(w.c)(), Object(P.c)("/logout")
                    }, r.handleOpenLoginModal = function (e) {
                        void 0 === e && (e = {}), r.setState({
                            isLoginModalOpen: !0,
                            isSignupModalOpen: !1,
                            isMagicLinkModalOpen: !1,
                            loginFormProps: e
                        })
                    }, r.handleCloseLoginModal = function () {
                        r.setState({isLoginModalOpen: !1}, (function () {
                            r.state.loginFormProps && r.state.loginFormProps.onCloseLogin && r.state.loginFormProps.onCloseLogin(), r.handleSignupPropsOnClose()
                        }))
                    }, r.handleOpenSignupModal = function (e, t) {
                        var n, a, o, i = e.couponCode, s = e.signupOrigin, c = void 0 === s ? "global-header-link" : s,
                            l = e.screenName;
                        Object(q.a)("open_signup_modal", {signupOrigin: c}), n = y.i.SIGNUP_FORM_OPENED, a = {
                            auth_origin: c,
                            screen_name: l
                        }, o = Object.assign({
                            action: n,
                            app_session_id: Object(W.b)()
                        }, a), Object(H.a)("auth_events", o, {includeUserDetails: !0}), r.setState({
                            couponCode: i,
                            isLoginModalOpen: !1,
                            isSignupModalOpen: !0,
                            isMagicLinkModalOpen: !1,
                            signupOrigin: c,
                            signupProps: t
                        })
                    }, r.handleSignupPropsOnClose = function () {
                        var e, t = r.state.signupProps;
                        (null == t || null === (e = t.actions) || void 0 === e ? void 0 : e.onClose) && t.actions.onClose()
                    }, r.handleCloseSignupModal = function () {
                        r.setState({isSignupModalOpen: !1}), r.handleSignupPropsOnClose()
                    }, r.handleOpenContactUsModal = function () {
                        r.setState({isContactUsModalOpen: !0})
                    }, r.handleCloseContactUsModal = function () {
                        r.setState({isContactUsModalOpen: !1})
                    }, r.handleHeaderLogoOnClick = function () {
                        r.logHeaderActions("header_quizlet_logo_click"), Object(w.j)()
                    }, r.handleUserSectionOverlayTriggerBeforeOpen = function () {
                        r.logHeaderActions("header_user_name_click"), r.props.userDropdownData.accountLinks.forEach((function (e) {
                            "/refer-a-friend" === e.url && r.logHeaderActions("global_dropdown_menu_referrals_cta_seen")
                        }))
                    }, r.handleClosePartnerUpgradeRedemptionModal = function () {
                        r.setState({isPartnerUpgradeRedemptionModalOpen: !1})
                    }, r.handleClosePartnerCurrentMobileSubscriberModal = function () {
                        r.setState({isPartnerCurrentMobileSubscriberModalOpen: !1})
                    }, r.handleOpenDisableAdBlockerModal = function () {
                        r.setState({isDisableAdBlockerModalOpen: !0}, (function () {
                            Object(q.a)("disable_ad_blocker_modal_opened"), N.c.write("abmcc", "1", {duration: 1})
                        }))
                    }, r.handleCloseDisableAdBlockerModal = function (e) {
                        r.setState({isDisableAdBlockerModalOpen: !1}, (function () {
                            Object(q.a)("disable_ad_blocker_modal_closed", e)
                        }))
                    }, r.handleOpenMagicLinkModal = function () {
                        r.setState({isMagicLinkModalOpen: !0, isLoginModalOpen: !1, isSignupModalOpen: !1})
                    }, r.handleCloseMagicLinkModal = function () {
                        r.setState({isMagicLinkModalOpen: !1})
                    }, r.handleClickBrowseLink = function () {
                        r.props.actions.updateIsSiteBrowseNavOpen(!r.props.isBrowseNavOpen)
                    }, r.handleExplicitExitCancelClick = function () {
                        Object(q.a)("explicit_exit_cancel_click")
                    }, r.handleOpenStudyPlannerWaitlistModal = function () {
                        Object(q.a)("study_planner_waitlist_modal_open"), r.setState({isStudyPlannerWaitlistModalOpen: !0})
                    }, r.handleCloseStudyPlannerWaitlistModal = function () {
                        r.setState({isStudyPlannerWaitlistModalOpen: !1}, (function () {
                            Object(q.a)("study_planner_waitlist_modal_close")
                        }))
                    }, r.handleOpenLoginWithAmazonModal = function () {
                        Object(q.a)("amazon_promo_lwa_modal_open"), r.setState({isLoginWithAmazonModalOpen: !0})
                    }, r.handleCloseLoginWithAmazonModal = function () {
                        r.setState({isLoginWithAmazonModalOpen: !1}, (function () {
                            Object(q.a)("amazon_promo_lwa_modal_close")
                        }))
                    }, r.handleCloseParentUpsellModal = function () {
                        r.setState({isParentUpsellModalOpen: !1}, (function () {
                            Object(q.a)("parent_upsell_modal_close"), _e.a.writeData({parentUpsellModalDismissed: !0})
                        }))
                    }, r.shouldSeeWatchWallAdzFreeExpiredModal = function () {
                        var e = N.c.read(y.l.HAS_ADS_FREE_EXPERIENCE), t = "true" === Object(b.f)();
                        return t && r.isUpgradedUser() && r.cleanUpWatchWallExperiment(), t && !e && !r.props.hasFinishedWatchWallExperiment && r.props.shouldShowWatchWall
                    }, r.shouldShowBrowseLink = function () {
                        return Object(x.a)()
                    }, r.isUpgradedUser = function () {
                        return !!r.props.user && r.props.user.type !== y.Ob.NO_UPGRADE
                    }, r.localStorageHelper = new B.a;
                    var n = t.signupFormData && t.signupFormData.signupOrigin || "global-header-link";
                    return r.state = {
                        couponCode: void 0,
                        isContactUsModalOpen: t.isHelpCenter && "#send-feedback" === window.location.hash,
                        isDisableAdBlockerModalOpen: !1,
                        isLoginModalOpen: !!t.loginFormData,
                        isLoginWithAmazonModalOpen: t.initialIsLoginWithAmazonModalOpen,
                        isParentUpsellModalOpen: t.shouldShowParentUpsellModal,
                        isPartnerCurrentMobileSubscriberModalOpen: t.initialIsPartnerCurrentMobileSubscriberModalOpen,
                        isPartnerUpgradeRedemptionModalOpen: !!t.partnerUpgradeRedemptionModalData,
                        isSearchExpanded: t.initialIsSearchExpanded,
                        isSignupModalOpen: !!t.signupFormData,
                        isStudyPlannerWaitlistModalOpen: !1,
                        isMagicLinkModalOpen: !1,
                        loginFormProps: {
                            onCloseLogin: function () {
                            }
                        },
                        query: t.initialQuery,
                        signupOrigin: n,
                        shouldRenderDisableAdBlockerModal: !1,
                        signupProps: void 0
                    }, r
                }

                var a = r.prototype;
                return a.componentDidMount = function () {
                    Object(k.f)(k.b.TIME_TO_HEADER_INTERACTIVE), this.props.hasRegisteredAds && this.updateShouldRenderDisableAdBlockerModal()
                }, a.componentWillUnmount = function () {
                    clearTimeout(this._focusTimeout)
                }, a.getSearchActionWithSlash = function () {
                    return this.props.searchAction + "/"
                }, a.onKeyDown = function (e) {
                    "Escape" === e.key && this.collapseSearch()
                }, a.onChangeSearch = function (e) {
                    this.setState({query: e.target.value})
                }, a.handleCreateLink = function () {
                    Object(w.s)("header-create-set"), Object(z.a)("header_create")
                }, a.renderSearchInput = function () {
                    var e = this;
                    return l.a.createElement("div", {
                        className: "SiteHeader-searchFormWrapper",
                        key: "searchForm"
                    }, l.a.createElement("form", {
                        action: this.getSearchActionWithSlash(),
                        className: "SiteHeader-searchForm searchForm",
                        onSubmit: this.handleSubmitSearch,
                        role: "search"
                    }, l.a.createElement(Ae.a, {
                        className: "SiteHeader-searchFormSubmitIcon SiteHeader-icon",
                        icon: "search",
                        size: "large"
                    }), l.a.createElement("div", {className: "SiteHeader-searchInput"}, l.a.createElement("input", {
                        autoComplete: "off",
                        autoFocus: "" === this.state.query,
                        className: "SiteHeader-searchInputBox",
                        onBlur: this.handleCollapseSearch,
                        onChange: this.onChangeSearch.bind(this),
                        onKeyDown: this.onKeyDown.bind(this),
                        placeholder: Re("en-US", "Search", {}, "global.header.search.input_placeholder"),
                        ref: function (t) {
                            e.searchInputRef = t
                        },
                        type: "text",
                        value: this.state.query
                    })), l.a.createElement("div", {className: "SiteHeader-searchInputClose"}, l.a.createElement("button", {
                        className: "SiteHeader-searchInputCloseButton",
                        onClick: this.handleCollapseSearch,
                        type: "button"
                    }, l.a.createElement(Ae.a, {
                        className: "SiteHeader-searchInputCloseIcon SiteHeader-icon",
                        icon: "x",
                        size: "medium"
                    })))))
                }, a.renderSearchLink = function () {
                    return l.a.createElement("div", {
                        className: "SiteHeader-search SiteHeader-section",
                        key: "searchLink"
                    }, l.a.createElement(ie.a, {
                        onClick: this.handleClickSearchLink,
                        variant: "inverted"
                    }, l.a.createElement("div", {className: "SiteHeader-searchInner"}, l.a.createElement(Ae.a, {
                        className: "SiteHeader-searchSubmitIcon SiteHeader-icon",
                        icon: "search",
                        size: "large"
                    }), l.a.createElement("span", {className: "SiteHeader-linkText"}, Re("en-US", "Search", {}, "global.header.search.button")))))
                }, a.renderCreateLink = function () {
                    return l.a.createElement("div", {
                        className: "SiteHeader-create SiteHeader-section",
                        key: "createLink"
                    }, l.a.createElement(ie.a, {
                        onClick: this.handleCreateLink,
                        to: this.props.createSetPath,
                        variant: "inverted"
                    }, l.a.createElement("div", {className: "SiteHeader-createInner"}, l.a.createElement(Ae.a, {
                        className: "SiteHeader-createIcon SiteHeader-icon",
                        icon: "create-set",
                        size: "large"
                    }), l.a.createElement("span", {className: "SiteHeader-linkText"}, Re("en-US", "Create", {}, "global.header.create.button")))))
                }, a.renderBrowseLink = function () {
                    return this.shouldShowBrowseLink() ? l.a.createElement("div", {className: "SiteHeader-browse SiteHeader-section"}, l.a.createElement(ie.a, {
                        onClick: this.handleClickBrowseLink,
                        variant: "inverted"
                    }, l.a.createElement("div", {className: "SiteHeader-browseInner"}, l.a.createElement(Ae.a, {
                        className: "SiteHeader-browseIcon SiteHeader-icon",
                        icon: "subjects",
                        size: "large"
                    }), l.a.createElement("span", {className: "SiteHeader-linkText"}, Re("en-US", "Browse", {}, "global.header.browse.button"))))) : null
                }, a.renderHeaderChiclet = function (e) {
                    var t = I()(["SiteHeader-chiclet", {"SiteHeader-mobileLinkArea": e}]);
                    return l.a.createElement("div", {className: t}, l.a.createElement(Se, {
                        isHeaderChicletForAutoRenewal: this.props.isHeaderChicletForAutoRenewal,
                        isUpgradeChicletEnabled: e,
                        shouldShowChicletTooltip: this.props.shouldShowChicletTooltip,
                        text: e ? Re("en-US", "Upgrade", {}, "global.header.upgrade") : this.props.headerChicletData[0],
                        url: this.props.headerChicletData[1]
                    }))
                }, a.renderLogoutLink = function () {
                    return l.a.createElement("span", {className: "SiteHeader-logoutLink"}, l.a.createElement(Te.a, {onClick: this.handleLogoutClick}, Re("en-US", "Log Out", {}, "userinfo_header.settings_dropdown.logout_link")))
                }, a.renderVOLinks = function () {
                    var e = this.buildHelpLinks().length > 0 ? this.buildHelpLinks()[0].url : "/help";
                    return l.a.createElement("div", {className: "SiteHeader-VOLinks"}, this.props.user && l.a.createElement("span", {className: "SiteHeader-username"}, "username: " + this.props.user.username), l.a.createElement(ie.a, {onClick: this.handleLogoutClick}, l.a.createElement(ae.a, {_precomputed: Re("en-US", "Log Out", {}, "userinfo_header.settings_dropdown.logout_link")})), l.a.createElement(ie.a, {
                        role: "button",
                        to: e
                    }, l.a.createElement(ae.a, {_precomputed: Re("en-US", "Help Center", {}, "userinfo_header.settings_dropdown.faq_link")})))
                }, a.renderSectionLinks = function (e) {
                    return e.map((function (e, t) {
                        var r = e.url, n = e.attrs, a = void 0 === n ? {} : n, o = e.text,
                            i = "link-" + t + "-" + (a.source ? a.source : r), s = function () {
                                a.log && Object(q.a)(a.log.actionName)
                            };
                        return a.icon || a.badgeText ? l.a.createElement(Y.a, {
                            badgeColor: "yellow",
                            badgeText: a.badgeText,
                            icon: a.icon,
                            iconPosition: "right",
                            key: i,
                            onClick: s,
                            source: a.source,
                            text: o,
                            to: r
                        }) : l.a.createElement(Te.a, {key: i, onClick: s, source: a.source, to: r}, o)
                    }))
                }, a.renderUserDropdownContent = function () {
                    var e = this.props.userDropdownData, t = e.upgradeLinks, r = e.accountLinks,
                        n = l.a.createElement("div", {
                            className: "SiteHeader-userDropdownOptionSection",
                            key: "upgradeLinks"
                        }, this.renderSectionLinks(t));
                    return l.a.createElement("div", {className: "SiteHeader-userDropdown"}, l.a.createElement("div", {
                        className: "SiteHeader-userDropdownOptionSection",
                        key: "accountLinks"
                    }, this.renderSectionLinks(r), this.renderLogoutLink()), l.a.createElement("div", {
                        className: "SiteHeader-userDropdownOptionSection",
                        key: "sectionLinks"
                    }, this.renderSectionLinks(this.buildHelpLinks())), t.length > 0 ? n : null)
                }, a.renderUsername = function (e) {
                    return l.a.createElement("div", {
                        className: "SiteHeader-userInfo",
                        key: "userInfo"
                    }, l.a.createElement(ie.a, {
                        ariaHidden: !0,
                        role: "contentinfo",
                        tabIndex: "-1",
                        to: "#",
                        variant: "inverted"
                    }, l.a.createElement("span", {className: "SiteHeader-avatar"}, l.a.createElement(Ue.a, {
                        size: 32,
                        user: e
                    })), l.a.createElement("span", {className: "SiteHeader-username"}, Object(R.a)(e.username, 10)), l.a.createElement(Ae.a, {
                        className: "SiteHeader-userDropdownIcon",
                        icon: "dropdown",
                        size: "small"
                    })))
                }, a.renderUserSection = function () {
                    if (this.props.shouldShowExplicitExit) return this.renderExplicitExit();
                    var e = this.props.user,
                        t = I()(["SiteHeader-userSection", "SiteHeader-section", {"SiteHeader-userSection--browseLinks": this.shouldShowBrowseLink()}]);
                    if (!e) return l.a.createElement("div", {className: t}, this.renderSignInLink());
                    var r = l.a.createElement(Me.a, {includeArrowInBounds: !1}, this.renderUserDropdownContent());
                    return l.a.createElement("div", {
                        className: t,
                        key: "userSection"
                    }, this.props.headerChicletData && !this.props.shouldHideChicletDueToActivePromo ? this.renderHeaderChiclet(!1) : null, l.a.createElement(he.a, {
                        beforeOpen: this.handleUserSectionOverlayTriggerBeforeOpen,
                        className: "SiteHeader-userDropdownOverlayTrigger",
                        constrainToWindow: !1,
                        overlay: r,
                        position: "bottom right",
                        triggerAction: "click"
                    }, this.renderUsername(e)), this.renderVOLinks())
                }, a.renderSignInLink = function () {
                    return l.a.createElement(ce, {
                        onClickSignIn: this.handleOpenLoginModal,
                        onClickSignUp: this.handleSignUpHeader("global-header-link")
                    })
                }, a.renderSignupPromptModal = function () {
                    var e = this, t = this.props.signupFormData,
                        r = (null == t ? void 0 : t.redir) ? t.redir : window.location.href,
                        n = (null == t ? void 0 : t.header) ? t.header : null, a = this.state.signupProps || {},
                        o = a.header, i = a.includeCloseButton, s = a.preventCloseOnOverlayClick,
                        c = _()(a, ["header", "includeCloseButton", "preventCloseOnOverlayClick"]);
                    return l.a.createElement(le.a, {
                        actions: {
                            onClose: this.handleCloseSignupModal,
                            onOpenLogin: function () {
                                return e.handleOpenLoginModal(e.state.loginFormProps)
                            }
                        },
                        couponCode: this.state.couponCode,
                        header: o || n,
                        includeCloseButton: i,
                        isOpen: this.state.isSignupModalOpen,
                        marketingOptInEnabled: this.props.marketingOptInEnabled,
                        preventCloseOnOverlayClick: s,
                        redir: r,
                        signupFormData: t || c,
                        signupOrigin: this.state.signupOrigin
                    })
                }, a.renderLoginPromptModal = function () {
                    return l.a.createElement(V, n()({}, this.props.loginFormData || this.state.loginFormProps, {
                        isOpen: this.state.isLoginModalOpen,
                        onClose: this.handleCloseLoginModal,
                        onOpenMagicLink: this.handleOpenMagicLinkModal
                    }))
                }, a.renderMagicLinkPromptModal = function () {
                    return l.a.createElement(Q.a, n()({}, this.props.magicLinkFormData, {
                        isOpen: this.state.isMagicLinkModalOpen,
                        onClose: this.handleCloseMagicLinkModal
                    }))
                }, a.renderContactUsModal = function () {
                    return l.a.createElement(L, {
                        feedbackMinorCategoryId: this.props.feedbackMinorCategoryId,
                        isHelpCenter: this.props.isHelpCenter,
                        isOpen: this.state.isContactUsModalOpen,
                        onClose: this.handleCloseContactUsModal,
                        referer: this.props.referer,
                        user: this.props.user
                    })
                }, a.renderPartnerUpgradeRedemptionModal = function (e) {
                    var t = e.amount, r = e.expirationTimestamp, n = e.isExtension, a = e.userUpgradeType, o = e.wasGo,
                        i = e.willRenew, s = e.timeUnit;
                    return l.a.createElement(te, {
                        amount: t,
                        expirationTimestamp: r,
                        isExtension: n,
                        isOpen: this.state.isPartnerUpgradeRedemptionModalOpen,
                        onClose: this.handleClosePartnerUpgradeRedemptionModal,
                        timeUnit: s,
                        userUpgradeType: a,
                        wasGo: o,
                        willRenew: i
                    })
                }, a.renderPartnerCurrentMobileSubscriberModal = function (e) {
                    return l.a.createElement(ee, {
                        isOpen: this.state.isPartnerCurrentMobileSubscriberModalOpen,
                        onClose: this.handleClosePartnerCurrentMobileSubscriberModal,
                        userEmail: e.email
                    })
                }, a.renderDisableAdBlockerModal = function () {
                    return l.a.createElement(F, {
                        isOpen: this.state.isDisableAdBlockerModalOpen,
                        onClose: this.handleCloseDisableAdBlockerModal
                    })
                }, a.renderWatchWallAdzFreeModal = function () {
                    return l.a.createElement(M, {
                        isOpen: this.props.isAdFreeModalOpen,
                        onClose: this.props.actions.closeWatchWallAdFreeModal
                    })
                }, a.renderWatchWallAdzFreeExpiredModal = function () {
                    return l.a.createElement(T, {
                        isOpen: this.shouldSeeWatchWallAdzFreeExpiredModal(),
                        onClose: this.props.actions.finishedWatchWallExperiment
                    })
                }, a.renderStudyPlannerWaitlistModal = function () {
                    return l.a.createElement(ke, {
                        isOpen: this.state.isStudyPlannerWaitlistModalOpen,
                        onClose: this.handleCloseStudyPlannerWaitlistModal
                    })
                }, a.renderLoginWithAmazonModal = function () {
                    return l.a.createElement(G, {
                        isOpen: this.state.isLoginWithAmazonModalOpen,
                        onClose: this.handleCloseLoginWithAmazonModal
                    })
                }, a.renderParentUpsellModal = function () {
                    return l.a.createElement($, {
                        isOpen: this.state.isParentUpsellModalOpen,
                        onClose: this.handleCloseParentUpsellModal
                    })
                }, a.renderMobileBrowseNav = function () {
                    return this.shouldShowBrowseLink() ? l.a.createElement(de, {
                        closeMobileNav: this.props.actions.closeMobileNav,
                        isOpen: this.props.isBrowseNavOpen,
                        taxonomyItems: this.props.browseMenuData,
                        updateIsSiteBrowseNavOpen: this.props.actions.updateIsSiteBrowseNavOpen
                    }) : null
                }, a.renderDesktopBrowseNav = function () {
                    return this.shouldShowBrowseLink() ? l.a.createElement(ue, {
                        isOpen: this.props.isBrowseNavOpen,
                        taxonomyItems: this.props.browseMenuData,
                        updateIsSiteBrowseNavOpen: this.props.actions.updateIsSiteBrowseNavOpen
                    }) : null
                }, a.renderExplicitExit = function () {
                    var e = this.props.referer ? this.props.referer : "/latest",
                        t = this.props.shouldShowWhiteBackground ? "none" : "inverted";
                    return l.a.createElement("div", {className: "SiteHeader-cancel"}, l.a.createElement(ie.a, {
                        onClick: this.handleExplicitExitCancelClick,
                        to: e,
                        variant: t
                    }, l.a.createElement(Ae.a, {
                        icon: "system-x",
                        size: "large"
                    }), l.a.createElement("div", {className: "SiteHeader-cancelCopy"}, l.a.createElement(ae.a, {_precomputed: Re("en-US", "Cancel", {}, "global.header.checkout.cancel")}))))
                }, a.renderDefaultDesktopHeader = function () {
                    return this.shouldShowBrowseLink() ? this.renderDefaultDesktopHeaderWithBrowseLink() : l.a.createElement("div", {
                        className: "SiteHeader-defaultDesktop",
                        key: "defaultHeader"
                    }, this.renderSearchLink(), this.renderCreateLink(), this.renderUserSection())
                }, a.renderDefaultDesktopHeaderWithBrowseLink = function () {
                    return l.a.createElement("div", {
                        className: "SiteHeader-defaultDesktop",
                        key: "defaultHeader"
                    }, l.a.createElement("div", {className: "SiteHeader-linksSectionContainer"}, l.a.createElement("div", {className: "SiteHeader-linksSection"}, this.renderSearchLink(), this.renderBrowseLink(), this.renderCreateLink())), this.renderUserSection())
                }, a.renderDesktopHeader = function () {
                    return l.a.createElement("div", {className: "SiteHeader-wrapper"}, l.a.createElement("div", {className: "SiteHeader-logo SiteHeader-section"}, l.a.createElement(ie.a, {
                        onClick: this.handleHeaderLogoOnClick,
                        to: this.props.user ? "/latest" : "/",
                        variant: "inverted"
                    }, l.a.createElement(Ee.a, null))), l.a.createElement("div", {className: "SiteHeader-transitionGroupWrapper"}, l.a.createElement(D.a, {
                        className: "SiteHeader-searchTransitionGroup",
                        transitionName: "SiteHeader-searchInputTransition"
                    }, this.state.isSearchExpanded ? this.renderSearchInput() : null), l.a.createElement(D.a, {
                        className: "SiteHeader-headerItemsTransitionGroup",
                        transitionName: "SiteHeader-searchDefaultHeaderTransition"
                    }, this.state.isSearchExpanded ? null : this.renderDefaultDesktopHeader())))
                }, a.renderMobileLinks = function () {
                    var e = l.a.createElement("span", {
                            "aria-label": Re("en-US", "Create", {}, "global.header.create.button"),
                            className: "SiteHeader-mobileLinkArea SiteHeader-mobileCreate",
                            key: "mobileCreateLink"
                        }, l.a.createElement(ie.a, {
                            to: "/create-set",
                            variant: "inverted"
                        }, l.a.createElement(Ae.a, {className: "SiteHeader-icon", icon: "create-set", size: "large"}))),
                        t = l.a.createElement("span", {
                            "aria-label": Re("en-US", "Search", {}, "global.header.search.button"),
                            className: "SiteHeader-mobileLinkArea SiteHeader-mobileSearch",
                            key: "mobileSearchLink"
                        }, l.a.createElement(ie.a, {
                            onClick: this.handleClickSearchLink,
                            variant: "inverted"
                        }, l.a.createElement(Ae.a, {className: "SiteHeader-icon", icon: "search", size: "large"}))),
                        r = l.a.createElement("span", {
                            className: "SiteHeader-mobileLinkArea SiteHeader-mobileNav",
                            key: "mobileNavLink"
                        }, l.a.createElement(ie.a, {
                            onClick: this.props.actions.openMobileNav,
                            variant: "inverted"
                        }, l.a.createElement(Ae.a, {
                            className: "SiteHeader-icon",
                            icon: "list",
                            size: "large"
                        }), this.props.numClassInvitations > 0 ? l.a.createElement("div", {className: "SiteHeader-notification"}, this.props.numClassInvitations) : null));
                    return this.props.user ? [e, t, r] : t
                }, a.renderDefaultMobileHeader = function () {
                    var e = this;
                    return [l.a.createElement("div", {
                        className: "SiteHeader-logo SiteHeader-section",
                        key: "mobileLogo"
                    }, l.a.createElement(ie.a, {
                        onClick: this.handleHeaderLogoOnClick,
                        to: this.props.user ? "/latest" : "/",
                        variant: "inverted"
                    }, l.a.createElement(Pe.a, {above: "xs"}, (function (t) {
                        return t ? l.a.createElement(Ee.a, null) : l.a.createElement(Ee.a, {isQMark: e.shouldShowUpgradeChiclet()})
                    })))), l.a.createElement("div", {
                        className: "SiteHeader-defaultMobileHeader SiteHeader-section",
                        key: "actions"
                    }, this.props.headerChicletData && this.shouldShowUpgradeChiclet() ? this.renderHeaderChiclet(!0) : null, this.renderMobileLinks(), this.props.user ? null : this.renderSignInLink())]
                }, a.renderMobileHeader = function () {
                    return l.a.createElement("div", {className: "SiteHeader-wrapper"}, l.a.createElement(D.a, {
                        className: "SiteHeader-searchTransitionGroupMobile",
                        transitionName: "SiteHeader-searchInputTransition"
                    }, this.state.isSearchExpanded ? this.renderSearchInput() : null), l.a.createElement(D.a, {
                        className: "SiteHeader-headerItemsTransitionGroupMobile",
                        transitionName: "SiteHeader-searchDefaultHeaderTransition"
                    }, this.state.isSearchExpanded ? null : this.renderDefaultMobileHeader()))
                }, a.render = function () {
                    var e = !this.props.shouldShowExplicitExit, t = this.props.shouldShowExplicitExit ? "l" : void 0,
                        r = I()(["SiteHeader", {"is-whiteBackground": this.props.shouldShowWhiteBackground}]);
                    return l.a.createElement("header", {
                        className: r,
                        itemScope: !0,
                        itemType: "http://schema.org/WPHeader",
                        role: "banner"
                    }, l.a.createElement(we.a, {
                        isFullBleed: e,
                        maxWidth: t
                    }, l.a.createElement(Pe.a, {below: O.a}, this.renderMobileHeader(), this.renderMobileBrowseNav()), l.a.createElement(Pe.a, {above: O.a}, this.renderDesktopHeader(), this.renderDesktopBrowseNav())), this.props.user ? null : this.renderSignupPromptModal(), this.props.user ? null : this.renderLoginPromptModal(), this.props.user ? null : this.renderMagicLinkPromptModal(), this.props.feedbackMinorCategoryId ? this.renderContactUsModal() : null, this.props.partnerUpgradeRedemptionModalData ? this.renderPartnerUpgradeRedemptionModal(this.props.partnerUpgradeRedemptionModalData) : null, this.state.shouldRenderDisableAdBlockerModal ? this.renderDisableAdBlockerModal() : null, ne.a.user ? this.renderPartnerCurrentMobileSubscriberModal(ne.a.user) : null, this.props.isWatchWallOpen ? l.a.createElement(Fe, null) : null, this.props.isAdFreeModalOpen && this.props.shouldShowWatchWall ? this.renderWatchWallAdzFreeModal() : null, this.shouldSeeWatchWallAdzFreeExpiredModal() ? this.renderWatchWallAdzFreeExpiredModal() : null, this.shouldRenderStudyPlannerWaitlistModal() ? this.renderStudyPlannerWaitlistModal() : null, this.shouldRenderLoginWithAmazonModal() ? this.renderLoginWithAmazonModal() : null, this.shouldRenderParentUpsellModal() ? this.renderParentUpsellModal() : null, l.a.createElement(Z, null))
                }, a.updateShouldRenderDisableAdBlockerModal = function () {
                    var e = this;
                    this.shouldEnrollUserInAdBlockerModalTest() && ("experiment" === re.b.getVariationAndEnroll("DisableAdBlockerModal") && this.setState({shouldRenderDisableAdBlockerModal: !0}, (function () {
                        window.setTimeout((function () {
                            e.handleOpenDisableAdBlockerModal()
                        }), 3e3)
                    })))
                }, a.shouldRenderStudyPlannerWaitlistModal = function () {
                    return "/study-planner" === window.location.pathname
                }, a.shouldRenderLoginWithAmazonModal = function () {
                    return "/promo/amazon" === window.location.pathname
                }, a.shouldRenderParentUpsellModal = function () {
                    return "/latest" === window.location.pathname
                }, a.shouldShowUpgradeChiclet = function () {
                    return !(!this.props.user || this.props.shouldHideChicletDueToActivePromo) && (this.props.user.type === y.Ob.NO_UPGRADE && Object(S.f)())
                }, a.shouldEnrollUserInAdBlockerModalTest = function () {
                    return ne.a.LOGGED_IN && "us" === ne.a.countryCode && "en-us" === Object(C.a)() && Object(E.b)() && Object(j.b)() && null === N.c.read("abmcc")
                }, a.cleanUpWatchWallExperiment = function () {
                    this.localStorageHelper.setItem("has_seen_watch_wall_video_ad", ""), N.c.dispose(y.l.HAS_ADS_FREE_EXPERIENCE)
                }, a.logHeaderActions = function (e) {
                    Object(q.a)(e, {page: ne.a.actionString})
                }, a.expandSearch = function () {
                    var e = this;
                    this.setState({isSearchExpanded: !0}, (function () {
                        e._focusTimeout = window.setTimeout((function () {
                            e.searchInputRef && e.searchInputRef.focus()
                        }), 350)
                    })), this.props.actions.updateIsSearchExpanded(!0)
                }, a.collapseSearch = function () {
                    var e = this;
                    clearTimeout(this._focusTimeout), this.setState({isSearchExpanded: !1}), this._focusTimeout = window.setTimeout((function () {
                        e.props.actions.updateIsSearchExpanded(!1)
                    }), 350)
                }, a.buildHelpLinks = function () {
                    var e = {
                        userId: this.props.user ? this.props.user.id : null,
                        page: window.location.href,
                        pathname: window.location.pathname,
                        abTests: re.b.getAllEnrolledTestValueStrings()
                    }, t = btoa(JSON.stringify(e));
                    return this.props.userDropdownData.helpLinks.map((function (e) {
                        return Object.assign({}, e, {url: e.url + "?qinfo=" + t})
                    }))
                }, r
            }(c.PureComponent);
            je.defaultProps = {
                hasFinishedWatchWallExperiment: !1,
                hasRegisteredAds: !1,
                isAdFreeModalOpen: !1,
                isWatchWallOpen: !1,
                shouldShowWatchWall: !1,
                initialQuery: ""
            };
            var xe = Object(u.connectAdvanced)((function (e) {
                    return function (t, r) {
                        return Object.assign({}, (a = r, o = (n = t).get("siteNav"), i = n.get("core"), Object.assign({}, a, {
                            numClassInvitations: o.get("classInvitations").count(),
                            hasFinishedWatchWallExperiment: i.get("hasFinishedWatchWallExperiment"),
                            hasRegisteredAds: i.get("hasRegisteredAds"),
                            isWatchWallOpen: i.get("isWatchWallOpen"),
                            isAdFreeModalOpen: i.get("isAdFreeModalOpen"),
                            isBrowseNavOpen: i.get("isBrowseNavOpen"),
                            shouldShowWatchWall: i.get("shouldShowWatchWall")
                        })), {}, function (e) {
                            return {
                                actions: Object(p.bindActionCreators)({
                                    openMobileNav: h.f,
                                    closeMobileNav: h.b,
                                    closeWatchWallAdFreeModal: m.b,
                                    finishedWatchWallExperiment: m.d,
                                    updateIsSearchExpanded: m.f,
                                    updateIsSiteBrowseNavOpen: m.g
                                }, e)
                            }
                        }(e));
                        var n, a, o, i
                    }
                }), {forwardRef: !0})(je), Be = r("+Qzl"), He = r("cmFr"), We = r("WHvC"), ze = r("4K/9"), Ve = r("9WHe"),
                Ge = r("Ri2w");

            function qe(e) {
                switch (e.type) {
                    case"noCredentialsAvailable":
                        break;
                    case"userCanceled":
                        N.c.write(y.l.AUTH__DISABLE_GOOGLE_YOLO, "1", {duration: 1 / 24 / 6});
                        break;
                    case"requestFailed":
                        Math.random() < 1e-4 && Ve.a.warning("Google YOLO request failed or timed out (sample rate: 0.0001).", e);
                        break;
                    default:
                        throw e
                }
            }

            function Qe() {
                return Ye.apply(this, arguments)
            }

            function Ye() {
                return (Ye = s()(o.a.mark((function e() {
                    var t, r, n, a, i, s;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return "520305074949.apps.googleusercontent.com", t = "/google-yolo-login", window.googleyolo.setTimeouts(5e3), r = window.googleyolo.retrieve({
                                    supportedAuthMethods: ["https://accounts.google.com"],
                                    supportedIdTokenProviders: [{
                                        uri: "https://accounts.google.com",
                                        clientId: "520305074949.apps.googleusercontent.com"
                                    }]
                                }), e.prev = 4, e.next = 7, r;
                            case 7:
                                return n = e.sent, a = n.idToken, e.next = 11, Object(Ge.f)("/users/check-google-account", {idToken: a});
                            case 11:
                                if (i = e.sent, i.success) {
                                    e.next = 15;
                                    break
                                }
                                return e.abrupt("return");
                            case 15:
                                s = window.location.pathname, Object(P.a)(t + "?googleToken=" + a + "&autoLogin=1&from=" + s), e.next = 22;
                                break;
                            case 19:
                                e.prev = 19, e.t0 = e.catch(4), qe(e.t0);
                            case 22:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[4, 19]])
                })))).apply(this, arguments)
            }

            var Je = r("ctRD"), Ke = r("R7uB"), Xe = r.n(Ke);

            function Ze(e) {
                Object(We.a)(l.a.createElement(u.Provider, {store: d.b}, l.a.createElement(Be.a, null)), e)
            }

            Object(He.a)("headerData", "siteNavData", "coreData", (function (e, t, a) {
                if (Object(m.c)(a), Object(W.a)(), !e.hidden || !t.hidden) {
                    var i, c = window.document.querySelector("#MobileNavTarget"),
                        p = window.document.querySelector("#SettingsSidebarTarget");
                    Object(h.c)(t), c && Object(S.f)() ? Ze(c) : p && Ze(p), ne.a.LOGGED_IN || Object(ze.a)(10, s()(o.a.mark((function e() {
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all([r.e(3), r.e(0), r.e(78)]).then(r.bind(null, "J9WF"));
                                case 2:
                                    e.sent.default();
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))));
                    var f = window.document.querySelector("#SiteHeaderReactTarget");
                    f && Object(We.a)(l.a.createElement(u.Provider, {store: d.b}, l.a.createElement(xe, n()({}, e, {
                        ref: function (e) {
                            i = e
                        }
                    }))), f), ne.a.LOGGED_IN || (ne.a.openSignupModal = function (e, t) {
                        return i && i.handleOpenSignupModal(e, t)
                    }, QLoad("Quizlet.signupModal"), ne.a.openLoginModal = function (e) {
                        return void 0 === e && (e = {}), i && i.handleOpenLoginModal(e)
                    }, QLoad("Quizlet.loginModal")), ne.a.openContactUsModal = function () {
                        return i && i.handleOpenContactUsModal()
                    }, ne.a.clickSearchLink = function () {
                        return i && i.handleClickSearchLink()
                    }, QLoad("Quizlet.clickSearchLink"), ne.a.LOGGED_IN && (ne.a.openStudyPlannerWaitlistModal = function () {
                        var e;
                        return null === (e = i) || void 0 === e ? void 0 : e.handleOpenStudyPlannerWaitlistModal()
                    }, ne.a.openLoginWithAmazonModal = function () {
                        var e;
                        return null === (e = i) || void 0 === e ? void 0 : e.handleOpenLoginWithAmazonModal()
                    })
                }
            })), Xe()((function () {
                Object(ze.a)(10, s()(o.a.mark((function e() {
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([r.e(0), r.e(85)]).then(r.bind(null, "WKau"));
                            case 2:
                                e.sent.default();
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))))
            })), Je.d(), window.addEventListener("load", (function () {
                window.setTimeout(k.c, 1)
            })), Object(He.a)("userPromptsData", (function (e) {
                if (!e.hidden) {
                    var t = e.shouldShowBrazilAmbassadorPrompt, n = e.shouldShowConfirmEmailPrompt,
                        a = e.shouldShowTeacherStatusPrompt, i = e.shouldShowResetPasswordPrompt;
                    (n || a || t || i) && Object(ze.a)(10, s()(o.a.mark((function t() {
                        return o.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Promise.all([r.e(0), r.e(158)]).then(r.bind(null, "e2ho"));
                                case 2:
                                    t.sent.default(e);
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))))
                }
            })), window.googleyolo ? Qe() : window.onGoogleYoloLoad = function () {
                Qe()
            }
        }))
    }
}, [["ySsn", 1, 2, 3, 0]]]);