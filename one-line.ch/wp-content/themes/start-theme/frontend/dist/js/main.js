/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/
        "./js/_custom.js":
            /*!***********************!*\
            	!*** ./js/_custom.js ***!
            	\***********************/
            /***/
            (() => {

                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                        return typeof obj;
                    } : function(obj) {
                        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    }, _typeof(obj);
                }

                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        enumerableOnly && (symbols = symbols.filter(function(sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        })), keys.push.apply(keys, symbols);
                    }
                    return keys;
                }

                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                    return target;
                }

                function _defineProperty(obj, key, value) {
                    key = _toPropertyKey(key);
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }

                function _toPropertyKey(arg) {
                    var key = _toPrimitive(arg, "string");
                    return _typeof(key) === "symbol" ? key : String(key);
                }

                function _toPrimitive(input, hint) {
                    if (_typeof(input) !== "object" || input === null) return input;
                    var prim = input[Symbol.toPrimitive];
                    if (prim !== undefined) {
                        var res = prim.call(input, hint || "default");
                        if (_typeof(res) !== "object") return res;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return (hint === "string" ? String : Number)(input);
                }
                $(document).ready(function() {
                    var updateProperties = function updateProperties(elem, state) {
                        elem.style.setProperty('--x', "".concat(state.x, "px"));
                        elem.style.setProperty('--y', "".concat(state.y, "px"));
                        elem.style.setProperty('--width', "".concat(state.width, "px"));
                        elem.style.setProperty('--height', "".concat(state.height, "px"));
                        elem.style.setProperty('--radius', state.radius);
                        elem.style.setProperty('--scale', state.scale);
                        elem.style.setProperty('--border', "".concat(state.border, "px"));
                    };
                    document.querySelectorAll('.cursor').forEach(function(cursor) {
                        var onElement;
                        var createState = function createState(e) {
                            var defaultState = {
                                x: e.clientX,
                                y: e.clientY,
                                width: 40,
                                height: 40,
                                radius: '50%',
                                border: 1
                            };
                            var computedState = {};
                            if (onElement != null) {
                                var _onElement$getBoundin = onElement.getBoundingClientRect(),
                                    top = _onElement$getBoundin.top,
                                    left = _onElement$getBoundin.left,
                                    width = _onElement$getBoundin.width,
                                    height = _onElement$getBoundin.height;
                                var radius = window.getComputedStyle(onElement).borderTopLeftRadius;
                                computedState.x = left + width / 2;
                                computedState.y = top + height / 2;
                                computedState.width = 0;
                                computedState.height = 0;
                                computedState.radius = 0;
                                computedState.border = 0;
                            }
                            return _objectSpread(_objectSpread({}, defaultState), computedState);
                        };
                        document.addEventListener('mousemove', function(e) {
                            var state = createState(e);
                            updateProperties(cursor, state);
                        });

                        /*document.querySelectorAll('a, button').forEach(elem => {
                        	elem.addEventListener('mouseenter', () => (onElement = elem))
                        	elem.addEventListener('mouseleave', () => (onElement = undefined))
                        })*/

                        $(".btn, .intro-section__head, .stories__title, picture, .btn-link, .dignity__num, .home-about__block-label span, .focus-now__title, .analysis__label, .long-line, .footer__intro, .social-link, .btn-scroll-top i, .home-share__wrap, .home-share__sub-title, svg, .analysis__icon").mouseenter(function() {
                            $('.cursor').addClass('default');
                        }).mouseleave(function() {
                            $('.cursor').removeClass('default');
                        });
                    });

                    //COLLAPSE HEADER
                    window.onscroll = function() {
                        if ($(window).scrollTop() > 50) $('body').addClass('collapse-header');
                        else $('body').removeClass('collapse-header');
                    };
                    window.addEventListener("wheel", function(event) {
                        var delta = Math.sign(event.deltaY);
                        if (delta <= -1 && !$('body').hasClass('top')) {
                            setTimeout(function() {
                                $('body').addClass('top');
                            }, 400);
                        } else if (delta <= -1 && $('body').hasClass('top')) {
                            $('body').addClass('scroll-up');
                        } else {
                            $('body').removeClass('scroll-up top');
                        }
                    });
                    var ts;
                    $(document).bind('touchstart', function(e) {
                        ts = e.originalEvent.touches[0].clientY;
                    });
                    $(document).bind('touchmove', function(e) {
                        var te = e.originalEvent.changedTouches[0].clientY;
                        if (ts < te && !$('body').hasClass('top')) {
                            setTimeout(function() {
                                $('body').addClass('top');
                            }, 10);
                            console.log("if 1");
                        } else if (ts < te && $('body').hasClass('top')) {
                            $('body').addClass('scroll-up');
                            console.log("if 2");
                        } else {
                            $('body').removeClass('scroll-up top');
                            console.log("if 3");
                        }
                    });
                    $("body").onSwipe(function(results) {
                        if (results.down == true && !$('body').hasClass('top')) {
                            setTimeout(function() {
                                $('body').addClass('top');
                            }, 10);
                        }
                        if (results.down == true && $('body').hasClass('top')) {
                            $('body').addClass('scroll-up');
                        }
                        if (results.up == true) {
                            $('body').removeClass('scroll-up top');
                        }
                    });

                    //GREEN BG TO INTRO TITLE
                    if ($('.intro-section__head').length > 0) {
                        var callParallax = function callParallax(e) {
                            parallaxIt(e, '.type-1', 500);
                            parallaxIt(e, '.type-2', 500);
                        };
                        var parallaxIt = function parallaxIt(e, target, movement) {
                            var $this = $('.intro-section__head');
                            var boundingRect = $this[0].getBoundingClientRect();
                            var relX = e.pageX - boundingRect.left;
                            TweenMax.to(target, 0.3, {
                                x: relX,
                                opacity: 1,
                                ease: Power2.easeOut
                            });
                        };
                        $('.intro-section__head').mouseleave(function(e) {
                            TweenMax.to(this, 0.3, {
                                scale: 1
                            });
                        });
                        $('.intro-section__head').mouseenter(function(e) {
                            TweenMax.to(this, 0.3, {
                                transformOrigin: '0 0',
                                scale: 1
                            });
                        });
                        $('.intro-section__head').mousemove(function(e) {
                            callParallax(e);
                        });
                    }
                    if ($('.services-wrapper').length > 0) {
                        $('.services-wrapper ul li a').on('mouseenter touchstart', function() {
                            url = $(this).data("img");
                            var image = new Image();
                            image.src = url;
                            $(this).closest('li').append(image);
                        });
                        $('.services-wrapper ul li a').on('mouseleave touchend', function() {
                            $(this).closest('li').find('img').remove();
                        });
                    }

                    //SELECT

                    (function($) {
                        $.fn.niceSelect = function(method) {
                            // Methods
                            if (typeof method == 'string') {
                                if (method == 'update') {
                                    this.each(function() {
                                        var $select = $(this);
                                        var $dropdown = $(this).next('.nice-select');
                                        var open = $dropdown.hasClass('open');
                                        if ($dropdown.length) {
                                            $dropdown.remove();
                                            create_nice_select($select);
                                            if (open) {
                                                $select.next().trigger('click');
                                            }
                                        }
                                    });
                                } else if (method == 'destroy') {
                                    this.each(function() {
                                        var $select = $(this);
                                        var $dropdown = $(this).next('.nice-select');
                                        if ($dropdown.length) {
                                            $dropdown.remove();
                                            $select.css('display', '');
                                        }
                                    });
                                    if ($('.nice-select').length == 0) {
                                        $(document).off('.nice_select');
                                    }
                                } else {
                                    console.log('Method "' + method + '" does not exist.');
                                }
                                return this;
                            }

                            // Hide native select
                            this.hide();

                            // Create custom markup
                            this.each(function() {
                                var $select = $(this);
                                if (!$select.next().hasClass('nice-select')) {
                                    create_nice_select($select);
                                }
                            });

                            function create_nice_select($select) {
                                $select.after($('<div></div>').addClass('nice-select').addClass($select.attr('class') || '').addClass($select.attr('disabled') ? 'disabled' : '').addClass($select.attr('multiple') ? 'has-multiple' : '').attr('tabindex', $select.attr('disabled') ? null : '0').html($select.attr('multiple') ? '<span class="multiple-options"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>' : '<span class="current"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'));
                                var $dropdown = $select.next();
                                var $options = $select.find('option');
                                if ($select.attr('multiple')) {
                                    var $selected = $select.find('option:selected');
                                    var $selected_html = 'Welche Services/Produkte interessieren Sie?';
                                    $selected.each(function() {
                                        $selected_option = $(this);
                                        $selected_text = $selected_option.data('display') || $selected_option.text();
                                        if (!$selected_option.val()) {
                                            return;
                                        }
                                        $selected_html += '<span class="current">' + $selected_text + '</span>';
                                    });
                                    $select_placeholder = $select.data('js-placeholder') || $select.attr('js-placeholder');
                                    $select_placeholder = !$select_placeholder ? 'Select' : $select_placeholder;
                                    $selected_html = $selected_html === '' ? $select_placeholder : $selected_html;
                                    $dropdown.find('.multiple-options').html($selected_html);
                                } else {
                                    var $selected = $select.find('option:selected');
                                    $dropdown.find('.current').html($selected.data('display') || $selected.text());
                                }
                                $options.each(function(i) {
                                    var $option = $(this);
                                    var display = $option.data('display');
                                    $dropdown.find('ul').append($('<li></li>').attr('data-value', $option.val()).attr('data-display', display || null).addClass('option' + ($option.is(':selected') ? ' selected' : '') + ($option.is(':disabled') ? ' disabled' : '')).html($option.text()));
                                });
                            }

                            /* Event listeners */

                            // Unbind existing events in case that the plugin has been initialized before
                            $(document).off('.nice_select');

                            // Open/close
                            $(document).on('click.nice_select', '.nice-select', function(event) {
                                var $dropdown = $(this);
                                $('.nice-select').not($dropdown).removeClass('open');
                                $dropdown.toggleClass('open');
                                if ($dropdown.hasClass('open')) {
                                    $dropdown.find('.option');
                                    $dropdown.find('.nice-select-search').val('');
                                    $dropdown.find('.nice-select-search').focus();
                                    $dropdown.find('.focus').removeClass('focus');
                                    $dropdown.find('.selected').addClass('focus');
                                    $dropdown.find('ul li').show();
                                } else {
                                    $dropdown.focus();
                                }
                            });
                            $(document).on('click', '.nice-select-search-box', function(event) {
                                event.stopPropagation();
                                return false;
                            });
                            $(document).on('keyup.nice-select-search', '.nice-select', function() {
                                var $self = $(this);
                                var $text = $self.find('.nice-select-search').val();
                                var $options = $self.find('ul li');
                                if ($text == '') $options.show();
                                else if ($self.hasClass('open')) {
                                    $text = $text.toLowerCase();
                                    var $matchReg = new RegExp($text);
                                    if (0 < $options.length) {
                                        $options.each(function() {
                                            var $this = $(this);
                                            var $optionText = $this.text().toLowerCase();
                                            var $matchCheck = $matchReg.test($optionText);
                                            $matchCheck ? $this.show() : $this.hide();
                                        });
                                    } else {
                                        $options.show();
                                    }
                                }
                                $self.find('.option'), $self.find('.focus').removeClass('focus'), $self.find('.selected').addClass('focus');
                            });

                            // Close when clicking outside
                            $(document).on('click.nice_select', function(event) {
                                if ($(event.target).closest('.nice-select').length === 0) {
                                    $('.nice-select').removeClass('open').find('.option');
                                }
                            });

                            // Option click
                            $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
                                var $option = $(this);
                                var $dropdown = $option.closest('.nice-select');
                                if ($dropdown.hasClass('has-multiple')) {
                                    console.log('clicked', $option);
                                    if ($option.hasClass('selected')) {
                                        $option.removeClass('selected');
                                    } else {
                                        $option.addClass('selected');
                                    }
                                    $selected_html = '';
                                    $selected_values = [];
                                    $dropdown.find('.selected').each(function() {
                                        $selected_option = $(this);
                                        var text = $selected_option.data('display') || $selected_option.text();
                                        $selected_html += '<span class="current">' + text + '</span>';
                                        $selected_values.push($selected_option.data('value'));
                                    });
                                    $select_placeholder = $dropdown.prev('select').data('js-placeholder') || $dropdown.prev('select').attr('js-placeholder');
                                    console.log($dropdown.prev('select'));
                                    $select_placeholder = !$select_placeholder ? 'Select' : $select_placeholder;
                                    $selected_html = $selected_html === '' ? $select_placeholder : $selected_html;
                                    $dropdown.find('.multiple-options').html($selected_html);
                                    $dropdown.prev('select').val($selected_values).trigger('change');
                                } else {
                                    $dropdown.find('.selected').removeClass('selected');
                                    $option.addClass('selected');
                                    var text = $option.data('display') || $option.text();
                                    $dropdown.find('.current').text(text);
                                    $dropdown.prev('select').val($option.data('value')).trigger('change');
                                }
                            });
                            $(document).on('click.nice_select', '.nice-select.has-multiple .option', function() {
                                setTimeout(function() {
                                    $('.nice-select.has-multiple').addClass('open');
                                }, 10);
                            });

                            // Keyboard events
                            $(document).on('keydown.nice_select', '.nice-select', function(event) {
                                var $dropdown = $(this);
                                var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

                                // Space or Enter
                                if (event.keyCode == 32 || event.keyCode == 13) {
                                    if ($dropdown.hasClass('open')) {
                                        $focused_option.trigger('click');
                                    } else {
                                        $dropdown.trigger('click');
                                    }
                                    return false;
                                    // Down
                                } else if (event.keyCode == 40) {
                                    if (!$dropdown.hasClass('open')) {
                                        $dropdown.trigger('click');
                                    } else {
                                        var $next = $focused_option.nextAll('.option:not(.disabled)').first();
                                        if ($next.length > 0) {
                                            $dropdown.find('.focus').removeClass('focus');
                                            $next.addClass('focus');
                                        }
                                    }
                                    return false;
                                    // Up
                                } else if (event.keyCode == 38) {
                                    if (!$dropdown.hasClass('open')) {
                                        $dropdown.trigger('click');
                                    } else {
                                        var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
                                        if ($prev.length > 0) {
                                            $dropdown.find('.focus').removeClass('focus');
                                            $prev.addClass('focus');
                                        }
                                    }
                                    return false;
                                    // Esc
                                } else if (event.keyCode == 27) {
                                    if ($dropdown.hasClass('open')) {
                                        $dropdown.trigger('click');
                                    }
                                    // Tab
                                } else if (event.keyCode == 9) {
                                    if ($dropdown.hasClass('open')) {
                                        return false;
                                    }
                                }
                            });

                            // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
                            var style = document.createElement('a').style;
                            style.cssText = 'pointer-events:auto';
                            if (style.pointerEvents !== 'auto') {
                                $('html').addClass('no-csspointerevents');
                            }
                            return this;
                        };
                    })(jQuery);

                    //SELECT INIT
                    $('select').niceSelect();
                    $(document).on('change', 'select', function(e) {
                        $(this).closest('form-group').addClass('active');
                    });
                    $(document).on("click", ".nice-select .option:not(.disabled)", function() {
                        var s = $(this),
                            n = s.closest(".nice-select");
                        $(this).addClass('active');
                    });

                    //Stories slider
                    $('.stories__slider-for').slick({
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        infinite: true,
                        fade: true,
                        speed: 600,
                        touchThreshold: 30,
                        asNavFor: '.stories__slider-nav'
                    });
                    $('.stories__slider-nav').slick({
                        dots: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        focusOnSelect: true,
                        vertical: true,
                        infinite: true,
                        centerMode: true,
                        swipe: true,
                        TouchMove: true,
                        touchThreshold: 30,
                        speed: 600,
                        asNavFor: '.stories__slider-for',
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                verticalSwiping: true
                            }
                        }]
                    });
                    $('.stories__slider-nav').on('wheel', function(e) {
                        e.preventDefault();
                        if (e.originalEvent.deltaY < 0) {
                            $(this).slick('slickPrev');
                            $('.stories__slider-for').slick('slickPrev');
                        } else {
                            $(this).slick('slickNext');
                            $('.stories__slider-for').slick('slickNext');
                        }
                    });
                    $('.stories__slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        if (nextSlide == 0) {
                            var cls = 'slick-current slick-active' + (slick.options.centerMode ? ' slick-center' : '');
                            var cls2 = 'slick-animate slick-active';
                            setTimeout(function() {
                                $('[data-slick-index="' + slick.$slides.length + '"]').addClass(cls).siblings().removeClass(cls);
                                for (var i = slick.options.slidesToShow - 3; i >= 0; i--) {
                                    $('[data-slick-index="' + i + '"]').addClass(cls);
                                }
                                for (var i = slick.options.slidesToShow - 3; i >= -1; i--) {
                                    $('[data-slick-index="' + i + '"]').addClass(cls2);
                                }
                                for (var i = slick.options.slidesToShow - 2; i >= -1; i--) {
                                    $('[data-slick-index="' + i + '"]').addClass(cls2);
                                }
                            }, 10);
                        }
                    });

                    // DIGNITY SLIDER
                    var controller = new ScrollMagic.Controller();
                    if ($(window).width() > 500) {
                        var animData = {
                                container: document.getElementById('dignity-icon'),
                                path: pathHome + '/frontend/json/dignity.json',
                                renderer: 'svg',
                                loop: false,
                                autoplay: false,
                                name: "animScroll"
                            },
                            animScroll,
                            tl;
                        var animScroll = bodymovin.loadAnimation(animData);
                        var controller = new ScrollMagic.Controller();
                        if ($(window).width() < 370) {
                            var offsetD = '140px';
                        } else {
                            var offsetD = '140px';
                        }
                        animScroll.addEventListener('DOMLoaded', function() {
                            tl = new TimelineMax({
                                repeat: 0
                            });
                            tl.to('.dignity__wrapper', .02, {
                                x: '0%'
                            }).to({
                                frame: 0
                            }, 1.2, {
                                frame: animScroll.totalFrames - 1,
                                onUpdate: function onUpdate() {
                                    animScroll.goToAndStop(Math.round(this.target.frame), true);
                                },
                                Ease: Linear.easeNone
                            }).to('.dignity__wrapper', .1, {
                                x: '-33.33%'
                            }, "-=1.1").to('.dignity__wrapper', .15, {
                                x: '-66.66666%'
                            }, "-=.75");
                            var scene = new ScrollMagic.Scene({
                                triggerElement: ".dignity",
                                offset: offsetD,
                                duration: 10000,
                                triggerHook: "onLeave"
                            }).setTween(tl).setPin(".dignity").addTo(controller);
                        });
                    } else {
                        //Process slider
                        $('.dignity__wrapper').slick({
                            dots: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            infinite: false,
                            fade: false,
                            draggable: true,
                            swipe: true,
                            touchMove: true,
                            variableWidth: true
                        });
                    }

                    // FOCUS SECTION

                    var timelineF = new TimelineMax();
                    var focusH = $('.focus-now__block-wrapper').innerHeight();
                    if ($(window).width() > 767) {
                        timelineF.to('.focus-now__title', 1, {
                            x: '-40.5%'
                        }).to('.focus-now__block-wrapper', 1, {
                            y: -focusH
                        }, "-=0.6").to('.focus-now', 0, {
                            className: "+=activeWhite"
                        }, "-=0.9");
                        var sceneF = new ScrollMagic.Scene({
                            triggerElement: '.focus-now',
                            duration: '300%',
                            triggerHook: "onLeave"
                        }).setTween(timelineF).setPin('.focus-now').addTo(controller);
                    } else {
                        var vHeight = $(window).innerHeight();
                        var fHeight = $('.focus-now__block-wrapper').innerHeight();
                        var focusTop = vHeight - fHeight - 150;
                        timelineF.to('.focus-now__title', 1, {
                            y: '345%'
                        }).to('.focus-now__block-wrapper', 3.4, {
                            y: focusTop
                        }, "-=.1").to('.focus-now', 0, {
                            className: "+=activeWhite"
                        }, "-=3.4");
                        var sceneF = new ScrollMagic.Scene({
                            triggerElement: '.focus-now',
                            duration: '900%',
                            triggerHook: "onLeave"
                        }).setTween(timelineF).setPin('.focus-now').addTo(controller);
                    }

                    // PROCESS ANIMATION

                    var timelinePr = new TimelineMax();
                    timelinePr.fromTo('.process__col:first-child .block-title', 1, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }).to('.process__col:first-child .process__block-img', 1, {
                        opacity: 1
                    }).to('.process__col:first-child .process__block-content', 1, {
                        opacity: 1
                    }, "-=1").to('.process__col:first-child .process__block', 1, {
                        className: "+=active"
                    }).to('.process__col:nth-child(2) .block-title', 1, {
                        opacity: 1
                    }).to('.process__col:nth-child(2) .process__block-img', 1, {
                        opacity: 1
                    }).to('.process__col:nth-child(2) .process__block-content', 1, {
                        opacity: 1
                    }, "-=1").to('.process__col:nth-child(2) .process__block', 1, {
                        className: "+=active"
                    }).to('.process__col:nth-child(3) .block-title', 1, {
                        opacity: 1
                    }).to('.process__col:nth-child(3) .process__block-img', 1, {
                        opacity: 1
                    }).to('.process__col:nth-child(3) .process__block-content', 1, {
                        opacity: 1
                    }, "-=1").to('.process__col:nth-child(3) .process__block', 1, {
                        className: "+=active"
                    }).to('.process__col:nth-child(4) .block-title', 1, {
                        opacity: 1
                    }).to('.process__col:nth-child(4) .process__block-img', 1, {
                        opacity: 1
                    }).to('.process__col:nth-child(4) .process__block-content', 1, {
                        opacity: 1
                    }, "-=1").to('.process__col:nth-child(4) .process__block', 1, {
                        className: "+=active"
                    });
                    var scenePr = new ScrollMagic.Scene({
                        triggerElement: '.process-md',
                        duration: '300%',
                        triggerHook: "onLeave"
                    }).setTween(timelinePr).setPin('.process-md').addTo(controller);

                    //Process slider
                    $('.process-slider').slick({
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        prevArrow: '<button class="slick-prev"><i class="icon-arrow-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="icon-arrow-right"></i></button>',
                        infinite: false,
                        fade: false,
                        draggable: true,
                        swipe: true,
                        touchMove: true,
                        variableWidth: true,
                        speed: 900
                    });

                    //fast fact slider
                    $('.fast-fact__slider').slick({
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: true,
                        prevArrow: '<button class="slick-prev"><i class="icon-arrow-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="icon-arrow-right"></i></button>',
                        infinite: false,
                        draggable: false,
                        swipe: false,
                        touchMove: false,
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                draggable: true,
                                swipe: true,
                                touchMove: true
                            }
                        }, {
                            breakpoint: 550,
                            settings: {
                                speed: 1000,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                draggable: true,
                                swipe: true,
                                touchMove: true,
                                variableWidth: true
                            }
                        }]
                    });

                    //Close Cookies
                    setTimeout(function() {
                        $('.cookies').fadeIn();
                    }, 8000);
                    $('.cookies .btn, .cookies__close').click(function(e) {
                        e.preventDefault();
                        $('.cookies').fadeOut();
                    });

                    //Blog slider
                    $('.home-about__row').slick({
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        infinite: true,
                        fade: false,
                        autoplay: true,
                        autoplaySpeed: 10000,
                        speed: 0,
                        draggable: false,
                        swipe: false,
                        touchMove: false,
                        responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: 600,
                            settings: {
                                fade: true,
                                speed: 600,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                draggable: true,
                                swipe: true,
                                touchMove: true
                            }
                        }]
                    });

                    //Blog slider
                    $('.blog-slider').slick({
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        infinite: true,
                        fade: false,
                        variableWidth: true,
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                variableWidth: true,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                adaptiveHeight: true
                            }
                        }]
                    });

                    //Height
                    function setHeight() {
                        var viewportHeight = $(window).outerHeight();
                        $('.full-height').css({
                            height: viewportHeight
                        });
                    }
                    setHeight();
                    $('.btn-scroll-top').click(function(e) {
                        e.preventDefault();
                        $('body,html').animate({
                            scrollTop: 0
                        }, 1200);
                        return false;
                    });

                    /*Contact Bar*/
                    $(document).on("click", ".contact-bar-btn, .open__contact-bar", function(e) {
                        e.preventDefault();
                        $('body').addClass('opened-bar');
                    });
                    $(document).on("click", ".contact-bar__close", function() {
                        $('body').removeClass('opened-bar opened-bar-2 opened-bar-3');
                    });
                    $(document).click(function(e) {
                        if (!$(event.target).closest(".contact-bar, .contact-bar-btn, .step-2, .open__contact-bar").length) {
                            $('body').removeClass('opened-bar');
                        }
                    });

                    /*$('[type=\'tel\']').mask('+0 (000) 00000000');*/

                    $(".contact-bar form").validate({
                        rules: {
                            yourName: "required",
                            yourCompany: "required",
                            yourEmail: {
                                required: true,
                                email: true
                            },
                            yourWebsite: {
                                required: true,
                                url: true
                            }
                        },
                        messages: {
                            yourName: "Bitte ausfüllen",
                            yourCompany: "Bitte ausfüllen",
                            yourEmail: "Bitte ausfüllen",
                            yourWebsite: "Bitte ausfüllen"
                        }
                    });
                    $(".validate").validate({
                        highlight: function highlight(element) {
                            $(element).closest("div").addClass("error");
                        },
                        unhighlight: function unhighlight(element) {
                            $(element).closest("div").removeClass("error");
                        }
                    });
                    $(document).on('focusin', '.validate input, .validate textarea', function() {
                        $(this).closest('div').addClass('not-empty');
                    });
                    $(document).on('focusout', '.validate input, .validate textarea', function() {
                        var $this = $(this);
                        $this.closest('div').removeClass('not-empty');
                    });
                    $(document).on("click", ".step-2", function() {
                        $(".contact-bar form").valid();
                        if (!$(".contact-bar form").validate().form()) {
                            return false; //doesn't validate
                        } else {
                            $('body').addClass('opened-bar-2');
                        }
                    });
                    $(document).on("click", ".step-3", function() {
                        $('body').addClass('opened-bar-3');
                    });
                    $(document).on("click", ".step-prev-1", function() {
                        $('body').removeClass('opened-bar-2');
                    });
                    $(document).on("click", ".step-prev-2", function() {
                        $('body').removeClass('opened-bar-3');
                    });

                    //Services Menu
                    $(document).on("click", "#services-link", function(e) {
                        e.preventDefault();
                        if ($('body').hasClass('opened-services-menu')) {
                            $('body').removeClass('opened-services-menu');
                        } else {
                            $('body').addClass('opened-services-menu');
                        }
                    });
                    $(document).on("click", ".close-services-list", function(e) {
                        e.preventDefault();
                        $('body').removeClass('opened-services-menu');
                    });

                    //Header Search Form
                    $(document).on("click", ".no_active .search-btn", function(e) {
                        e.preventDefault();
                        $(this).closest('.header__search-form').removeClass('no_active');
                    });
                    $(document).on("click", ".header__search-form .close-search_form", function(e) {
                        e.preventDefault();
                        $('.header__search-form').addClass('no_active');
                    });
                    $(document).click(function(e) {
                        if (!$(event.target).closest(".header__search-form .search-btn, .header__search-form-control").length) {
                            $('.header__search-form').addClass('no_active');
                        }
                    });

                    //ACCORDION
                    $(".accordion-head").on("click", function(e) {
                        e.preventDefault();
                        if ($(this).hasClass("active")) {
                            $(this).removeClass("active");
                            $(this).parents('.accordion-block').find(".accordion-content").slideUp(200);
                        } else {
                            $(".accordion-head").removeClass("active");
                            $(this).addClass("active");
                            $(".accordion-content").slideUp(200);
                            $(this).parents('.accordion-block').find(".accordion-content").slideDown(200);
                        }
                    });

                    //Services Project Slider
                    $('.serv-projects__slider').slick({
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        infinite: true,
                        fade: true,
                        asNavFor: '.serv-projects__nav',
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                variableWidth: false,
                                fade: true
                            }
                        }]
                    });
                    $('.serv-projects__nav').slick({
                        dots: false,
                        slidesToShow: 7,
                        slidesToScroll: 1,
                        arrows: false,
                        focusOnSelect: true,
                        vertical: true,
                        infinite: true,
                        asNavFor: '.serv-projects__slider',
                        responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }]
                    });

                    //Counter
                    $('.counter').counterUp({
                        time: 1000
                    });

                    //ANIMATION
                    AOS.init({
                        duration: 700,
                        delay: 100,
                        easing: 'ease'
                    });
                    setTimeout(function() {
                        AOS.refresh();
                    }, 500);
                    $(window).on('resize', function() {
                        AOS.refresh();
                    });
                    var $anchors = $('.pssst__arrow'),
                        counter = 0;
                    setInterval(function() {
                        $anchors.removeClass('active');
                        if ($anchors.hasClass('arrow-left')) {
                            $anchors.eq(counter-- % $anchors.length).addClass('active');
                        } else if ($anchors.hasClass('arrow-right')) {
                            $anchors.eq(counter++ % $anchors.length).addClass('active');
                        }
                    }, 1000);

                    //TAB

                    $('.tabs-wrapper .tab').mouseenter(function() {
                        $(this).closest('.tabs-wrapper').find('.tab').removeClass("active").eq($(this).index()).addClass("active");
                        $(this).closest('.tabs-wrapper').find(".tab_item").hide().eq($(this).index()).fadeIn();
                    });
                    if ($(window).width() < 768) {
                        $('.about-tabs-block__title').on('click', function() {
                            if ($(this).hasClass('active')) {
                                $(this).siblings('.about-tabs-block').slideUp();
                                $(this).removeClass('active');
                            } else {
                                $('.about-tabs-block').slideUp();
                                $('.about-tabs-block__title').removeClass('active');
                                $(this).siblings('.about-tabs-block').slideToggle();
                                $(this).toggleClass('active');
                            }
                        });
                    }

                    //TEAM SLIDER

                    var servSlider = $('.serv-box-slider');
                    servSlider.on('init reInit afterChange', function(event, slick) {
                        slideCountN = slick.slideCount;
                        if (slideCountN < 7) {
                            $('.serv-box-slider').addClass('center-mode');
                        }
                    });
                    servSlider.slick({
                        dots: false,
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        arrows: false,
                        variableWidth: true,
                        swipe: true,
                        infinite: false,
                        speed: 2000,
                        responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    });

                    //TEAM SLIDER
                    $('.team-slider').slick({
                        dots: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true,
                        prevArrow: '<button class="slick-prev"><i class="icon-left-arrow"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="icon-right-arrow"></i></button>',
                        variableWidth: true,
                        TouchMove: true,
                        touchThreshold: 30,
                        swipe: true,
                        infinite: true,
                        speed: 600,
                        responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                centerMode: true,
                                arrows: false
                            }
                        }]
                    });
                    $('.team-slider').on('wheel', function(e) {
                        e.preventDefault();
                        if (e.originalEvent.deltaY < 0) {
                            $(this).slick('slickPrev');
                        } else {
                            $(this).slick('slickNext');
                        }
                    });

                    //EYEs
                    if ($('.team-block').length > 0) {
                        var balls = document.getElementsByClassName("retina");
                        document.onmousemove = function() {
                            $('.team__wrapper').find('.team-block__eyes').each(function() {
                                // X position

                                var offset = $(this).offset();
                                var ballsW = $(this).width() / 2;
                                var eyesPosL = offset.left + ballsW;

                                // Y position

                                var teamOffsetH = $('.team-block__eyes').offset().top;
                                var windowOffsetH = $(window).scrollTop();
                                var winHgt = $(window).innerHeight();
                                if (event.clientX > eyesPosL) {
                                    var x = (event.clientX - eyesPosL) / window.innerWidth * 50 + 50 + '%';
                                } else {
                                    var x = event.clientX / eyesPosL * 50 + '%';
                                }
                                if (windowOffsetH + event.clientY < teamOffsetH) {
                                    var y = event.clientY / (teamOffsetH - windowOffsetH) * 50 + '%';
                                } else {
                                    var y = (event.clientY + windowOffsetH - teamOffsetH) / (windowOffsetH + winHgt - windowOffsetH) * 50 + 50 + '%';
                                }
                                $(this).find(".retina").each(function(index) {
                                    this.style = "left: " + x + "; transform: translate(-" + x + ",-" + y + "); top: " + y + ";";
                                });
                            });
                        };
                    };

                    // Jobs slider

                    var $jobsSlider = $('.jobs-slider');
                    $jobsSlider.slick({
                        dots: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        prevArrow: '<button class="slick-prev"><i class="icon-left-arrow"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="icon-right-arrow"></i></button>',
                        variableWidth: true,
                        accessibility: true,
                        centerMode: false,
                        infinite: false,
                        /*initialSlide: 1, // start on second slide*/
                        focusOnSelect: false,
                        /*swipe: false,*/
                        TouchMove: false,
                        speed: 600,
                        responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false,
                                swipe: true,
                                TouchMove: true
                            }
                        }]
                    });
                    $jobsSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        var cls = 'slick-current slick-active' + ' slick-center';
                        if (nextSlide == 0) {
                            setTimeout(function() {
                                $('[data-slick-index="' + slick.$slides.length + '"]').addClass(cls).siblings().removeClass(cls);
                                for (var i = slick.options.slidesToShow - 1; i >= 0; i--) {
                                    $('[data-slick-index="' + i + '"]').addClass(cls);
                                }
                            }, 10);
                        } else if (nextSlide === slick.$slides.length - 1) {
                            setTimeout(function() {
                                $('[data-slick-index="' + nextSlide + '"]').addClass(cls).siblings().removeClass(cls);
                                for (var i = -1; i >= -1 * slick.options.slidesToShow; i--) {
                                    $('[data-slick-index="' + i + '"]').addClass(cls);
                                }
                            }, 10);
                        }
                    });
                    $jobsSlider.on('wheel', function(e) {
                        e.preventDefault();
                        if (e.originalEvent.deltaY < 0) {
                            $(this).slick('slickPrev');
                        } else {
                            $(this).slick('slickNext');
                        }
                    });

                    //Sticky block
                    if ($('.sticky-head').length > 0) {
                        if ($(window).width() > 767) {
                            $(".sticky-head").stick_in_parent({
                                offset_top: 300
                            });
                        }
                    }

                    //cookie js all balock
                    if (readCookie('accept')) {} else {}
                    $(".cookie-close").click(function(e) {
                        document.cookie = 'accept=true; max-age=604800;';
                    });

                    function readCookie(name) {
                        var nameEQ = name + "=";
                        var ca = document.cookie.split(';');
                        for (var _i = 0; _i < ca.length; _i++) {
                            var c = ca[_i];
                            while (c.charAt(0) == ' ') {
                                c = c.substring(1, c.length);
                            }
                            if (c.indexOf(nameEQ) > -1) {
                                return c.substring(nameEQ.length, c.length);
                            }
                        }
                        return null;
                    }

                    //MOBILE MENU
                    $('.openMenu').click(function() {
                        if ($('body').hasClass('opened-menu')) {
                            $('body').removeClass('opened-menu opened-services-menu');
                            $('.main_menu_wrapper').fadeOut(600);
                        } else {
                            $('body').addClass('opened-menu');
                            $('.main_menu_wrapper').fadeIn(600);
                        }
                    });
                    setTimeout(function() {
                        $('.preloader__inner').removeClass('active');
                        $('.preloader__sub-text').removeClass('active');
                        $('.about-preloader__inner').removeClass('active');
                    }, 300);

                    //Welcome Animation
                    function myFunction() {
                        setTimeout(function() {
                            $('body').css({
                                position: "fixed"
                            }).removeClass('preloader_show');
                            /*$('.header').css({"padding-right": "17px"});*/
                        }, 100);
                        setTimeout(function() {
                            $('body').css({
                                position: "relative"
                            });
                            /*$('.header').css({"padding-right": "0"});*/
                            AOS.refresh();
                        }, 300);
                        setTimeout(function() {
                            $('body').removeClass('preloader-header_show');
                        }, 2000);
                        $(".preloader__wrapper").hide();
                        $(".preloader__bg").css({
                            opacity: "0",
                            "visibility": "hidden"
                        });
                        timelineW.kill();
                        document.cookie = 'animationOne=true; max-age=604800;';
                    }

                    function myFunctionMob() {
                        setTimeout(function() {
                            $('body').css({
                                position: "fixed"
                            }).removeClass('preloader_show');
                        }, 100);
                        setTimeout(function() {
                            $('body').css({
                                position: "relative"
                            });
                            AOS.refresh();
                        }, 300);
                        setTimeout(function() {
                            $('body').removeClass('preloader-header_show');
                        }, 2000);
                        $(".preloader__wrapper").hide();
                        $(".preloader__bg").css({
                            opacity: "0",
                            "visibility": "hidden"
                        });
                        timelineW.kill();
                        document.cookie = 'animationOne=true; max-age=604800;';
                    }
                    if (readCookie('animationOne') || $(window).width() <= 767) {
                        $('body').removeClass('preloader_show preloader-header_show');
                        $(".preloader__wrapper").hide();
                        $(".preloader__bg").css({
                            opacity: "0",
                            "visibility": "hidden"
                        });
                    }

                    function myFunctionAbout() {
                        setTimeout(function() {
                            $('body').css({
                                position: "fixed"
                            }).removeClass('preloader_show');
                            /*$('.header').css({"padding-right": "17px"});*/
                        }, 100);
                        setTimeout(function() {
                            $('body').css({
                                position: "relative"
                            });
                            /*$('.header').css({"padding-right": "0"});*/
                            AOS.refresh();
                        }, 600);
                        setTimeout(function() {
                            $('body').removeClass('preloader-header_show');
                        }, 2000);
                        $(".preloader__wrapper").hide();
                        $(".preloader__bg").css({
                            opacity: "0",
                            "visibility": "hidden"
                        });
                        timelineAbout.kill();
                    }
                    $('.preloader_show.home .logo-block a').click(function(e) {
                        e.preventDefault();
                        if ($(window).width() > 767) {
                            myFunction();
                        } else {
                            myFunctionMob();
                        }
                    });
                    if ($('.preloader').length > 0) {
                        var timelineW = new TimelineMax();
                        if ($(window).width() < 768) {
                            timelineW.from('.letter_o', 1.4, {
                                xPercent: '-150%',
                                scale: 15.5,
                                force3D: false
                            }).from('.letter_n', 1.4, {
                                yPercent: '-2500%',
                                xPercent: '250%',
                                scale: 10.5,
                                force3D: false
                            }, "-=1.2").from('.letter_e', 1.4, {
                                yPercent: '2500%',
                                xPercent: '250%',
                                scale: 10.5,
                                force3D: false
                            }, "-=1.1").from('.letter_l', 1.3, {
                                yPercent: '-2500%',
                                xPercent: '250%',
                                scale: 10,
                                force3D: false
                            }, "-=1").from('.letter_i', 1.2, {
                                yPercent: '2500%',
                                xPercent: '250%',
                                scale: 10,
                                force3D: false
                            }, "-=0.9").from('.letter_n2', 1.1, {
                                yPercent: '-2500%',
                                xPercent: '250%',
                                scale: 10.5,
                                force3D: false
                            }, "-=0.8").from('.letter_e2', 1, {
                                yPercent: '2500%',
                                xPercent: '250%',
                                scale: 10.5,
                                force3D: false
                            }, "-=0.7").to('.preloader__sub-text', 0, {
                                top: '0',
                                opacity: '1'
                            }).to('.preloader', 0.1, {
                                delay: .5,
                                opacity: 0
                            }).call(myFunctionMob, null, "0").call(function() {
                                timelineW.kill();
                            });
                        } else {
                            timelineW.from('.letter_o', 1.4, {
                                yPercent: '-60%',
                                xPercent: '-135%',
                                scale: 8,
                                force3D: false
                            }).from('.letter_n', 1.4, {
                                yPercent: '-1000%',
                                xPercent: '250%',
                                scale: 5.5,
                                force3D: false
                            }, "-=1.2").from('.letter_e', 1.4, {
                                yPercent: '1300%',
                                xPercent: '250%',
                                scale: 5.5,
                                force3D: false
                            }, "-=1.1").from('.letter_l', 1.3, {
                                yPercent: '-1300%',
                                xPercent: '250%',
                                scale: 5,
                                force3D: false
                            }, "-=1").from('.letter_i', 1.2, {
                                yPercent: '1300%',
                                xPercent: '250%',
                                scale: 5,
                                force3D: false
                            }, "-=0.9").from('.letter_n2', 1.1, {
                                yPercent: '-1300%',
                                xPercent: '250%',
                                scale: 4.5,
                                force3D: false
                            }, "-=0.8").from('.letter_e2', 1, {
                                yPercent: '1300%',
                                xPercent: '250%',
                                scale: 4.5,
                                force3D: false
                            }, "-=0.7").to('.preloader__sub-text', 0, {
                                top: '0',
                                opacity: '1'
                            }).to('.preloader', 0.1, {
                                delay: .1,
                                opacity: 0
                            }).call(myFunction, null, "0").call(function() {
                                timelineW.kill();
                            });
                        }
                        var sceneW = new ScrollMagic.Scene({
                            triggerElement: '.preloader',
                            duration: '1000%',
                            triggerHook: "onLeave",
                            offset: 0
                        }).setTween(timelineW).setPin('.preloader').addTo(controller);
                    }

                    //About Animation

                    if ($('.about-preloader').length > 0) {
                        var blockH = $('.about-preloader__inner-block div').innerHeight();
                        if ($(window).width() < 768) {
                            var timelineAbout = new TimelineMax();
                            timelineAbout.from('.line-5', 6, {
                                yPercent: '50'
                            }).from('.line-8', 6, {
                                yPercent: '-50'
                            }, "-=6").from('.line-6', 6, {
                                yPercent: '-50'
                            }, "-=6").from('.line-2', 6, {
                                yPercent: '-50'
                            }, "-=6").from('.line-7', 6, {
                                yPercent: '50'
                            }, "-=6").from('.line-4', 6, {
                                yPercent: '-50'
                            }, "-=6").from('.line-3', 6, {
                                yPercent: '50'
                            }, "-=6").from('.line-1', 6, {
                                yPercent: '50'
                            }, "-=6").from('.line-9', 6, {
                                yPercent: '50'
                            }, "-=6").to('.line-6', 1, {
                                delay: 1.5,
                                top: blockH
                            }, "-=.5").to('.line-7', 1, {
                                delay: 1.5,
                                top: -blockH
                            }, "-=2.5").to('.about-preloader', .3, {
                                delay: 2,
                                opacity: 0
                            }).call(myFunctionAbout, null, "0").call(function() {
                                timelineAbout.kill();
                            });
                            var sceneAbout = new ScrollMagic.Scene({
                                triggerElement: '.about-preloader',
                                duration: '300%',
                                offset: 0,
                                ease: Linear.easeNone
                            }).setTween(timelineAbout).setPin('.about-preloader').addTo(controller);
                        } else {
                            var timelineAbout = new TimelineMax();
                            timelineAbout.from('.line-5', 6, {
                                yPercent: '10'
                            }).from('.line-8', 6, {
                                yPercent: '-10'
                            }, "-=6").from('.line-6', 6, {
                                yPercent: '-10'
                            }, "-=6").from('.line-2', 6, {
                                yPercent: '-10'
                            }, "-=6").from('.line-7', 6, {
                                yPercent: '10'
                            }, "-=6").from('.line-4', 6, {
                                yPercent: '-10'
                            }, "-=6").from('.line-3', 6, {
                                yPercent: '10'
                            }, "-=6").from('.line-1', 6, {
                                yPercent: '10'
                            }, "-=6").from('.line-9', 6, {
                                yPercent: '10'
                            }, "-=6").to('.line-6', 1, {
                                delay: 1.5,
                                top: blockH
                            }, "-=.5").to('.line-7', 1, {
                                delay: 1.5,
                                top: -blockH
                            }, "-=2.5").to('.about-preloader', .3, {
                                delay: 2,
                                opacity: 0
                            }).call(myFunctionAbout, null, "0").call(function() {
                                timelineAbout.kill();
                            });
                            var sceneAbout = new ScrollMagic.Scene({
                                triggerElement: '.about-preloader',
                                duration: '300%',
                                offset: 0,
                                ease: Linear.easeNone
                            }).setTween(timelineAbout).setPin('.about-preloader').addTo(controller);
                        }
                    }

                    // Lottie animation

                    if ($(window).width() > 500) {
                        AnalysisIcon = lottie.loadAnimation({
                            container: document.getElementById('analysis__icon'),
                            renderer: 'svg',
                            loop: false,
                            autoplay: false,
                            path: pathHome + '/frontend/json/analysis__icon.json'
                        });
                        PlaneIcon = lottie.loadAnimation({
                            container: document.getElementById('thanks-img'),
                            renderer: 'svg',
                            loop: false,
                            autoplay: true,
                            path: pathHome + '/frontend/json/thanks.json'
                        });
                        FAQIcon = lottie.loadAnimation({
                            container: document.getElementById('serv-faq__img'),
                            renderer: 'svg',
                            loop: false,
                            autoplay: false,
                            path: pathHome + '/frontend/json/serv-faq__img.json'
                        });
                    }
                    $(window).on("scroll", function() {
                        if ($(window).width() > 500) {
                            if ($('.analysis').length > 0) {
                                if ($(window).scrollTop() > $('.analysis').offset().top - window.innerHeight / 2) {
                                    AnalysisIcon.play();
                                }
                            }
                            if ($('.serv-faq').length > 0) {
                                if ($(window).scrollTop() > $('.serv-faq').offset().top - window.innerHeight / 2) {
                                    FAQIcon.play();
                                }
                            }
                        }
                        if ($('.focus-now').length > 0) {
                            if ($(window).scrollTop() > $('.focus-now').offset().top - window.innerHeight * 0.4) {
                                $('.focus-now').addClass('active');
                            } else {
                                $('.focus-now').removeClass('active');
                            }
                        }
                        if ($('.jobs-slider-xs').length > 0) {
                            $('.jobs-block').each(function() {
                                if ($(window).scrollTop() > $(this).offset().top - window.innerHeight * .3) {
                                    $('.jobs-block').removeClass('active');
                                    $(this).addClass('active');
                                    var childrenJob = $(this).offset().top;
                                    $('.jobs-slider-xs .jobs-section__link').css('top', childrenJob);
                                }
                            });
                            var jobsTop = $('.jobs-slider-xs').offset().top;
                            var windowsTop = $(window).scrollTop();
                            var jobsLinkTop = windowsTop - jobsTop;
                            if ($(window).scrollTop() > $('.jobs-slider-xs').offset().top - window.innerHeight / 2 && $(window).scrollTop() < $('.jobs-slider-xs').offset().top + $('.jobs-slider-xs').innerHeight() - window.innerHeight / 2) {
                                if (jobsLinkTop < 0) {
                                    $('.jobs-slider-xs .jobs-section__link').css('top', '232.188px');
                                    $('.jobs-slider-xs').find('.jobs-block:first-child').addClass('active');
                                } else {}
                            }
                        }
                    });
                    $('.jobs-slider-xs').find('.jobs-block:first-child').addClass('active');
                    $('.jobs-slider-xs .jobs-section__link').css('top', '232.188px');

                    //CREATE NAV LIST

                    if ($('.article-section').length > 0) {
                        var contentContainer = document.querySelector('.content'); // Add this div to the html
                        var headings = contentContainer.querySelectorAll('h1,h2,h3,h4'); // You can do as many or as few headings as you need.

                        var tocContainer = document.querySelector('.web-designs'); // Add this div to the HTML

                        // create ul element and set the attributes.
                        var ul = document.createElement('ul');
                        ul.setAttribute('id', 'tocList');
                        ul.setAttribute('class', 'sidenav');

                        // Loop through the headings NodeList
                        for (i = 0; i <= headings.length - 1; i++) {
                            var id = headings[i].innerHTML.toLowerCase().replace(/ /g, "-"); // Set the ID to the header text, all lower case with hyphens instead of spaces.
                            var level = headings[i].localName.replace("h", ""); // Getting the header a level for hierarchy
                            var title = headings[i].innerHTML; // Set the title to the text of the header

                            headings[i].setAttribute("id", id); // Set header ID to its text in lower case text with hyphens instead of spaces.

                            var li = document.createElement('li'); // create li element.
                            li.setAttribute('class', 'sidenav__item'); // Assign a class to the li

                            var a = document.createElement('a'); // Create a link
                            a.setAttribute("href", "#" + id); // Set the href to the heading ID
                            a.innerHTML = title; // Set the link text to the heading text

                            // Creeate the hierarchy
                            // add a class for css
                            if (level == 1) {
                                li.appendChild(a); // Append the link to the list item
                                ul.appendChild(li); // append li to ul.
                            } else if (level == 2) {
                                child = document.createElement('ul'); // Create a sub-list
                                child.setAttribute('class', 'sidenav__sublist');
                                li.appendChild(a);
                                child.appendChild(li);
                                ul.appendChild(child);
                            } else if (level == 3) {
                                grandchild = document.createElement('ul');
                                grandchild.setAttribute('class', 'sidenav__sublist');
                                li.appendChild(a);
                                grandchild.appendChild(li);
                                child.appendChild(grandchild);
                                console.log(child);
                            } else if (level == 4) {
                                great_grandchild = document.createElement('ul');
                                great_grandchild.setAttribute('class', 'sidenav__sublist');
                                li.append(a);
                                great_grandchild.appendChild(li);
                                grandchild.appendChild(great_grandchild);
                            }
                        }
                        tocContainer.appendChild(ul); // add list to the container

                        // Add a class to the first list item to allow for toggling active state.
                        var links = tocContainer.getElementsByClassName("sidenav__item");
                        links[0].classList.add('current');

                        // Loop through the links and add the active class to the current/clicked link
                        for (var i = 0; i < links.length; i++) {
                            links[i].addEventListener("click", function() {
                                var current = document.getElementsByClassName("current");
                                current[0].className = current[0].className.replace(" current", "");
                                this.className += " current";
                            });
                        }
                    }

                    //SCROLL DOWN

                    $('.web-designs ul li a').on('click', function(e) {
                        e.preventDefault();
                        var href = $(this).attr('href');
                        $('html, body').animate({
                            scrollTop: $(href).offset().top - 20
                        }, '1200');
                    });

                    // FOOTER HEIGHT
                    function footer_behind_ctn() {
                        var footerHeight = $('.footer').outerHeight();
                        $('.main').css('margin-bottom', footerHeight);
                    }
                    footer_behind_ctn();
                    if ($(window).width() > 500) {
                        // Splitting
                        Splitting({
                            target: ".intro-section__title",
                            by: "chars"
                        });
                    }
                    var cards = document.querySelectorAll('.char');
                    var lasttouchedcard;
                    for (i = 0; i < cards.length; i++) {
                        cards[i].addEventListener('touchstart', function(e) {
                            if (lasttouchedcard) {
                                unhovercard(lasttouchedcard);
                            }
                            lasttouchedcard = this;
                            this.addEventListener('touchmove', touchmoveHandler, true);
                        }, true);
                        cards[i].addEventListener('touchend', function(e) {
                            this.removeEventListener('touchmove', touchmoveHandler, true);
                        }, true);
                        cards[i].addEventListener('touchcancel', function(e) {
                            this.removeEventListener('touchmove', touchmoveHandler, true);
                        }, true);
                    }

                    function touchmoveHandler(e) {
                        elements = document.elementsFromPoint(e.touches[0].clientX, e.touches[0].clientY);
                        if (elements[0].classList && elements[0].classList.contains('char') && elements[0] != lasttouchedcard) {
                            hovercard(elements[0]);
                            if (lasttouchedcard) {
                                unhovercard(lasttouchedcard);
                            }
                            lasttouchedcard = elements[0];
                        }
                    }

                    function hovercard(card) {
                        card.classList.add('active');
                        setTimeout(function() {
                            card.classList.remove('active');
                        }, 300);
                    }

                    function unhovercard(card) {
                        card.classList.remove('active');
                    }

                    //Jobs link hover

                    $('.jobs-block').on('mouseenter touchstart', function() {
                        $('.jobs-section__link').addClass('active');
                    });
                    $('.jobs-block').on('mouseleave touchend', function() {
                        $('.jobs-section__link').removeClass('active');
                    });
                    $('.customer-stories__title').click(function(e) {
                        e.preventDefault();
                    });
                    $('.open-service-menu').click(function(e) {
                        e.preventDefault();
                        $('body').addClass('collapse-header opened-services-menu');
                    });

                    // Scripts which runs at window resize
                    $(window).on('resize', function() {
                        footer_behind_ctn();
                    });

                    // Scripts which runs at window orientationchange
                    $(window).on('orientationchange', function() {
                        setHeight();
                        footer_behind_ctn();
                    });

                    function DropDown(el) {
                        this.dd = el;
                        this.placeholder = this.dd.children('span');
                        this.opts = this.dd.find('ul li');
                        this.val = '';
                        this.index = -1;
                        this.initEvents();
                    }
                    DropDown.prototype = {
                        initEvents: function initEvents() {
                            var obj = this;
                            obj.dd.on('click', function(e) {
                                e.stopPropagation();
                                $(this).toggleClass('active');
                            });
                            obj.opts.on('click', function() {
                                var opt = $(this);
                                obj.val = opt.text();
                                obj.index = opt.index();
                                obj.placeholder.text(obj.val);
                                opt.siblings().removeClass('selected');
                                opt.filter(':contains("' + obj.val + '")').addClass('selected');
                            }).change();
                        },
                        getValue: function getValue() {
                            return this.val;
                        },
                        getIndex: function getIndex() {
                            return this.index;
                        }
                    };
                    $(function() {
                        // create new variable for each menu
                        var dd1 = new DropDown($('.lang'));
                        // var dd2 = new DropDown($('#other-gases'));
                        $(document).click(function() {
                            // close menu on document click
                            $('.lang').removeClass('active');
                        });
                    });
                });
                document.addEventListener("DOMContentLoaded", function() {
                    var divc = document.querySelectorAll('div[style]');
                    console.log(divc);
                    for (var i = 0, len = divc.length; i < len; i++) {
                        var actdisplay = window.getComputedStyle(divc[i], null).display;
                        var actclear = window.getComputedStyle(divc[i], null).clear;
                        if (actdisplay == 'block' && actclear == 'both') {
                            divc[i].remove();
                        }
                    }
                });
                (function($) {
                    $(window).on('load', function() {
                        window.loaded = !0;
                    });
                    $(function() {
                        $.fn.infiniteslide = function(options) {
                            var settings = $.extend({
                                'speed': 100,
                                'direction': 'left',
                                'pauseonhover': !0,
                                'responsive': !1,
                                'clone': 1
                            }, options);
                            var setCss = function setCss(obj, direction) {
                                $(obj).wrap('<div class="infiniteslide_wrap"></div>').parent().css({
                                    overflow: 'hidden'
                                });
                                if (direction == 'up' || direction == 'down') {
                                    var d = 'column';
                                } else {
                                    var d = 'row';
                                }
                                $(obj).css({
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    alignItems: 'center',
                                    '-ms-flex-align': 'center',
                                    flexDirection: d
                                }).children().css({
                                    flex: 'none',
                                    display: 'block'
                                });
                            };
                            var setClone = function setClone(obj, clone) {
                                var $clone = $(obj).children().clone(!0).addClass('infiniteslide_clone');
                                var i = 1;
                                while (i <= clone) {
                                    $clone.clone(!0).appendTo($(obj));
                                    i++;
                                }
                            };
                            var getWidth = function getWidth(obj) {
                                var w = 0;
                                $(obj).children(':not(.infiniteslide_clone)').each(function(key, value) {
                                    w = w + $(this).outerWidth(!0);
                                });
                                return w;
                            };
                            var getHeight = function getHeight(obj) {
                                var h = 0;
                                $(obj).children(':not(.infiniteslide_clone)').each(function(key, value) {
                                    h = h + $(this).outerHeight(!0);
                                });
                                return h;
                            };
                            var getSpeed = function getSpeed(l, s) {
                                return l / s;
                            };
                            var getNum = function getNum(obj, direction) {
                                var num = 0;
                                if (direction == 'up' || direction == 'down') {
                                    num = getHeight(obj);
                                } else {
                                    num = getWidth(obj);
                                }
                                return num;
                            };
                            var getTranslate = function getTranslate(num, direction) {
                                if (direction == 'up' || direction == 'down') {
                                    var i = '0,-' + num + 'px,0';
                                } else {
                                    var i = '-' + num + 'px,0,0';
                                }
                                return i;
                            };
                            var setAnim = function setAnim(obj, id, direction, speed) {
                                var num = getNum(obj, direction);
                                if (direction == 'up' || direction == 'down') {
                                    $(obj).parent('.infiniteslide_wrap').css({
                                        height: num + 'px'
                                    });
                                }
                                var i = getTranslate(num, direction);
                                $(obj).attr('data-style', 'infiniteslide' + id);
                                var css = '@keyframes infiniteslide' + id + '{' + 'from {transform:translate3d(0,0,0);}' + 'to {transform:translate3d(' + i + ');}' + '}';
                                $('<style />').attr('id', 'infiniteslide' + id + '_style').html(css).appendTo('head');
                                if (direction == 'right' || direction == 'down') {
                                    var reverse = ' reverse';
                                } else {
                                    var reverse = '';
                                }
                                $(obj).css({
                                    animation: 'infiniteslide' + id + ' ' + getSpeed(num, speed) + 's linear 0s infinite' + reverse
                                });
                            };
                            var setStop = function setStop(obj) {
                                $(obj).on('mouseenter', function() {
                                    $(this).css({
                                        animationPlayState: 'paused'
                                    });
                                }).on('mouseleave', function() {
                                    $(this).css({
                                        animationPlayState: 'running'
                                    });
                                });
                            };
                            var setResponsive = function setResponsive(obj, direction) {
                                var num = getNum(obj, direction);
                                var i = getTranslate(num, direction);
                                return i;
                            };
                            return this.each(function(key, value) {
                                var $this = $(this);
                                var num = Date.now() + Math.floor(10000 * Math.random()).toString(16);
                                if (settings.pauseonhover == !0) {
                                    setStop($this);
                                }
                                var _onload = function _onload() {
                                    setCss($this, settings.direction);
                                    setClone($this, settings.clone);
                                    setAnim($this, num, settings.direction, settings.speed);
                                    if (settings.responsive) {
                                        $(window).on('resize', function() {
                                            var i = setResponsive($this, settings.direction);
                                            var styleid = $this.attr('data-style');
                                            var stylehtml = $('#' + styleid + '_style').html();
                                            var stylehtml_new = stylehtml.replace(/to {transform:translate3d\((.*?)\)/, 'to {transform:translate3d(' + i + ')');
                                            $('#' + styleid + '_style').html(stylehtml_new);
                                        });
                                    }
                                };
                                if (window.loaded) {
                                    _onload();
                                } else {
                                    $(window).on('load', _onload);
                                }
                            });
                        };
                    });
                })(jQuery);
                $(document).ready(function() {
                    if ($(window).width() > 767) {
                        var logoSpeed = 40;
                        var logoSpeed2 = 20;
                    } else {
                        var logoSpeed = 10;
                        var logoSpeed2 = 10;
                    }
                    $('.grow-online__slide-inner').infiniteslide({
                        'direction': 'left',
                        'clone': 2,
                        'pauseonhover': false,
                        'speed': logoSpeed
                    });
                    $('.left-direction').infiniteslide({
                        'direction': 'left',
                        'clone': 2,
                        'pauseonhover': false,
                        'speed': logoSpeed2
                    });
                    $('.right-direction').infiniteslide({
                        'direction': 'right',
                        'clone': 2,
                        'pauseonhover': false,
                        'speed': logoSpeed2
                    });
                });

                /***/
            }),

        /***/
        "./scss/_fonts.scss":
            /*!**************************!*\
            	!*** ./scss/_fonts.scss ***!
            	\**************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                // extracted by mini-css-extract-plugin


                /***/
            }),

        /***/
        "./scss/_vars.scss":
            /*!*************************!*\
            	!*** ./scss/_vars.scss ***!
            	\*************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                // extracted by mini-css-extract-plugin


                /***/
            }),

        /***/
        "./scss/main.scss":
            /*!************************!*\
            	!*** ./scss/main.scss ***!
            	\************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                // extracted by mini-css-extract-plugin


                /***/
            }),

        /***/
        "../node_modules/normalize.css/normalize.css":
            /*!***************************************************!*\
            	!*** ../node_modules/normalize.css/normalize.css ***!
            	\***************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                // extracted by mini-css-extract-plugin


                /***/
            })

        /******/
    });
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/compat get default export */
    /******/
    (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = (module) => {
            /******/
            var getter = module && module.__esModule ?
                /******/
                () => (module['default']) :
                /******/
                () => (module);
            /******/
            __webpack_require__.d(getter, {
                a: getter
            });
            /******/
            return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
        "use strict";
        /*!***********************!*\
        	!*** ./js/webpack.js ***!
        	\***********************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../scss/_fonts.scss */ "./scss/_fonts.scss");
        /* harmony import */
        var _scss_vars_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../scss/_vars.scss */ "./scss/_vars.scss");
        /* harmony import */
        var normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! normalize.css */ "../node_modules/normalize.css/normalize.css");
        /* harmony import */
        var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../scss/main.scss */ "./scss/main.scss");
        /* harmony import */
        var _custom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./_custom.js */ "./js/_custom.js");
        /* harmony import */
        var _custom_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_custom_js__WEBPACK_IMPORTED_MODULE_4__);
        //styles





        //js


    })();

    /******/
})();
//# sourceMappingURL=main.js.map