(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{477:function(t,s,n){"use strict";n.r(s);var a=n(2),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("今天无意间看见在必应上搜1014题 第二个就是本博客，真的是很开心了。现在PAT甲级刷了快60题了，复试前刷完139题不知道能不能完成。"),n("br"),t._v("\ngithub地址："),n("a",{attrs:{href:"https://github.com/iofu728/PAT-A-by-iofu728",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/iofu728/PAT-A-by-iofu728"),n("OutboundLink")],1),n("br"),t._v("\n难度：☆☆★"),n("br"),t._v("\n关键词：模拟，晋级赛")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_1056-mice-and-rice-25-☆☆★"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1056-mice-and-rice-25-☆☆★","aria-hidden":"true"}},[this._v("#")]),this._v(" 1056 Mice and Rice 25 ☆☆★")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[t._v("1056.Mice and Rice (25)"),n("br"),t._v("\nMice and Rice is the name of a programming contest in which each programmer must write a piece of code to control the movements of a mouse in a given map. The goal of each mouse is to eat as much rice as possible in order to become a FatMouse.")]),t._v(" "),n("p",[t._v("First the playing order is randomly decided for "),n("code",[t._v("NP")]),t._v(" programmers. Then every "),n("code",[t._v("NG")]),t._v(" programmers are grouped in a match. The fattest mouse in a group wins and enters the next turn. All the losers in this turn are ranked the same. Every "),n("code",[t._v("NG")]),t._v(" winners are then grouped in the next match until a final winner is determined.")]),t._v(" "),n("p",[t._v("For the sake of simplicity, assume that the weight of each mouse is fixed once the programmer submits his/her code. Given the weights of all the mice and the initial playing order, you are supposed to output the ranks for the programmers.")]),t._v(" "),n("p",[t._v("Input Specification:")]),t._v(" "),n("p",[t._v("Each input file contains one test case. For each case, the first line contains 2 positive integers: "),n("code",[t._v("NP")]),t._v(" and "),n("code",[t._v("NG")]),t._v(" (<= 1000), the number of programmers and the maximum number of mice in a group, respectively. If there are less than NG mice at the end of the player’s list, then all the mice left will be put into the last group. The second line contains "),n("code",[t._v("NP")]),t._v(" distinct non-negative numbers "),n("code",[t._v("Wi")]),t._v(" (i=0,…"),n("code",[t._v("NP")]),t._v("-1) where each Wi is the weight of the i-th mouse respectively. The third line gives the initial playing order which is a permutation of 0,…"),n("code",[t._v("NP")]),t._v("-1 (assume that the programmers are numbered from 0 to "),n("code",[t._v("NP")]),t._v("-1). All the numbers in a line are separated by a space.")]),t._v(" "),n("p",[t._v("Output Specification:")]),t._v(" "),n("p",[t._v("For each test case, print the final ranks in a line. The i-th number is the rank of the i-th programmer, and all the numbers must be separated by a space, with no extra space at the end of the line.")]),t._v(" "),n("p",[t._v("Sample Input:"),n("br"),t._v("\n11 3"),n("br"),t._v("\n25 18 0 46 37 3 19 22 57 56 10"),n("br"),t._v("\n6 0 8 7 10 5 9 1 4 2 3")]),t._v(" "),n("p",[t._v("Sample Output:"),n("br"),t._v("\n5 5 5 2 5 5 5 3 1 3 5")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"大意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大意","aria-hidden":"true"}},[this._v("#")]),this._v(" 大意")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("题目有些复杂，归纳起来就是模拟分组比赛问题，有"),s("code",[this._v("NP")]),this._v("只小老鼠，按给定顺序，每"),s("code",[this._v("NG")]),this._v("只小鼠一组，比体重，第一出线，其他同名次。采用晋级赛制，直到第一名产生。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 思路")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("一开始理解题目出了差错，还是自己英语太差，我以为是总决赛的时候所有名次都会产生。自己脑补分成了小组赛while循环和总决赛sort。导致了三个点错误。")]),t._v(" "),n("li",[t._v("首先给了每个小鼠的体重，初始顺序，我们需要根据初始顺序，把小鼠依次翻到一个容器中（z，z是我们遍历的顺序数组）。"),n("br"),t._v("\n然后做循环，每"),n("code",[t._v("NG")]),t._v("只老鼠，放到一个temp数组中，并进行体重sort，取出头名，其他名次=（z.size（）平分ng的组数+1）。"),n("br"),t._v("\n在这里我用了一个"),n("code",[t._v("vector")]),t._v("的"),n("code",[t._v("insert")]),t._v("来实现取"),n("code",[t._v("NG")]),t._v("个node放到temp这个过程。"),n("br"),t._v("\n头名放到x数组，其余放入y数组。"),n("br"),t._v("\n等该轮小组赛结束之后，晋级名单x赋给z。"),n("br"),t._v("\n循环直到晋级“鼠”数小于"),n("code",[t._v("NG")]),t._v("。"),n("br"),t._v("\n然后对总决赛顺序z排序，赋名次。")]),t._v(" "),n("li",[t._v("有些博客说这题是"),n("code",[t._v("queue")]),t._v("题，其实我觉得跟"),n("code",[t._v("queue")]),t._v("一点关系都没有，只是每轮小组赛比完之后，会有个晋级名单，把他放在任何一个容器中都行，整个问题pop的过程不明显。"),n("br"),t._v("\n我潜意识选用了多个熟悉的"),n("code",[t._v("vector")]),t._v("。关键是分组的实现。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[this._v("#")]),this._v(" code")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("<algorithm>")])]),t._v("\n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("<vector>")])]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" node "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" weight"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" idorigin"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rank"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("cmporigin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node a"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node b"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("idorigin "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" b"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("idorigin"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("cmpweight")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node a"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node b"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" b"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("main")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" np"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ng"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("scanf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%d %d"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("np"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("ng"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  vector"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("node"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("v")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// z遍历列")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" np"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("scanf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("v"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    v"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("idorigin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" np"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("scanf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push_back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//    for(int i=0;i<z.size();++i){")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//        cout<<z[i].idorigin<<' '<<z[i].weight<<endl;")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//    }")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 分组选优模拟")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" ng"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("clear")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" postrank "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" ng "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//      cout<<' '<<postrank<<endl;")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 每组选择")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" ng"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vector"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("node"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" temp"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      temp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("insert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("begin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("begin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("begin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" ng"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("begin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" ng"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                                    "),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("sort")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("begin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cmpweight"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      x"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push_back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v('//            cout<<"***"<<temp[0].weight<<\'')]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("//'<<temp[0].idorigin<<endl;")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" temp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("j"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        temp"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" postrank"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v('//              cout<<"###"<<temp[j].weight<<\'')]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//'<<temp[j].idorigin<<' '<<temp[j].rank<<endl;")]),t._v("\n        y"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push_back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    z "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("sort")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("begin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cmpweight"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  z"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  y"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push_back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" z"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    z"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//      cout<<\"$\"<<z[i].weight<<' '<<z[i].idorigin<<'")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//'<<z[i].rank<<endl;")]),t._v("\n    y"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push_back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("sort")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("begin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cmporigin"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" np "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%d "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("np "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])}],!1,null,null,null);o.options.__file="1056.md";s.default=o.exports}}]);