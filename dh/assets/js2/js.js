document.writeln("    <script type=\'text/javascript\'>");
document.writeln("    $(document).ready(function() {");
document.writeln("        $(document).on(\'click\', \'.has-sub\', function(){");
document.writeln("            var _this = $(this)");
document.writeln("            if(!$(this).hasClass(\'expanded\')) {");
document.writeln("               setTimeout(function(){");
document.writeln("                    _this.find(\'ul\').attr(\'style\',\'\')");
document.writeln("               }, 300);");
document.writeln("              ");
document.writeln("            } else {");
document.writeln("                $(\'.has-sub ul\').each(function(id,ele){");
document.writeln("                    var _that = $(this)");
document.writeln("                    if(_this.find(\'ul\')[0] != ele) {");
document.writeln("                        setTimeout(function(){");
document.writeln("                            _that.attr(\'style\',\'\')");
document.writeln("                        }, 300);");
document.writeln("                    }");
document.writeln("                })");
document.writeln("            }");
document.writeln("        })");
document.writeln("        $(\'.user-info-menu .hidden-sm\').click(function(){");
document.writeln("            if($(\'.sidebar-menu\').hasClass(\'collapsed\')) {");
document.writeln("                $(\'.has-sub.expanded > ul\').attr(\'style\',\'\')");
document.writeln("            } else {");
document.writeln("                $(\'.has-sub.expanded > ul\').show()");
document.writeln("            }");
document.writeln("        })");
document.writeln("        $(\'#main-menu li ul li\').click(function() {");
document.writeln("            $(this).siblings(\'li\').removeClass(\'active\'); // 删除其他兄弟元素的样式");
document.writeln("            $(this).addClass(\'active\'); // 添加当前元素的样式");
document.writeln("        });");
document.writeln("        $(\'a.smooth\').click(function(ev) {");
document.writeln("            ev.preventDefault();");
document.writeln("");
document.writeln("            public_vars.$mainMenu.add(public_vars.$sidebarProfile).toggleClass(\'mobile-is-visible\');");
document.writeln("            ps_destroy();");
document.writeln("            $(\'html, body\').animate({");
document.writeln("                scrollTop: $($(this).attr(\'href\')).offset().top - 30");
document.writeln("            }, {");
document.writeln("                duration: 500,");
document.writeln("                easing: \'swing\'");
document.writeln("            });");
document.writeln("        });");
document.writeln("        return false;");
document.writeln("    });");
document.writeln("");
document.writeln("    var href = \'\';");
document.writeln("    var pos = 0;");
document.writeln("    $(\'a.smooth\').click(function(e) {");
document.writeln("        $(\'#main-menu li\').each(function() {");
document.writeln("            $(this).removeClass(\'active\');");
document.writeln("        });");
document.writeln("        $(this).parent(\'li\').addClass(\'active\');");
document.writeln("        e.preventDefault();");
document.writeln("        href = $(this).attr(\'href\');");
document.writeln("        pos = $(href).position().top - 30;");
document.writeln("    });");
document.writeln("    </script>");
document.writeln("	<script src=\'../assets/layer/layer.js\'></script> ");
document.writeln("	<script src=\'../assets/js/tanc.js\'></script>");
document.writeln("    <script src=\'../assets/js/bootstrap.min.js\'></script>");
document.writeln("    <script src=\'../assets/js/TweenMax.min.js\'></script>");
document.writeln("    <script src=\'../assets/js/resizeable.js\'></script>");
document.writeln("    <script src=\'../assets/js/joinable.js\'></script>");
document.writeln("    <script src=\'../assets/js/xenon-api.js\'></script>");
document.writeln("    <script src=\'../assets/js/xenon-toggles.js\'></script>");
document.writeln("    <script src=\'../assets/js/xenon-custom.js\'></script>");
document.writeln("    <script src=\'../assets/js/hitokoto.js\'></script>");
document.writeln("    <script src=\'../assets/js/jquery.lazyload.js\'></script>");
document.writeln("	<!-- 天气 -->");
document.writeln("<script>(function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset=\'utf-8\';P.async=1;a.parentNode.insertBefore(P,a)};T[\'ThinkPageWeatherWidgetObject\']=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent(\'onload\',g)}else{T.addEventListener(\'load\',g,false)}}(window,document,\'script\',\'tpwidget\',\'//widget.seniverse.com/widget/chameleon.js\'))</script>");
document.writeln("<script>tpwidget(\'init\', {");
document.writeln("    \'flavor\': \'slim\',");
document.writeln("    \'location\': \'WX4FBXXFKE4F\',");
document.writeln("    \'geolocation\': \'enabled\',");
document.writeln("    \'language\': \'auto\',");
document.writeln("    \'unit\': \'c\',");
document.writeln("    \'theme\': \'white\',");
document.writeln("    \'container\': \'tp-weather-widget\',");
document.writeln("    \'bubble\': \'enabled\',");
document.writeln("    \'alarmType\': \'badge\',");
document.writeln("    \'uid\': \'U221B38AE4\',");
document.writeln("    \'hash\': \'480a43852afb88bd375ce85216ab26c5\'");
document.writeln("});");
document.writeln("tpwidget(\'show\');</script>");