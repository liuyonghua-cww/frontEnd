## 理解Angular中的动画
我们知道在vue中可以通过transition标签给对应的元素设置动画，在Angular中是否也有对应的机制呢？答案是肯定的，Angular的动画系统是基于css构建的，也就是说我们可以给浏览器认为可动的任何属性设置动画；
### 介绍
动画被定义为从初始状态到最终状态的一种过渡，它是任何web应用程序不可或缺的一部分，动画的存在不仅是我们的web应用变得有趣，还能增强用户体验。
### 理解Angular中动画的状态
动画是元素从一种状态到另一种状态的过渡，Angular定义了一个元素的三种状态：
1. 通配符状态：元素的默认状态，可以匹配任何一个动画状态，与他当前的动画状态无关，在代码中通常用 '*' 来表示；

2. void 状态：这个状态不属于dom元素的状态，当我们创建了一个元素但还没有放到dom树中或者元素从dom中删除时就会出现这种状态，在代码中用’void‘来表示；

3. 自定义状态：使用state()函数来进行定义。这个函数接收两个参数：第一个参数是状态的名称；第二个参数是一个style()函数，用来定义状态的样式；

### 动画过渡
如果状态也状态之间没有过渡的话，那这些变化就会显得很突兀，Angular的animate ('duration delay easing')的动画函数为我们提供了三种动画的过渡属性：
1. duration：持续时间
2. delay：动画延迟
3. easing：动画的过渡效果

### 创建Angular项目
在 https://stackblitz.com/ 中可以快速创建一个Angular项目，要使用Angular的动画，我们需要导入BrowserAnimationsModule模块：

app.modules.ts

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, AnimationDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

### 了解Angular动画的语法

动画所需要的函数要从@angular/animations模块中导入；

在组件的元数据 animations 中编写动画代码：

```typescript
import {trigger,state,style,animate,transition,...} from '@angular/animations';
@Component({
  animations: [
    trigger('triggerName', [
      state('stateName', style())
      transition('stateChangeExpression', [animate()...])
    ])
  ]
})
```

这个属性接收一个数组，包含了一个或多个触发器，动画的状态和过渡都需要在触发器实现中定义；

每个状态函数state()都定义了一个唯一的状态名，并定义了一个样式函数来显示处于该状态元素的样式。

过渡函数transition()第一个参数定义状态变化的方向，例如：a=>b；第二个参数接受一个或一系列 `animate()` 函数。

元素中应用动画

```html
<div [@triggerName]="stateName"></div>
```

下面就创建一个简单的动画以便更好的理解Angular的动画概念

### 大小改变动画

我们将通过点击一个按钮来实现div的动画。

在组件元数据中添加以下动画属性定义：

animation-demo.component.ts

```typescript
 animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
```

在这里，我们定义了一个触发器changeDivSize和触发器内部的两个状态函数。元素在“初始”状态时为绿色，在“最终”状态时为红色，并增加宽度和高度，还定义了状态过渡所需要的时间。

我们通过一个函数来改变元素的状态：

```typescript
currentState = 'initial';
changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
```

在animation-demo.component.html中添加以下代码

```html
<h3>改变大小</h3>
<button (click)="changeState()">click</button>
<br />
<div [@changeDivSize]="currentState"></div>
<br />
```

我们已经定义了一个按钮，它将在点击的时候调用changeState函数。我们在div上应用了changeDivSize触发器。当我们点击按钮时，它将改变div元素的状态，并且它的大小将随着过渡效果而改变。

上面我们主要探讨了动画状态和过渡的概念。具体效果可以访问 https://stackblitz.com/edit/angular-ivy-n4z3nd?file=src/app/animation-demo/animation-demo.component.html





