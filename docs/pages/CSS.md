# 2 CSS

## 2.1**引入样式 link 和 @improt 的区别**

- **link**：
  - 除了加载CSS外，还可以定义RSS等其他事务，且没有兼容性问题
  - link引用CSS时，在页面载入时同时加载；
  - l支持使用Javascript控制DOM去改变样式
- **@import**
  - 只能加载CSS，低版本的浏览器不支持。
  - 需要页面网页完全载入以后加载。所以会出现一开始没有css样式，闪烁一下出现样式后的页面(网速慢的情况下)
  - 不支持Javascript控制DOM去改变样式



## 2.2 CSS选择器

1. 通配选择器， 如 *{}
2. 标签选择器， 如 span{} 
3. 类选择器， 如 .class{}
4. ID 选择器， 如 #id{}
5. 属性选择器， 如 a[href= "segmentfault.com"]{}
6. 伪类选择器， 如 :hover{}
7. 伪元素选择器， 如 ::before{}
8. 后代选择器，如 #first p (#first 内的全部 p 元素)
9. 子代选择器，如 #first p (只选中 #first 下的 p 元素，#first 内部其他元素下的 p 元素无效)
10. 兄弟选择器，如 .a~div (选中 .a 元素后面的所有 div 元素)
11. 相邻选择器，如 .a+div (只选中 .a 元素后面与之相邻的 div 元素)



## 2.3 选择器权重优先级

​	( 数字为可计算权重 )

​	行内样式 1000 >ID选择器100 >属性选择器 10 >伪类选择器 10 >类选择器 10 >元素选择器 1 >伪元素选择器 1 >通配符选择器 0



## 2.4 盒子模型

### 2.4.1 介绍盒子模型

盒模型都是由四个部分组成的，分别是margin、border、padding和content

​	标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同：

- 标准盒模型的width和height属性的范围只包含了content
- IE盒模型的width和height属性的范围包含了border、padding和content

可以通过修改元素的box-sizing属性来改变元素的盒模型：

- `box-sizing: content-box`表示标准盒模型（默认值）
- `box-sizing: border-box`表示IE盒模型（怪异盒模型）

### 2.4.2 外边距叠加

例如两个垂直元素的外边距相遇，这两个外边距将会合并为一个外边距，给谁定的边距大就决定是哪个，且会将另一元素设置的值覆盖

```css
.div1 {
    width: 100px;
    height: 100px;
    background-color: antiquewhite;
    margin-bottom: 100px;
}

.div2 {
    width: 100px;
    height: 100px;
    background-color: aqua;
    margin-top: 50px;
}
```

![image-20220421190946551](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220421190946551.png)



## 2.5 display的属性值及其作用

| **属性值**   | **作用**                                                   |
| ------------ | ---------------------------------------------------------- |
| none         | 元素不显示，并且会从文档流中移除。                         |
| block        | 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。       |
| inline       | 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。 |
| inline-block | 默认宽度为内容宽度，可以设置宽高，同行显示。               |
| list-item    | 像块类型元素一样显示，并添加样式列表标记。                 |
| table        | 此元素会作为块级表格来显示。                               |
| inherit      | 规定应该从父元素继承display属性的值。                      |



## 2.6 display的block、inline和inline-block的区别

- **block：** 会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；
- **inline：**元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
- **inline-block：**将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。

对于行内元素和块级元素，其**特点**如下：

**（1）行内元素**

- 设置宽高无效；
- 可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
- 不会自动换行；

**（2）块级元素**

- 可以设置宽高；
- 设置margin和padding都有效；
- 可以自动换行；
- 多个块状，默认排列从上到下。



## 2.7隐藏元素的方法有哪些

- **display: none**：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。
- **visibility: hidden**：元素在页面中仍占据空间，但是不会响应绑定的监听事件。
- **opacity: 0**：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。
- **position: absolute**：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
- **z-index: 负值**：来使其他元素遮盖住该元素，以此来实现隐藏。
- **clip/clip-path** ：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
- **transform: scale(0,0)**：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。



## 2.8 display:none与visibility:hidden的区别

这两个属性都是让元素隐藏，不可见。**两者区别如下：**

**（1）在渲染树中**

- `display:none`会让元素完全从渲染树中消失，渲染时不会占据任何空间；
- `visibility:hidden`不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。

**（2）是否是继承属性**

- `display:none`是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
- `visibility:hidden`是继承属性，子孙节点消失是由于继承了`hidden`，通过设置`visibility:visible`可以让子孙节点显示；

**（3）**修改常规文档流中元素的 `display` 通常会造成文档的回流，但是修改`visibility`属性只会造成本元素的重绘；

**（4）**如果使用读屏器，设置为`display:none`的内容不会被读取，设置为`visibility:hidden`的内容会被读取。



## 2.9 ::before 和 :after 的双冒号和单冒号有什么区别？

​	冒号(`:`)用于`CSS3`伪类，双冒号(`::`)用于`CSS3`伪元素。

### 2.9.1 伪元素和伪类的区别和作用？

- **伪元素：**在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```css
p::before {content:"第一章：";}
p::after {content:"Hot!";}
p::first-line {background:red;}
p::first-letter {font-size:30px;}
```

- **伪类：**将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```css
a:hover {color: #FF00FF}
p:first-child {color: red}
```

**总结：** 伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。



## 2.10 li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？

浏览器会把inline内联元素间的空白字符（空格、换行、Tab等）渲染成一个空格。为了美观，通常是一个`<li>`放在一行，这导致`<li>`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。

**解决办法：**

1. 为`<li>`设置float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。
2. 将所有`<li>`写在同一行。不足：代码不美观。
3. 将`<ul>`内的字符尺寸直接设为0，即font-size:0。不足：`<ul>`中的其他字符尺寸也被设为0，需要额外重新设定其他字符尺寸，且在Safari浏览器依然会出现空白间隔。
4. 消除`<ul>`的字符间隔letter-spacing:-8px，不足：这也设置了`<li>`内的字符间隔，因此需要将`<li>`内的字符间隔设为默认letter-spacing:normal。



## 2.11 CSS3中有哪些新特性

- 新增各种CSS选择器 （: not(.input)：所有 class 不是“input”的节点）
- 圆角 （border-radius:8px）
- 多列布局 （multi-column layout）
- 阴影和反射 （Shadoweflect）
- 文字特效 （text-shadow）
- 文字渲染 （Text-decoration）
- 线性渐变 （gradient）
- 旋转 （transform）
- 增加了旋转,缩放,定位,倾斜,动画,多背景



## 2.12 常见的图片格式及使用场景

（1）**BMP**，是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常是较大的文件。

（2）**GIF**是无损的、采用索引色的点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具有支持动画以及透明的优点。但是GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积较小的场景。

（3）**JPEG**是有损的、采用直接色的点阵图。JPEG的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较GIF更大。

（4）**PNG-8**是无损的、使用索引色的点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8还支持透明度的调节，而GIF并不支持。除非需要动画的支持，否则没有理由使用GIF而不是PNG-8。

（5）**PNG-24**是无损的、使用直接色的点阵图。PNG-24的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24格式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。

（6）**SVG**是无损的矢量图。SVG是矢量图意味着SVG图片由直线和曲线以及绘制它们的方法组成。当放大SVG图片时，看到的还是线和曲线，而不会出现像素点。SVG图片在放大时，不会失真，所以它适合用来绘制Logo、Icon等。

（7）**WebP**是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。

- 在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；
- 在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；
- WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。



## 2.13 对 CSSSprites ( 精灵图 )的理解

CSSSprites（精灵图），将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位。

**优点：**

- 利用`CSS Sprites`能很好地减少网页的http请求，从而大大提高了页面的性能，这是`CSS Sprites`最大的优点；
- `CSS Sprites`能减少图片的字节，把3张图片合并成1张图片的字节总是小于这3张图片的字节总和。

**缺点：**

- 在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率下的自适应页面，如果背景不够宽，很容易出现背景断裂；
- `CSSSprites`在开发的时候相对来说有点麻烦，需要借助`photoshop`或其他工具来对每个背景单元测量其准确的位置。
- 维护方面：`CSS Sprites`在维护的时候比较麻烦，页面背景有少许改动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免改动更多的`CSS`，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动`CSS`。



## 2.14 单行、多行文本溢出隐藏

- 单行文本溢出

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap;         // 规定段落中的文本不进行换行
```

- 多行文本溢出

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```



![image-20220527235100287](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220527235100287.png)

## 2.15 对媒体查询的理解？

媒体查询由⼀个可选的媒体类型和零个或多个使⽤媒体功能的限制了样式表范围的表达式组成，例如宽度、⾼度和颜⾊。媒体查询，添加⾃CSS3，允许内容的呈现针对⼀个特定范围的输出设备⽽进⾏裁剪，⽽不必改变内容本身，适合web⽹⻚应对不同型号的设备⽽做出对应的响应适配。

```css
@media (max-width: 600px) { 
  .facet_sidebar { 
    display: none; 
  } 
}
```



## 2.16 z-index属性在什么情况下会失效

通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index值越大就越是在上层。z-index元素的position属性需要是relative，absolute或是fixed。

z-index属性在下列情况下会失效：

- 父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；
- 元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种；
- 元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block；



## 2.17 常见的CSS布局单位

### 2.17.1 常用的布局单位

像素（`px`），百分比（`%`），`em`，`rem`，`vw/vh`。

**（1）像素**（`px`）是页面布局的基础，一个像素表示终端（电脑、手机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS像素和物理像素：

- **CSS像素**：为web开发者提供，在CSS中使用的一个抽象单位；
- **物理像素**：只与设备的硬件密度有关，任何设备的物理像素都是固定的。

**（2）百分比（`%`）**，当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。

**（3）em和rem**相对于px更具灵活性，它们都是相对长度单位，它们之间的区别：**em相对于父元素，rem相对于根元素。**

- **em：** 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认16px)。(相对父元素的字体大小倍数)。
- **rem：** rem是CSS3新增的一个相对单位，相对于根元素（html元素）的font-size的倍数。**作用**：利用rem可以实现简单的响应式布局，可以利用html元素中字体的大小与屏幕间的比值来设置font-size的值，以此实现当屏幕分辨率变化时让元素也随之变化。

**（4）vw/vh**是与视图窗口有关的单位，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位。

- vw：相对于视窗的宽度，视窗宽度是100vw；
- vh：相对于视窗的高度，视窗高度是100vh；
- vmin：vw和vh中的较小值；
- vmax：vw和vh中的较大值；

vw/vh 和百分比很类似，两者的区别：

- 百分比（`%`）：大部分相对于祖先元素，也有相对于自身的情况比如（border-radius、translate等)
- vw/vm：相对于视窗的尺寸

### **2.17.2 px、em、rem的区别及使用场景**

**三者的区别：**

- px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
- em和rem相对于px更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。
- em是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而rem是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。

**使用场景：**

- 对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用px即可 。
- 对于需要适配各种移动设备，使用rem，例如需要适配iPhone和iPad等分辨率差别比较挺大的设备。



## 2.18 如何根据设计稿进行移动端适配？

移动端适配主要有两个维度：

- **适配不同像素密度，** 针对不同的像素密度，使用 CSS 媒体查询，选择不同精度的图片，以保证图片不会失真；
- **适配不同屏幕大小，** 由于不同的屏幕有着不同的逻辑像素大小，所以如果直接使用 px 作为开发单位，会使得开发的页面在某一款手机上可以准确显示，但是在另一款手机上就会失真。为了适配不同屏幕的大小，应按照比例来还原设计稿的内容。

为了能让页面的尺寸自适应，可以使用 rem，em，vw，vh 等相对单位。



## 2.19 响应式设计的概念及基本原理

响应式网站设计`（Responsive Web design`）是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。

关于原理： 基本原理是通过媒体查询`（@media）`查询检测不同的设备屏幕尺寸做处理。

关于兼容： 页面头部必须有mate声明的`viewport`。



## 2.20 脱离文档流三种方法

1. 浮动 float

2. 固定定位 position:fixed

3. 绝对定位 position: absolute

   

## 2.21 清除浮动

- 给父级div定义`height`属性
- 最后一个浮动元素之后添加一个空的div标签，并添加`clear:both`样式
- 包含浮动元素的父级标签添加`overflow:hidden`或者`overflow:auto`
- 使用 :after 伪元素。

```css
.clear::after{
    content:'';
    display: block;
    clear:both;
}
```



## 2.22 对BFC的理解，如何创建BFC

BFC（块级格式化上下文）是页面盒模型的一种css渲染模式，相当于一个独立的容器，里面的元素和外部的元素互不影响。

**创建BFC的方法：**

1. 根元素：body；

2. 元素设置浮动：float 除 none 以外的值；

3. 元素设置绝对定位：position (absolute、fixed)；

4. display 值为：inline-block、table-cell、table-caption、flex等；

5. overflow 值为：hidden、auto、scroll；

   

## 2.23 position的属性有哪些，区别是什么

position有以下属性值：

| 属性值   | 区别                                                         |
| -------- | ------------------------------------------------------------ |
| absolute | 生成**绝对定位**的元素，**相对于static定位以外的一个父元素进行定位**。元素的位置通过left、top、right、bottom属性进行规定。**（ 脱流 ）** |
| relative | 生成**相对定位**的元素，**相对于其原来的位置进行定位**。元素的位置通过left、top、right、bottom属性进行规定。 |
| fixed    | 生成**固定定位**的元素，指定元素**相对于屏幕视⼝的位置来指定元素位置。元素的位置在屏幕滚动时不会改变**，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。**（脱 流）** |
| static   | 默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。 |
| inherit  | 规定从父元素继承position属性的值                             |

### 2.23.1  absolute与fixed共同点与不同点

**共同点：**

- 改变行内元素的呈现方式，将display置为inline-block 
- 使元素脱离普通文档流，不再占据文档物理空间
- 覆盖非定位文档元素

**不同点：**

- absolute与fixed的根元素不同，absolute的根元素可以设置，fixed根元素是浏览器。
- 在有滚动条的页面中，absolute会跟着父元素进行移动，fixed固定在页面的具体位置。

### 2.23.2 对 sticky 定位的理解

sticky 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：**position: sticky;** 基于用户的滚动位置来定位。

粘性定位的元素是依赖于用户的滚动，在 **position:relative** 与 **position:fixed** 定位之间切换。它的行为就像 **position:relative;** 而当页面滚动超出目标区域时，它的表现就像 **position:fixed;**，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。



## 2.24 rgba() 和 opacity 的透明效果有什么不同？

rgba()和opacity都能实现透明效果，但最大的不同是opacity作用于元素，以及元素内的所有内容的透明度，而rgba()只作用于元素的颜色或其背景色。（设置rgba透明的元素的子元素不会继承透明效果！）



## 2.25 居中

### 2.25.1 行内元素水平居中

```css
.p1 {
    text-align: center;
}
```



### 2.25.2 块级元素水平居中

#### 方法1  margin: auto

```css
.box {
    width: 200px;
    height: 200px;
    /* 直接 margin: auto */
    margin: auto;
}
```

#### 方法2 绝对定位（也可不定宽高实现）

```css
.box {
    width: 200px;
    height: 200px;
    /* 1- 绝对定位 */
    position: absolute;
    /* 2- 设置左或者右50%偏移值 */
    left: 50%;
    /* 3- (-50%, 0) */
    transform: translate(-50%, 0);
} 
```

#### 方法3 绝对定位（也可不定宽高实现） 

```css
 .box1 {
    width: 200px;
    height: 200px;
    /* 1、 绝对定位 */
    position: absolute;
    /* 2、设置左偏移值为 50% */
    left: 50%;
    /* 3、左外边距减去宽度一半 */
    margin-left: -100px;
}
```

#### 方法4 flex justify-content: center;

```css
<div class="d1">
	<div class="d2"></div>
</div>

.d1 {
	width: 200px;
	height: 200px;
	background-color: antiquewhite;
	display: flex;
	justify-content: center;
}
.d2 {
	width: 50px;
	height: 50px;
	background-color: aqua;
}
```



### 2.25.3 行内元素垂直居中

#### 方法1 line-height: 高度

```css
 .pbox1 {
    height: 200px;
}
.p2 {
    /* 设置父块元素相同高度  */
    line-height: 200px;
} 
```



### 2.25.4 块级元素垂直居中

#### 方法1 flex  align-items: center;

```css
.box4 {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: antiquewhite;
}

.box5 {
    width: 50px;
    height: 50px;
    background-color: aqua;
}
```

#### 方法2 使用绝对定位和负外边距对块级元素进行垂直居中

```css
<div id="box">
    <div id="child"></div>
</div>

#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    width: 150px;
    height: 100px;
    background: orange;
    position: absolute;
    top: 50%;
    margin-top: -50px; 
}
```

#### 方法3  使用绝对定位和transform

```css
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    background: orange;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}
```

#### 方法4 绝对定位结合margin: auto

```css
<div id="box">
    <div id="child">test vertical align</div>
</div>

#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    width: 200px;
    height: 100px;
    background: orange;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 100px;
}
```

#### 使用 `line-height` 和 `vertical-align` 对图片进行垂直居中

```css
#box{
    width: 300px;
    height: 300px;
    background: #ddd;
    line-height: 300px;
}
#box img {
    width: 200px;
    height: 200px;
    vertical-align: middle;
}
```



### 2.25.5 水平垂直居中

#### 方法1 绝对定位加margin：auto

```css
<div class="box">
	<div class="child"></div>
</div>
	
.box{
    width: 100vw;
    height: 100vh;
    background-color: antiquewhite;
	/* 父元素设置相对定位 */
    position: relative;
}
.child{
    width: 200px;
    height: 100px;
    background-color: gold;
	/* 自身绝对定位 设置上下左右偏移值为0 margin: auto */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
```

#### 方法2 绝对定位配合负margin

```css
.box{
    width: 100vw;
    height: 100vh;
    background-color: antiquewhite;
	/* 相对定位 */
    position: relative;
}
.child{
    width: 200px;
    height: 100px;
    background-color: gold;
	/* 绝对定位 设置偏移值top和left为50% 外边距margin上下为自身高度的一般，左右为自身宽度的一半 */
    position: absolute;
    top:50%;
    left:50%;
    margin: -50px -100px;
}
```

#### 方法3 绝对定位配合位移

```css
.box{
    width: 100vw;
    height: 100vh;
    background-color: antiquewhite;

    position: relative;
}
.child{
    width: 200px;
    height: 100px;
    background-color: gold;
	/* 绝对定位 设置偏移值top和left为50% transform: translate中设置两个 -50% */
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%)
}
```

#### 方法4 flex布局

```css
.box{
    width: 100vw;
    height: 100vh;
    background-color: antiquewhite;
    
    display: flex;
    justify-content: center;/*水平居中*/
    align-items: center;/*垂直居中*/
}
.child{
    width: 200px;
    height: 100px;
    background-color: gold;
}
```



## 2.26  纯CSS画一条0.5px的直线

```css
<div class="half"></div>

<style>
    .half {
        width: 300px;
        background-color: #000;
        height: 1px; transform: scaleY(0.5); /* 延Y轴缩小1倍 */ 
        transform-origin: 50% 100%; /* 改变元素变形的原点 *
    }
</style>
```



## 2.27 元素高度跟随窗口

​	有时候希望某个元素的高度和窗口是一致的，如果用百分比设置，那html、body等元素也要跟着一顿设置`height: 100%`

- 给div元素设置`height: 100vh`

  

## 2.28 解决图片下显示5px距离问题

- ​	方法1：给父元素设置css样式`font-size: 0`

- ​	方法2：给图片设置`display：block`

- ​	方法3:   给图片设置`vertical-align：bottom`

- ​	方法4： 给父元素设置`line-height: 5px`

  

## 2.29 负margin问题及使用

### 2.29.1 margin负值问题

1. margin-right为负值时，自身不会移动，右侧元素会向左移动相应局距离
2. margin-left为负值时,元素自身向左移动相应距离
3. margin-bottom为负值时，自身不会移动，底部侧元素会向上移动相应局距离
4. margin-top为负值时,元素自身向上移动相应距离

### 2.29.2 【使用案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>负边距使用</title>
	<style>
		* {
			margin: 0;
			padding: 0;
		}

		.wrap {
			/* 利用负值技巧进行整体移动 */
			margin-left: -6px;
		}

		.item {
			float: left;
			width: 20%;
			height: 300px;
			border-left: 6px solid #fff;
			box-sizing: border-box;
		}
	</style>
</head>

<body>
	<div class="wrap">
		<div class="item" style="background-color: red;"></div>
		<div class="item" style="background-color: green;"></div>
		<div class="item" style="background-color: yellow;"></div>
		<div class="item" style="background-color: pink;"></div>
		<div class="item" style="background-color: green;"></div>
	</div>
</body>

</html>
```

![移动前](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfe906e6b2a64bc78f8b3635afb43aa4~tplv-k3u1fbpfcp-watermark.awebp)

![移动后](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a4817da827b408cae902b7ab16e05f7~tplv-k3u1fbpfcp-watermark.awebp)



## 2.30 两栏布局

**一栏宽度固定，一栏宽度自适应**

#### 方法1 利用浮动

```css
 <div class="left">侧栏</div>
 <div class="right">内容</div>

div {
    height: 500px;
}
.left {
    /* 将左边元素宽度设置为200px，并且设置向左浮动 */
    float: left;
    width: 200px;
    background: tomato;
}
.right {
    /* 设置右边元素的margin-left设置为左边元素的宽度，自身宽度自适应 */
    margin-left: 200px;
    width: auto;
    background: gold;
}
```

![image-20220422140232988](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220422140232988.png)

#### 方法2 利用浮动

```css
.left{
     /* 左侧固定大小且设置浮动 */
     width: 100px;
     height: 200px;
     background: red;
     float: left;
 }
 .right{
     /* 右侧元素设置overflow: hidden; 这样右边就触发了BFC，BFC的区域不会与浮动元素发生重叠 */
     height: 300px;
     background: blue;
     overflow: hidden;
 }
```

#### 方法3 利用flex布局，将右边的元素设置为flex:1

```css
.outer {
  display: flex;
  height: 100px;
}
.left {
  /* 将左边元素设置为固定宽度*/
  width: 200px;
  background: tomato;
}
.right {
  /* 右边的元素设置为flex:1 */
  flex: 1;
  background: gold;
}
```

## 2.31 三栏圣杯布局

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./圣杯布局.css">
</head>
<body>
    <!-- 最外层包裹盒子 -->
    <div class="wrap">
        <!-- 头部 -->
        <div id="header">header</div>
        <!-- 包裹左中右 -->
        <div id="content">
            <div id="middle">middle</div>
            <div id="left">left</div>         
            <div id="right">right</div>
        </div>
        <!-- 底部 -->
         <div id="footer">footer</div>
    </div>
</body>
</html>
```

```css
/* 为了避免出现问题我们先给body设置一个min-width:600px; */
body {
    min-width: 600px;
}

/* 再将header和footer的宽度设为100%（整个浏览器的页面） */
#header,
#footer {
    height: 50px;
    width: 100%;
    background: grey;
}

/* 在content中我们给left，right，midlle都添加float:left效果 */
#middle,
#left,
#right {
    float: left;
}

/* 包裹左中右的盒子 */
#content {
    /* 这里有个需要注意的地方，我们还应该给content设置一个高度，content中的div我们添加了float：left属性，因此他们都脱离了文本流，导致出现了高度塌陷。*/
    /* 这里是在content中添加了一个overflow: hidden，形成一个BFC区域来解决这个问题的,当然你不这样做设置content的高度就行啦*/
    overflow: hidden;
    /* 给content设置一个padding：0 200px,
    将左右两边各腾出200px宽度 */
    padding: 0 200px;
}

/* 设置left，right的宽高。 */
#left,
#right {
    width: 200px;
    height: 200px;
    background: pink;
}

#middle {
    /* middle的宽度设置为100%，高度为与left，right的高度相同， */
    width: 100%;
    height: 200px;
    background: yellowgreen;
}

#left {
    /* 分别给left，right设置margin属性调整位置 */
    margin-left: -100%;
    /* 给left和right分别一个relative定位将他们调整到两端 */
    position: relative;
    left: -200px;
}

#right {
    margin-left: -200px;
    position: relative;
    left: 200px;
}
```

## 2.32 三栏双飞翼布局

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="./双飞翼.css">
</head>

<body>
	<!-- 最外层div -->
	<div class="wrap">
		<!-- 头部 -->
		<div id="header">header</div>
		<!-- 包裹左中右的div -->
		<div id="content">
			<div id="middle">
				<!-- 比较圣杯布局多了这个div -->
				<div class="middle-inner">middle</div>
			</div>
			<div id="left">left</div>
			<div id="right">right</div>
		</div>
		<!-- 底部 -->
		<div id="footer">footer</div>
	</div>
</body>

</html>
```

```css
.wrap {
	min-width: 600px;
}

#header,
#footer {
	height: 50px;
	width: 100%;
	background: grey;
}

#left,
#right {
	width: 200px;
	height: 200px;
	background: green;
}

#middle {
	background: pink;
	width: 100%;
	float: left;
	height: 200px;
}

#content {
	overflow: hidden;
}

#left {
	/* 和圣杯布局中一样左中右都给float
        left设置margin值调整位置.
	   但是此布局就不需要给left,right设置定位
    */
	float: left;
	margin-left: -100%;
}

#right {
	float: left;
	margin-left: -200px;
}

/* 中间内容被覆盖了,设置左右外边距为200px 将内容到中间展示 */
.middle-inner {
	margin: 0 200px;
}
```

![image-20220422154153527](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220422154153527.png)

#### **总结**

- 圣杯布局和双飞翼布局都是通过设置负margin来实现元素的排布

- 不同的就是html结构，双飞翼是在middle元素内部又设置了一个milddle-inner并设置它的左右margin，而非圣杯布局的padding，来排除两边元素的覆盖

- 双飞翼布局可以多了一个html结构，但是可以不用设置left,right元素的定位。

  

## 2.33 回流和重绘

### 2.33.1 回流

当DOM的变化影响了元素的DOM对象的位置和尺寸大小，浏览器需要重新计算元素状态，将其安放在界面中的正确位置，这个过程叫做回流。

### 2.33.2 常见引起回流属性和方法

| 常见引起回流属性和方法  |                          |                    |            |
| ----------------------- | ------------------------ | ------------------ | ---------- |
| width                   | height                   | margin             | padding    |
| display                 | border                   | position           | overflow   |
| clientWidth             | clientHeight             | clientTop          | clientLeft |
| offsetWidth             | offsetHeight             | offsetTop          | offsetLeft |
| scrollWidth             | scrollHeight             | scrollTop          | scrollLeft |
| scrollIntoView()        | scrollTo()               | getComputedStyle() |            |
| getBoundingClientRect() | scrollIntoViewIfNeeded() |                    |            |

### 2.33.23重绘

当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘

| **常见的引起重绘的属性** |                  |                     |                   |
| ------------------------ | ---------------- | ------------------- | ----------------- |
| color                    | border-style     | visibility          | background        |
| text-decoration          | background-image | background-position | background-repeat |
| outline-color            | outline          | outline-style       | border-radius     |
| outline-width            | box-shadow       | background-size     |                   |

### 2.33.4 减少重绘和回流

**css**

- 使用transform代替top
- 使用visibility替换display: none, 前者重绘后者回流
- 避免使用table布局
- 尽可能在DOM树的最末端改变class
- 避免使用css表达式,可能引发回流
- css硬件加速

**JavaScript**

- 避免频繁操作样式, 修改class最好
- 避免频繁操作DOM, 合并多次为一次
- 避免频繁读取会引发重绘/回流的属性
- 对具有复杂动画的元素使用绝对定位,使他脱离文档流



## 2.34 Flex布局

任何一个容器都可以指定为flex布局, 当我门为父盒子**设为flex布局**后，子元素的**float、clear**和**vertical-align**属性将失效。

### 2.34.1 常见父项属性

1. `flex-direction`：设置主轴的方向
2. `justify-content`：设置主轴上的子元素排列方式
3. `flex-wrap`：设置子元素是否可以换行
4. `align-content`：设置侧轴上的子元素的排列方式（多行）
5. `align-items`：设置侧轴上的子元素的偶爱列方式（单行）
6. `flex-flow`：复合属性，相当于同时设置了flex-direction和flex-wrap

####  **flex-direction 设置主轴的方向**

| 属性值         | 说明             |
| -------------- | ---------------- |
| row            | 从左到右（默认） |
| row-reverse    | 从右到左         |
| column         | 从上到下         |
| column-reverse | 从下到上         |

####  **justify-content 设置主轴子元素排列方式**

| 属性值        | 说明                              |
| ------------- | --------------------------------- |
| flex-start    | 从头部开始排列                    |
| flex-end      | 从尾部开始排列                    |
| center        | 在主轴居中对齐（主轴x 水平居中）  |
| space-around  | 平分剩余空间                      |
| space-between | 先两边贴边 再平分剩余空间（重要） |
| space-evenly  | 均匀分布                          |

#### **flex-wrap 设置子元素是否换行**

| 属性值 | 说明           |
| ------ | -------------- |
| nowrap | 默认值，不换行 |
| wrap   | 换行           |

#### **align-items 设置侧轴上的子元素排列方式（单行）**

该属性是控制子项在侧轴（默认是y轴）上的排列方式，在**子项为单项的时候使用**

| 属性值     | 说明     |
| ---------- | -------- |
| flex-start | 从上到下 |
| flex-end   | 从下到上 |
| center     | 垂直居中 |
| stretch    | 拉伸     |

#### **align-content 设置侧轴上的子元素的排列方式（多行）**

设置子项在侧轴上的排列方式，并且只能用于子项出现**换行**的情况（多行）**单行没有效果**

#### align-content 和 align-items 区别

* `align-items `适用于**单行**情况下，只有上对齐、下对齐、居中和拉伸。
* `align-content`适用于**换行**（多行）情况下（单行情况使用无效），可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。
* 单行用`align-items`，多行用`align-content`

#### **flex-flow复合写法**

flex-flow属性是flex-direction和flex-wrap属性的复合属性。

```css
flex-flow:row wrap; /* 设置主轴为x，换行显示排列 */
```

### **2.34.2 flex布局子项常见属性**

* flex子项目占的份数
* align-self控制子项自己在侧轴的排列方式
* order属性定义子项的排列顺序（前后顺序）

#### **flex : 占比**

flex属性定义子项目分配**剩余空间**，用flex来表示占多少**份数**。

```css
.item 
	flex: <number>; /*default 0  */
}
```

####  **order 属性定义项目的排列顺序**

数值越小，排列越靠后，默认为0。