!function(e){function t(t,o){if(this.element=t,this.options=e.extend({},i,o),e(this.element).data("max-height",this.options.maxHeight),e(this.element).data("height-margin",this.options.heightMargin),delete this.options.maxHeight,this.options.embedCSS&&!a){var n=".readmore-js-toggle, .readmore-js-section { "+this.options.sectionCSS+" } .readmore-js-section { overflow: hidden; }";!function(e,t){var s=e.createElement("style");s.type="text/css",s.styleSheet?s.styleSheet.cssText=t:s.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(s)}(document,n),a=!0}this._defaults=i,this._name=s,this.init()}var s="readmore",i={speed:100,maxHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,sectionCSS:"display: block; width: 100%;",startOpen:!1,expandedClass:"readmore-js-expanded",collapsedClass:"readmore-js-collapsed",beforeToggle:function(){},afterToggle:function(){}},a=!1;t.prototype={init:function(){var t=this;e(this.element).each(function(){var s=e(this),i=s.css("max-height").replace(/[^-\d\.]/g,"")>s.data("max-height")?s.css("max-height").replace(/[^-\d\.]/g,""):s.data("max-height"),a=s.data("height-margin");if("none"!=s.css("max-height")&&s.css("max-height","none"),t.setBoxHeight(s),s.outerHeight(!0)<=i+a)return!0;s.addClass("readmore-js-section "+t.options.collapsedClass).data("collapsedHeight",i);var o=t.options.startOpen?t.options.lessLink:t.options.moreLink;s.after(e(o).on("click",function(e){t.toggleSlider(this,s,e)}).addClass("readmore-js-toggle")),t.options.startOpen||s.css({height:i})}),e(window).on("resize",function(e){t.resizeBoxes()})},toggleSlider:function(t,s,i){i.preventDefault();var a=this,o=newLink=sectionClass="",n=!1,h=e(s).data("collapsedHeight");e(s).height()<=h?(o=e(s).data("expandedHeight")+"px",newLink="lessLink",n=!0,sectionClass=a.options.expandedClass):(o=h,newLink="moreLink",sectionClass=a.options.collapsedClass),a.options.beforeToggle(t,s,n),e(s).animate({height:o},{duration:a.options.speed,complete:function(){a.options.afterToggle(t,s,n),e(t).replaceWith(e(a.options[newLink]).on("click",function(e){a.toggleSlider(this,s,e)}).addClass("readmore-js-toggle")),e(this).removeClass(a.options.collapsedClass+" "+a.options.expandedClass).addClass(sectionClass)}})},setBoxHeight:function(e){var t=e.clone().css({height:"auto",width:e.width(),overflow:"hidden"}).insertAfter(e),s=t.outerHeight(!0);t.remove(),e.data("expandedHeight",s)},resizeBoxes:function(){var t=this;e(".readmore-js-section").each(function(){var s=e(this);t.setBoxHeight(s),(s.height()>s.data("expandedHeight")||s.hasClass(t.options.expandedClass)&&s.height()<s.data("expandedHeight"))&&s.css("height",s.data("expandedHeight"))})},destroy:function(){var t=this;e(this.element).each(function(){var s=e(this);s.removeClass("readmore-js-section "+t.options.collapsedClass+" "+t.options.expandedClass).css({"max-height":"",height:"auto"}).next(".readmore-js-toggle").remove(),s.removeData()})}},e.fn[s]=function(i){var a=arguments;return void 0===i||"object"==typeof i?this.each(function(){if(e.data(this,"plugin_"+s)){var a=e.data(this,"plugin_"+s);a.destroy.apply(a)}e.data(this,"plugin_"+s,new t(this,i))}):"string"==typeof i&&"_"!==i[0]&&"init"!==i?this.each(function(){var o=e.data(this,"plugin_"+s);o instanceof t&&"function"==typeof o[i]&&o[i].apply(o,Array.prototype.slice.call(a,1))}):void 0}}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRtb3JlLmpzIl0sIm5hbWVzIjpbIiQiLCJSZWFkbW9yZSIsImVsZW1lbnQiLCJvcHRpb25zIiwidGhpcyIsImV4dGVuZCIsImRlZmF1bHRzIiwiZGF0YSIsIm1heEhlaWdodCIsImhlaWdodE1hcmdpbiIsImVtYmVkQ1NTIiwiY3NzRW1iZWRkZWQiLCJzdHlsZXMiLCJzZWN0aW9uQ1NTIiwiZCIsInUiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZG9jdW1lbnQiLCJfZGVmYXVsdHMiLCJfbmFtZSIsInJlYWRtb3JlIiwiaW5pdCIsInNwZWVkIiwibW9yZUxpbmsiLCJsZXNzTGluayIsInN0YXJ0T3BlbiIsImV4cGFuZGVkQ2xhc3MiLCJjb2xsYXBzZWRDbGFzcyIsImJlZm9yZVRvZ2dsZSIsImFmdGVyVG9nZ2xlIiwicHJvdG90eXBlIiwiJHRoaXMiLCJlYWNoIiwiY3VycmVudCIsInJlcGxhY2UiLCJzZXRCb3hIZWlnaHQiLCJvdXRlckhlaWdodCIsImFkZENsYXNzIiwidXNlTGluayIsImFmdGVyIiwib24iLCJldmVudCIsInRvZ2dsZVNsaWRlciIsImhlaWdodCIsIndpbmRvdyIsInJlc2l6ZUJveGVzIiwidHJpZ2dlciIsInByZXZlbnREZWZhdWx0IiwibmV3SGVpZ2h0IiwibmV3TGluayIsInNlY3Rpb25DbGFzcyIsImV4cGFuZGVkIiwiY29sbGFwc2VkSGVpZ2h0IiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwiY29tcGxldGUiLCJyZXBsYWNlV2l0aCIsInJlbW92ZUNsYXNzIiwiZWwiLCJjbG9uZSIsIndpZHRoIiwib3ZlcmZsb3ciLCJpbnNlcnRBZnRlciIsInJlbW92ZSIsImhhc0NsYXNzIiwiZGVzdHJveSIsIm1heC1oZWlnaHQiLCJuZXh0IiwicmVtb3ZlRGF0YSIsImZuIiwiYXJncyIsImFy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QUFNbkMsUUFBUThCLGVBQWVqQixLQUFLeUQsYUFBYyxHQUFJdkIsT0FBVSxTQUFTd0IsS0FBSyx1QkFBdUJKLFNBRXJMOUIsRUFBUW1DLGlCQUtkM0UsRUFBRTRFLEdBQUdqRCxHQUFZLFNBQVV4QixHQUN6QixJQUFJMEUsRUFBT0MsVUFDWCxZQUFBLElBQUkzRSxHQUE0QyxpQkFBWkEsRUFDM0JDLEtBQUttQyxLQUFLLFdBQ2YsR0FBSXZDLEVBQUVPLEtBQUtILEtBQU0sVUFBWXVCLEdBQVcsQ0FDdEMsSUFBSW9ELEVBQVcvRSxFQUFFTyxLQUFLSCxLQUFNLFVBQVl1QixHQUN4Q29ELEVBQWtCUCxRQUFFUSxNQUFNRCxHQUc1Qi9FLEVBQUVPLEtBQUtILEtBQU0sVUFBWXVCLEVBQVUsSUFBSTFCLEVBQVVHLEtBQU1ELE1BRTdCLGlCQUFaQSxHQUF1QyxNQUFmQSxFQUFRLElBQTBCLFNBQVpBLEVBQ3ZEQyxLQUFLbUMsS0FBSyxXQUNmLElBQUl3QyxFQUFXL0UsRUFBRU8sS0FBS0gsS0FBTSxVQUFZdUIsR0FDcENvRCxhQUFvQjlFLEdBQXlDLG1CQUF0QjhFLEVBQVM1RSxJQUNsRDRFLEVBQVM1RSxHQUFTNkUsTUFBT0QsRUFBVUUsTUFBTTVDLFVBQVU2QyxNQUFNQyxLQUFNTixFQUFNLFdBQUEsR0FuTDlFLENBd0xFTyIsImZpbGUiOiJyZWFkbW9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogUmVhZG1vcmUuanMgalF1ZXJ5IHBsdWdpblxuICogQXV0aG9yOiBAamVkX2Zvc3RlclxuICogUHJvamVjdCBob21lOiBqZWRmb3N0ZXIuZ2l0aHViLmlvL1JlYWRtb3JlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG47KGZ1bmN0aW9uKCQpIHtcblxuICB2YXIgcmVhZG1vcmUgPSAncmVhZG1vcmUnLFxuICAgICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIHNwZWVkOiAxMDAsXG4gICAgICAgIG1heEhlaWdodDogMjAwLFxuICAgICAgICBoZWlnaHRNYXJnaW46IDE2LFxuICAgICAgICBtb3JlTGluazogJzxhIGhyZWY9XCIjXCI+UmVhZCBNb3JlPC9hPicsXG4gICAgICAgIGxlc3NMaW5rOiAnPGEgaHJlZj1cIiNcIj5DbG9zZTwvYT4nLFxuICAgICAgICBlbWJlZENTUzogdHJ1ZSxcbiAgICAgICAgc2VjdGlvbkNTUzogJ2Rpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsnLFxuICAgICAgICBzdGFydE9wZW46IGZhbHNlLFxuICAgICAgICBleHBhbmRlZENsYXNzOiAncmVhZG1vcmUtanMtZXhwYW5kZWQnLFxuICAgICAgICBjb2xsYXBzZWRDbGFzczogJ3JlYWRtb3JlLWpzLWNvbGxhcHNlZCcsXG5cbiAgICAgICAgLy8gY2FsbGJhY2tzXG4gICAgICAgIGJlZm9yZVRvZ2dsZTogZnVuY3Rpb24oKXt9LFxuICAgICAgICBhZnRlclRvZ2dsZTogZnVuY3Rpb24oKXt9XG4gICAgICB9LFxuICAgICAgY3NzRW1iZWRkZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBSZWFkbW9yZSggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAkKHRoaXMuZWxlbWVudCkuZGF0YSgnbWF4LWhlaWdodCcsIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQpO1xuICAgICQodGhpcy5lbGVtZW50KS5kYXRhKCdoZWlnaHQtbWFyZ2luJywgdGhpcy5vcHRpb25zLmhlaWdodE1hcmdpbik7XG5cbiAgICBkZWxldGUodGhpcy5vcHRpb25zLm1heEhlaWdodCk7XG5cbiAgICBpZih0aGlzLm9wdGlvbnMuZW1iZWRDU1MgJiYgISBjc3NFbWJlZGRlZCkge1xuICAgICAgdmFyIHN0eWxlcyA9ICcucmVhZG1vcmUtanMtdG9nZ2xlLCAucmVhZG1vcmUtanMtc2VjdGlvbiB7ICcgKyB0aGlzLm9wdGlvbnMuc2VjdGlvbkNTUyArICcgfSAucmVhZG1vcmUtanMtc2VjdGlvbiB7IG92ZXJmbG93OiBoaWRkZW47IH0nO1xuXG4gICAgICAoZnVuY3Rpb24oZCx1KSB7XG4gICAgICAgIHZhciBjc3M9ZC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBjc3MudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIGlmKGNzcy5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgICBjc3Muc3R5bGVTaGVldC5jc3NUZXh0ID0gdTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNzcy5hcHBlbmRDaGlsZChkLmNyZWF0ZVRleHROb2RlKHUpKTtcbiAgICAgICAgfVxuICAgICAgICBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcbiAgICAgIH0oZG9jdW1lbnQsIHN0eWxlcykpO1xuXG4gICAgICBjc3NFbWJlZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICB0aGlzLl9uYW1lID0gcmVhZG1vcmU7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIFJlYWRtb3JlLnByb3RvdHlwZSA9IHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG1heEhlaWdodCA9IChjdXJyZW50LmNzcygnbWF4LWhlaWdodCcpLnJlcGxhY2UoL1teLVxcZFxcLl0vZywgJycpID4gY3VycmVudC5kYXRhKCdtYXgtaGVpZ2h0JykpID8gY3VycmVudC5jc3MoJ21heC1oZWlnaHQnKS5yZXBsYWNlKC9bXi1cXGRcXC5dL2csICcnKSA6IGN1cnJlbnQuZGF0YSgnbWF4LWhlaWdodCcpLFxuICAgICAgICAgICAgaGVpZ2h0TWFyZ2luID0gY3VycmVudC5kYXRhKCdoZWlnaHQtbWFyZ2luJyk7XG5cbiAgICAgICAgaWYoY3VycmVudC5jc3MoJ21heC1oZWlnaHQnKSAhPSAnbm9uZScpIHtcbiAgICAgICAgICBjdXJyZW50LmNzcygnbWF4LWhlaWdodCcsICdub25lJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkdGhpcy5zZXRCb3hIZWlnaHQoY3VycmVudCk7XG5cbiAgICAgICAgaWYoY3VycmVudC5vdXRlckhlaWdodCh0cnVlKSA8PSBtYXhIZWlnaHQgKyBoZWlnaHRNYXJnaW4pIHtcbiAgICAgICAgICAvLyBUaGUgYmxvY2sgaXMgc2hvcnRlciB0aGFuIHRoZSBsaW1pdCwgc28gdGhlcmUncyBubyBuZWVkIHRvIHRydW5jYXRlIGl0LlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnQuYWRkQ2xhc3MoJ3JlYWRtb3JlLWpzLXNlY3Rpb24gJyArICR0aGlzLm9wdGlvbnMuY29sbGFwc2VkQ2xhc3MpLmRhdGEoJ2NvbGxhcHNlZEhlaWdodCcsIG1heEhlaWdodCk7XG5cbiAgICAgICAgICB2YXIgdXNlTGluayA9ICR0aGlzLm9wdGlvbnMuc3RhcnRPcGVuID8gJHRoaXMub3B0aW9ucy5sZXNzTGluayA6ICR0aGlzLm9wdGlvbnMubW9yZUxpbms7XG4gICAgICAgICAgY3VycmVudC5hZnRlcigkKHVzZUxpbmspLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7ICR0aGlzLnRvZ2dsZVNsaWRlcih0aGlzLCBjdXJyZW50LCBldmVudCkgfSkuYWRkQ2xhc3MoJ3JlYWRtb3JlLWpzLXRvZ2dsZScpKTtcblxuICAgICAgICAgIGlmKCEkdGhpcy5vcHRpb25zLnN0YXJ0T3Blbikge1xuICAgICAgICAgICAgY3VycmVudC5jc3Moe2hlaWdodDogbWF4SGVpZ2h0fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAkdGhpcy5yZXNpemVCb3hlcygpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRvZ2dsZVNsaWRlcjogZnVuY3Rpb24odHJpZ2dlciwgZWxlbWVudCwgZXZlbnQpXG4gICAge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyICR0aGlzID0gdGhpcyxcbiAgICAgICAgICBuZXdIZWlnaHQgPSBuZXdMaW5rID0gc2VjdGlvbkNsYXNzID0gJycsXG4gICAgICAgICAgZXhwYW5kZWQgPSBmYWxzZSxcbiAgICAgICAgICBjb2xsYXBzZWRIZWlnaHQgPSAkKGVsZW1lbnQpLmRhdGEoJ2NvbGxhcHNlZEhlaWdodCcpO1xuXG4gICAgICBpZiAoJChlbGVtZW50KS5oZWlnaHQoKSA8PSBjb2xsYXBzZWRIZWlnaHQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gJChlbGVtZW50KS5kYXRhKCdleHBhbmRlZEhlaWdodCcpICsgJ3B4JztcbiAgICAgICAgbmV3TGluayA9ICdsZXNzTGluayc7XG4gICAgICAgIGV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgc2VjdGlvbkNsYXNzID0gJHRoaXMub3B0aW9ucy5leHBhbmRlZENsYXNzO1xuICAgICAgfVxuXG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY29sbGFwc2VkSGVpZ2h0O1xuICAgICAgICBuZXdMaW5rID0gJ21vcmVMaW5rJztcbiAgICAgICAgc2VjdGlvbkNsYXNzID0gJHRoaXMub3B0aW9ucy5jb2xsYXBzZWRDbGFzcztcbiAgICAgIH1cblxuICAgICAgLy8gRmlyZSBiZWZvcmVUb2dnbGUgY2FsbGJhY2tcbiAgICAgICR0aGlzLm9wdGlvbnMuYmVmb3JlVG9nZ2xlKHRyaWdnZXIsIGVsZW1lbnQsIGV4cGFuZGVkKTtcblxuICAgICAgJChlbGVtZW50KS5hbmltYXRlKHsnaGVpZ2h0JzogbmV3SGVpZ2h0fSwge2R1cmF0aW9uOiAkdGhpcy5vcHRpb25zLnNwZWVkLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRmlyZSBhZnRlclRvZ2dsZSBjYWxsYmFja1xuICAgICAgICAgICR0aGlzLm9wdGlvbnMuYWZ0ZXJUb2dnbGUodHJpZ2dlciwgZWxlbWVudCwgZXhwYW5kZWQpO1xuXG4gICAgICAgICAgJCh0cmlnZ2VyKS5yZXBsYWNlV2l0aCgkKCR0aGlzLm9wdGlvbnNbbmV3TGlua10pLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7ICR0aGlzLnRvZ2dsZVNsaWRlcih0aGlzLCBlbGVtZW50LCBldmVudCkgfSkuYWRkQ2xhc3MoJ3JlYWRtb3JlLWpzLXRvZ2dsZScpKTtcblxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJHRoaXMub3B0aW9ucy5jb2xsYXBzZWRDbGFzcyArICcgJyArICR0aGlzLm9wdGlvbnMuZXhwYW5kZWRDbGFzcykuYWRkQ2xhc3Moc2VjdGlvbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNldEJveEhlaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGVsID0gZWxlbWVudC5jbG9uZSgpLmNzcyh7J2hlaWdodCc6ICdhdXRvJywgJ3dpZHRoJzogZWxlbWVudC53aWR0aCgpLCAnb3ZlcmZsb3cnOiAnaGlkZGVuJ30pLmluc2VydEFmdGVyKGVsZW1lbnQpLFxuICAgICAgICAgIGhlaWdodCA9IGVsLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICBlbC5yZW1vdmUoKTtcblxuICAgICAgZWxlbWVudC5kYXRhKCdleHBhbmRlZEhlaWdodCcsIGhlaWdodCk7XG4gICAgfSxcblxuICAgIHJlc2l6ZUJveGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICQoJy5yZWFkbW9yZS1qcy1zZWN0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuXG4gICAgICAgICR0aGlzLnNldEJveEhlaWdodChjdXJyZW50KTtcblxuICAgICAgICBpZihjdXJyZW50LmhlaWdodCgpID4gY3VycmVudC5kYXRhKCdleHBhbmRlZEhlaWdodCcpIHx8IChjdXJyZW50Lmhhc0NsYXNzKCR0aGlzLm9wdGlvbnMuZXhwYW5kZWRDbGFzcykgJiYgY3VycmVudC5oZWlnaHQoKSA8IGN1cnJlbnQuZGF0YSgnZXhwYW5kZWRIZWlnaHQnKSkgKSB7XG4gICAgICAgICAgY3VycmVudC5jc3MoJ2hlaWdodCcsIGN1cnJlbnQuZGF0YSgnZXhwYW5kZWRIZWlnaHQnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudCA9ICQodGhpcyk7XG5cbiAgICAgICAgY3VycmVudC5yZW1vdmVDbGFzcygncmVhZG1vcmUtanMtc2VjdGlvbiAnICsgJHRoaXMub3B0aW9ucy5jb2xsYXBzZWRDbGFzcyArICcgJyArICR0aGlzLm9wdGlvbnMuZXhwYW5kZWRDbGFzcykuY3NzKHsnbWF4LWhlaWdodCc6ICcnLCAnaGVpZ2h0JzogJ2F1dG8nfSkubmV4dCgnLnJlYWRtb3JlLWpzLXRvZ2dsZScpLnJlbW92ZSgpO1xuXG4gICAgICAgIGN1cnJlbnQucmVtb3ZlRGF0YSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gICQuZm5bcmVhZG1vcmVdID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJC5kYXRhKHRoaXMsICdwbHVnaW5fJyArIHJlYWRtb3JlKSkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZSA9ICQuZGF0YSh0aGlzLCAncGx1Z2luXycgKyByZWFkbW9yZSk7XG4gICAgICAgICAgaW5zdGFuY2VbJ2Rlc3Ryb3knXS5hcHBseShpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl8nICsgcmVhZG1vcmUsIG5ldyBSZWFkbW9yZSggdGhpcywgb3B0aW9ucyApKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnNbMF0gIT09ICdfJyAmJiBvcHRpb25zICE9PSAnaW5pdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSAkLmRhdGEodGhpcywgJ3BsdWdpbl8nICsgcmVhZG1vcmUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBSZWFkbW9yZSAmJiB0eXBlb2YgaW5zdGFuY2Vbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0YW5jZVtvcHRpb25zXS5hcHBseSggaW5zdGFuY2UsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmdzLCAxICkgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KShqUXVlcnkpO1xuIl19
