export interface ProductItem {
  id: string;
  title: string;
  content: string;
}

export const PRODUCTS_DETAIL: ProductItem[] = [
  {
    id: 'foundation',
    title: '牛剑基础营',
    content: `
<div class="course-detail">
  <h1 class="text-2xl font-bold mb-4">2025年牛剑基础营</h1>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">集训营概述</h2>
    <p>本集训营旨在帮助有志于申请牛津、剑桥及帝国理工的学生高效学习和提升学术能力。其中数学作为大部分学科的逻辑根基，是最重要的学科。为确保学生能
    够最大程度地适应以后各个学科的加速学习，特推出此基础营。所有课程均为全英文授课。师资为全牛剑本硕，老师均以高标准要求：三年及以上教龄，有牛剑成
    功学生经验，有独立编写整合知识教案能力，全英文大班授课能力，授课具有一定的幽默感，逻辑清晰，具有较强的教学兴趣和责任感。 </p>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">牛剑基础营简介</h2>
    <p>牛剑基础营专为初三年级升高一年级，或者两年制GCSE第二年的学生定制。课程目标提前 适应整个国际高中课程的节奏，整个课程以自然科学中的应用数学
    教学为主。全英文授课，提前让学生适应具体的英语环境中的数学的书写和表达习惯。</p>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">适应人群</h2>
    <ul class="list-disc px-8">
      <li>初三升高一，或者GCSE课程第一年进第二年的学生</li>
      <li>对理工科有兴趣，希望进入G5名校的学生</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">课程安排</h2>
    <ul class="list-disc px-8">
      <li>开课时间：2025.7.9-2025.7.23</li>
      <li>上午：系统性授课</li>
      <li>下午：练习与测试</li>
      <li>结营测试：评估学生学习成果</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">教学内容</h2>
    <ul class="list-disc px-8">
      <li>覆盖所有科学数学（物理化学生物经济）所必备的数学内容。</li>
      <li>具体内容：向量，微积分，微分方向，基础统计。</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">教学目标</h2>
    <p>整个教学将分为三个组别进行，以下是每个组别的集训目标和集训内容概况</p>
    <ul class="list-disc px-8">
      <li>整个教学将分为三个组别进行，以下是每个组别的集训目标和集训内容概况  </li>
      <li>生物化学组：其数学内容旨在培养学生计算能力、代数能力、统计概率能力。(蓝本纲为ESAT)</li>
      <li>数学经济组：其数学主要针对于博弈论、数论、逻辑学和统计。（蓝本纲为TMUA）</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">课表安排</h2>
    <h3 class="text-l font-semibold mb-3">理工材料</h3>
    <table class="table-auto w-full border-1 border-collapse mb-3">
      <thead class="border-1">
        <tr><td class="border-1 px-4"></td><td class="border-1 text-center">主题</td><td class="border-1 text-center">核心知识点</td></tr>
      </thead>
      <tbody>
        <tr><td class="border-1 px-4">1</td><td class="border-1 px-2">向量与几何</td><td class="border-1 px-2">向量加、数量积与投影、向量几何应用（平面几何问题）、向量叉积定义（仅几何意义）</td></tr>
        <tr><td class="border px-4">2</td><td class="border px-2">基础方程</td><td class="border px-2">一元三次方程、圆、圆方程、基础二次方程复习、不等式方程。</td></tr>
        <tr><td class="border px-4">3</td><td class="border px-2">指数与对数</td><td class="border px-2">指数函数、对数函数、换底原则。</td></tr>
        <tr><td class="border px-4">4</td><td class="border px-2">函数、指数与对数</td><td class="border px-2">函数定义域/值域、复合函数、反函数、二次函数图像与顶点式、指数/对数函数图像及变换。</td></tr>
        <tr><td class="border px-4">5</td><td class="border px-2">三角函数与弧度制</td><td class="border px-2">弧度制转换、全部三角函数、正弦定理/余弦定理、三角恒等式证明、二倍角公式。</td></tr>
        <tr><td class="border px-4">6</td><td class="border px-2">微积分基础1</td><td class="border px-2">导数定义与几何意义、幂函数导数、链式法则、单调性、二阶微分、极值判定。</td></tr>
        <tr><td class="border px-4">7</td><td class="border px-2">微积分基础2</td><td class="border px-2">指数/对数函数微分、乘/除法法则、不定积分公式、定积分几何意义、梯形法则近似积分。</td></tr>
        <tr><td class="border px-4">8</td><td class="border px-2">微积分基础3</td><td class="border px-2">特殊积分方法。</td></tr>
        <tr><td class="border px-4">9</td><td class="border px-2">数列与级数</td><td class="border px-2">等差/等比数列求和、收敛性判定、二项式展开（含分数指数）。</td></tr>
        <tr><td class="border px-4">10</td><td class="border px-2">排列与组合</td><td class="border px-2">排列组合趣题、二项式展开。</td></tr>
        <tr><td class="border px-4">11</td><td class="border px-2">麦克劳伦与泰勒展开初步</td><td class="border px-2">麦克劳伦与泰勒展开初步、使用泰勒展开法对方程估值、牛顿拉夫逊估值法。</td></tr>
        <tr><td class="border px-4">12</td><td class="border px-2">复数与极坐标</td><td class="border px-2">复数四则运算、极坐标表示、棣莫弗定理、复数几何意义（旋转与缩放）。</td></tr>
        <tr><td class="border px-4">13</td><td class="border px-2">微分方程1</td><td class="border px-2">分离变量法、一阶线性微分方程、数值解法（欧拉法）。</td></tr>
        <tr><td class="border px-4">14</td><td class="border px-2">微分方程2</td><td class="border px-2">齐次/非齐次二阶微分方程。</td></tr>
        <tr><td class="border px-4">15</td><td class="border px-2">概率与统计基础</td><td class="border px-2">概率公理、条件概率与独立性、离散随机变量期望/方差、二项分布。</td></tr>

      </tbody>
    </table>
    <h3 class="text-l font-semibold mb-3">生物化学</h3>
    <table class="table-auto w-full border-1 border-collapse mb-3">
      <thead class="border-1">
        <tr><td class="border-1 px-4"></td><td class="border-1 text-center">主题</td><td class="border-1 text-center">核心知识点</td></tr>
      </thead>
      <tbody>
        <tr><td class="border px-4">1</td><td class="border px-2">基础方程</td><td class="border px-2">一元三次方程、圆、圆方程、基础二次方程复习、不等式方程。</td></tr>
        <tr><td class="border px-4">2</td><td class="border px-2">函数</td><td class="border px-2">函数定义域/值域、复合函数、反函数、二次函数图像与顶点式、三次函数初步。</td></tr>
        <tr><td class="border px-4">3</td><td class="border px-2">指数与对数</td><td class="border px-2">指数与对数、换底公式、指数/对数函数图像及变换。</td></tr>
        <tr><td class="border px-4">4</td><td class="border px-2">三角函数与弧度制</td><td class="border px-2">弧度制转换、全部三角函数、正弦定理/余弦定理、三角恒等式证明、二倍角公式。</td></tr>
        <tr><td class="border px-4">5</td><td class="border px-2">微分基础1</td><td class="border px-2">导数定义与几何意义、幂函数导数、链式法则、单调性、二阶微分、极值判定。</td></tr>
        <tr><td class="border px-4">6</td><td class="border px-2">微分基础2、积分</td><td class="border px-2">指数/对数函数微分、乘/除法法则、不定积分公式、定积分几何意义、梯形法则近似积分。</td></tr>
        <tr><td class="border px-4">7</td><td class="border px-2">排列与组合</td><td class="border px-2">排列组合趣题、二项式展开。</td></tr>
        <tr><td class="border px-4">8</td><td class="border px-2">向量</td><td class="border px-2">向量加减法、数量积与投影、向量几何应用（平面几何问题）、向量叉积定义（仅几何意义）。</td></tr>
        <tr><td class="border px-4">9</td><td class="border px-2">概率与统计基础</td><td class="border px-2">概率公理、条件概率与独立性、离散随机变量期望/方差、二项分布。</td></tr>
        <tr><td class="border px-4">10</td><td class="border px-2">统计1</td><td class="border px-2">连续随机变量、概率密度函数。</td></tr>
        <tr><td class="border px-4">11</td><td class="border px-2">统计2</td><td class="border px-2">正态分布性质、线性回归和相关系数分析。</td></tr>
        <tr><td class="border px-4">12</td><td class="border px-2">数论与证明技巧</td><td class="border px-2">质数性质、同余定理、数学归纳法、反证法应用、鸽巢原理。</td></tr>
        <tr><td class="border px-4">13</td><td class="border px-2">复数与极坐标</td><td class="border px-2">复数四则运算、极坐标表示、棣莫弗定理、复数几何意义（旋转与缩放）。</td></tr>
        <tr><td class="border px-4">14</td><td class="border px-2">一阶微分方程建模</td><td class="border px-2">分离变量法、一阶线性微分方程、数值解法（欧拉法）。</td></tr>
        <tr><td class="border px-4">15</td><td class="border px-2">科学数学专讲1</td><td class="border px-2">生物学数据题数学解析（遗传概率计算、生长曲线拟合）。</td></tr>
      </tbody>
    </table>
    <h3 class="text-l font-semibold mb-3">经济数学</h3>
    <table class="table-auto w-full border-1 border-collapse mb-3">
      <thead class="border-1">
        <tr><td class="border-1 px-4"></td><td class="border-1 text-center">主题</td><td class="border-1 text-center">核心知识点</td></tr>
      </thead>
      <tbody>
        <tr><td class="border px-4">1</td><td class="border px-2">集合</td><td class="border px-2">集合（数集）、集合运算（并交补）、复杂抽屉原理。</td></tr>
        <tr><td class="border px-4">2</td><td class="border px-2">逻辑</td><td class="border px-2">命题逻辑（真值表、充分必要条件、逆否命题）、逻辑等价性证明。</td></tr>
        <tr><td class="border px-4">3</td><td class="border px-2">方程与函数</td><td class="border px-2">一元二次方程、一元三次方程、二次函数图像与顶点式、圆方程。</td></tr>
        <tr><td class="border px-4">4</td><td class="border px-2">三角函数与弧制</td><td class="border px-2">弧度制转换、全部三角函数、正弦定理/余弦定理、三角恒等式证明、二倍角公式。</td></tr>
        <tr><td class="border px-4">5</td><td class="border px-2">指数和对数</td><td class="border px-2">指数函数、对数函数、换底原则。</td></tr>
        <tr><td class="border px-4">6</td><td class="border px-2">函数图像</td><td class="border px-2">绘制分数函数图像、绘制三角函数与指数函数结合。</td></tr>
        <tr><td class="border px-4">7</td><td class="border px-2">函数与图像分析</td><td class="border px-2">不等式方程、函数定义域/值域、复合函数、摸函数与反函数、指数/对数函数图像变换、三次函数步。</td></tr>
        <tr><td class="border px-4">8</td><td class="border px-2">微分基础1</td><td class="border px-2">导数定义与几何意义、幂函数导数、链式法则、单调性、二阶微分、极值判定。</td></tr>
        <tr><td class="border px-4">9</td><td class="border px-2">微分基础2、积分</td><td class="border px-2">指数/对数函数微分、乘/除法法则、不定积分公式、定积分几何意义、梯形法则近似积分。</td></tr>
        <tr><td class="border px-4">10</td><td class="border px-2">排列组合</td><td class="border px-2">排列组合趣题、二项式展开。</td></tr>
        <tr><td class="border px-4">11</td><td class="border px-2">数列与级数</td><td class="border px-2">等差/等比数列求和、收敛性判定、二项式展开（含分数指数）、泰勒级数初步（以 e^x 为例）。</td></tr>
        <tr><td class="border px-4">12</td><td class="border px-2">数论与证明技巧1</td><td class="border px-2">质数性质、同余定理、反证法应用。</td></tr>
        <tr><td class="border px-4">13</td><td class="border px-2">数论与证明技巧2</td><td class="border px-2">数学归纳法、鸽巢原理。</td></tr>
        <tr><td class="border px-4">14</td><td class="border px-2">平面向量</td><td class="border px-2">平面向量的加减法、点乘与叉乘。</td></tr>
        <tr><td class="border px-4">15</td><td class="border px-2">矩阵与线性代数</td><td class="border px-2">矩阵加减乘、行列式与逆矩阵（2x2）、线性方程组求解（高斯消元）、矩阵变换几何意义。</td></tr>
        <tr><td class="border px-4">16</td><td class="border px-2">概率与统计</td><td class="border px-2">概率公理、条件概率与独立性、离散随机变量期望/方差、二项分布。</td></tr>
      </tbody>
    </table>
  </section>
</div>`
  },
  {
    id: 'prep',
    title: '牛剑先修营',
    content: `<div class="course-detail">
  <h1 class="text-2xl font-bold mb-4">2025年牛剑先修营</h1>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">集训营概述</h2>
    <p>本集训营旨在帮助有志于申请牛津、剑桥及帝国理工的学生高效学习和提升学术能力。通过精细化的课程安排和高频测试，确保学生能够最大程度地提升自己的学术水平，并为未来的申请打下坚实的基础。所有课程均为全英文授课。师资为全牛剑本硕（物理工程组,生物组为牛剑本硕博）选拔老师均以高标准要求：三年及以上教龄，有牛剑成功学生经验，有独立编写整合知识教案能力，全英文大班授课能力，授课具有一定的幽默感，逻辑清晰，具有较强的教学兴趣和责任感。</p>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">牛剑先修营简介</h2>
    <p>牛剑先修营专为高一升高二、有志于申请牛津、剑桥、帝国理工或未来希望学习相关专业的学生设计。该课程的设计初衷是帮助学生提前掌握关键知识点，为后期适应性训练打下基础，并有效帮助备考BPHO、AMC、NEC、UKCHO等国际竞赛。</p>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">适应人群</h2>
    <ul class="list-disc px-8">
      <li>高一升高二的学生</li>
      <li>有志于申请牛津、剑桥、帝国理工，或者大学希望学习相关专业的学生</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">课程安排</h2>
    <ul class="list-disc px-8">
      <li>开课时间：2025.7.9-2025.7.23</li>
      <li>上午：系统性授课（覆盖牛剑笔面试必修重难点）</li>
      <li>下午：练习与测试</li>
      <li>结营测试：评估学生学习成果</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">教学内容与目标</h2>
    <ul class="list-disc px-8">
      <li>精讲课本必修课程内容，还原知识的本质</li>
      <li>初步介绍竞赛课程</li>
      <li>帮助学生提前掌握核心知识，为未来冲刺牛剑做好准备</li>
      <li>通过科学规划，在未来数月内系统完成学习目标</li>
      <li>有效帮助备考BPHO、AMC、NEC、UKCHO等国际竞赛</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">课程内容详情</h2>

    <div class="mb-4">
      <h3 class="text-l font-semibold mb-2">理工材料</h3>
      <p class="mb-2"><strong>标注说明：</strong></p>
      <ul class="list-disc px-8">
        <li>**表示该内容不包含在 A-Level/IB/AP 课程大纲中，但可能在 Oxbridge（牛剑）能力测试或面试中有所提及或暗示</li>
        <li>*表示该内容将在 13 年级涉及</li>
      </ul>
    </div>

    <div class="mb-4">
      <h3 class="text-l font-semibold mb-2">注意事项</h3>
      <p class="mb-2">学生需在夏令营前掌握的基础数学知识：</p>
      <ul class="list-disc px-8">
        <li>微积分：多项式与三角函数的微分与积分</li>
        <li>向量：向量加法、减法、点积/叉积</li>
        <li>几何：圆、角度的度量单位（度与弧度），坐标系中的角度表示</li>
        <li>三角学：正弦定理、余弦定理，利用三角恒等式计算三角形面积</li>
      </ul>
    </div>

    <div class="mb-4">
      <h3 class="text-l font-semibold mb-2">推荐阅读</h3>
      <p>《Ohanian Physics》（Hans C. Ohanian），第 2 卷，W.W. Norton & Company</p>
    </div>
  </section>

  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-3">专业分组课程</h2>

    <div class="mb-4">
      <h3 class="text-l font-semibold mb-2">化学组</h3>
      <p class="mb-2"><strong>课程重点：</strong></p>
      <ul class="list-disc px-8">
        <li>重点学习元素周期性（Periodicity），建立整体的周期表认识</li>
        <li>基础反应动力学学习</li>
        <li>推荐阅读：Keeler, J. and Wothers, P. (2009).《Why chemical reactions happen》</li>
      </ul>
    </div>

    <div class="mb-4">
      <h3 class="text-l font-semibold mb-2">经济组</h3>
      <p class="mb-2"><strong>课程目标：</strong></p>
      <ul class="list-disc px-8">
        <li>⼴泛了解经济学课内外主题，找到⾃⼰的兴趣</li>
        <li>为未来的申请策略做准备</li>
        <li>培养经济兴趣，夯实申请意愿</li>
      </ul>
      <p class="mb-2"><strong>十大核心课题：</strong></p>
      <ul class="list-disc px-8">
        <li>Markets and efficiency</li>
        <li>Public goods</li>
        <li>Externalities</li>
        <li>Market Power and Competition</li>
        <li>Information Asymmetry</li>
        <li>Equity and Redistribution</li>
        <li>Cost Benefit Analysis</li>
        <li>Taxation</li>
        <li>Trade policy</li>
        <li>Well-being and Behavioral Economics</li>
      </ul>
    </div>
  </section>
</div>
`,
  },
  {
    id: 'sprint',
    title: '牛剑冲刺营',
    content: `2025年牛剑冲刺营
集训营概述
本集训营旨在帮助有志于申请牛津、剑桥及帝国理工的学生高效学习和提升学术能力。通过 精细化的课程安排和高频测试，确保学生能够最大程度地提升自己的学术水平，并为未来的申请打下坚实的基础。所有课程均为全英文授课。师资为全牛剑本硕（物理工程组,生物组为牛剑本硕博）老师均以高标准要求：三年及以上教龄，有牛剑成功学生经验，有独立编写整合知识教案能力，全英文大班授课能力，授课具有一定的幽默感，逻辑清晰，具有较强的教学兴趣和责任感。
牛剑冲刺营简介
牛剑冲刺营专为高二升高三、有志于申请牛津、剑桥及帝国理工的学生设计。课程旨在帮助学 生在短时间内高效掌握考试关键知识点，并提升笔面试应试能力。
适应人群
高二升高三的学生
计划申请牛津、剑桥及帝国理工的学生
课程安排
开课时间：2025.7.9-2025.7.23
上午：系统性授课 （覆盖牛剑笔面试必修重难点）
下午：练习与测试。
每两日进行一次考试，确保学习效果
目标
在15天内高效完成牛剑考试必修知识的梳理与强化
通过高频测试提升学生应试能力
学生出营之后应只针对做适应性训练。
课表安排
理工材料
标注说明：
**表示该内容不包含在 A-Level/IB/AP 课程大纲中，但可能在 Oxbridge（牛剑）能力测试或面试中有所提及或暗示。
*表示该内容超出 12 年级知识范围，但会在 13 年级涉及，因此我们提前教授，以便更好地练习。
尽管部分内容与 A-Level/IB/AP 课程重复，但我们将以不同的深度和难度进行讲解，确保符合 Oxbridge 的要求。
注意事项：
本次夏令营的核心目标是帮助学生构建物理知识体系。
学生不应在夏令营结束后继续学习新知识，而是应该专注于练习和模拟考试（ESAT/PAT）。
后续课程将在夏令营之后推出，主要围绕 Oxbridge 的能力测试和面试进行深入探讨
化学组
标注说明：
**表示该内容完全不包含在 A-Level 化学课程中。
*表示该内容在 A2（或 IB 第二年）化学中涉及基础知识，并提升至大学水平。
其余内容虽与 A-Level/IB 化学有一定重叠，但仍包含大量大学水平的知识。
注意事项：
建议学生先预习标注 * 的主题，以对相关内容有基本了解。
特别提醒：本计划不涉及过渡金属部分，因为该部分在面试中完全基于 A2 化学知识。请提前做好准备。本内容将在 7 月开始的后续牛剑课程中介绍。
如果时间允许，会额外介绍‘Unit Cell’相关内容。此主题在面试问题中较少涉及，但在 A-Level（IB）课程中完全未覆盖。请确保在面试前掌握基本概念。
生物组
备注：
课程大纲主要基于 ESAT 课程，涵盖生物学的宏观与微观领域。
学生需熟悉 AS 生物学，建议在暑期班前进行简要复习。
尽管部分概念可能较为熟悉，本课程将从研究生物学角度提供全新视角。
课程不涉及实验操作，但会介绍部分实验规格和技术。
数学组：
标注说明：
** 标记了 AL/IB/AP 课程大纲中没有的内容，但是在牛剑笔试或面试中提到或会需要。
标记*超出了12 年级知识范围，但 13 年级会涉及的内容。我们决定提前教授这些内容，以便进一步练习。
有些内容会与 AL/IB/AP 重复，但此次夏令营会以不同的级别和难度介绍它们。级别和难度将符合牛津剑桥的要求。
注意事项：
本次夏令营的重点是整理学生的知识结构。夏令营结束后，学生不应专注于学习新知识。相反，夏令营结束后，学生可以继续进行 MAT/STEP的练习和模拟考试。
经济组：
课程亮点：
夏校项⽬中特意加⼊了计量经济学的培训，为计量经济学基础知识的学习和计量经济学如何进⾏实验设计和实施的讲解。并设计了为期6⽇的独⽴计量经济项⽬。这样的安排不仅能提升申请竞争⼒，还能让学⽣有真实的数据处理经验，在⾯试中发挥更好。
此外，在夏校的⼗五天中，会提供⼗个课题的⼗组课外阅读材料，和⼗五篇挑选过的经济学⼈⽂章资源。⼗个课题的阅读材料会循序渐进的帮助两组同学进⾏额外的知识点拓展，其内容如下：
1.   Markets and efficiency
2.   Public goods
3.   Externalities
4.   Market Power and Competition
5.   Information Asymmetry
6.   Equity and Redistribution
7.   Cost Benefit Analysis
8.   Taxation
9.   Trade policy
10.  Well-being and Behavioural Economics
北京修斯教育科技`,
  },
  {
    id: 'interview',
    title: '笔面试课程',
    content: `修斯牛剑笔面试培训
权威笔试 & 面试指导，助力顶尖大学录取
产品概述
修斯牛剑笔面试培训是公司最成熟、经验最丰富的旗舰课程，专注于全面提升学生在牛津、剑桥及帝国理工等顶尖大学笔试和面试中的表现。课程围绕各学科的核心考点展开，通过精准查漏补缺、强化学术思维和适应考试要求，帮助学生稳步提升竞争力。
每门学科均配备修斯独家题库和教材，系统化训练考试重点，确保学生在高强度学术环境下稳定发挥，最大化提升录取机会。凭借严谨的教学体系与专业辅导，修斯助力学员突破笔试难关，自信迎战面试，最终成功斩获牛津、剑桥及帝国理工等世界顶尖学府的录取通知书。
适用学员
有意申请牛津、剑桥及帝国理工的高二升高三学员
希望精准备考，提升笔试通过率及面试竞争力的学员
开设科目
数学类
✔ 剑桥ESAT数学
✔ 牛津MAT & 牛剑数学面试
物理 & 工程类
✔ 剑桥ESAT物理
✔ 牛津PAT & 牛剑物理/工程/材料面试
化学类
✔ 剑桥ESAT化学 & 牛剑化学面试
生物类
✔ 剑桥ESAT生物 & 牛剑生物面试
经济类
✔ 剑桥TMUA & 剑桥经济面试
📌 文书指导（免费提供1小时讲解，如需修改服务，可能额外收费）
课程形式与时间
线上小班教学，每次 2 小时，共 20 周
全程学术英语授课，训练国际化学术表达能力
笔试通过后，立即安排个性化模拟面试，精准匹配牛剑导师
师资力量 —— 牛剑精英导师团队
所有课程均由修斯学科负责人及资深导师授课，确保最高质量的教学与指导。
✅ Dr. Kevin Chen —— 物理 & 工程组负责人
牛津大学工程科学本硕，固体力学及应用数学博士
牛津大学自主招生考试 PAT 2019 / 2020 / 2021 年阅卷人
近 10 年牛剑培训经验，已助 100+ 名学生成功考入牛津剑桥
✅ Jo Hu —— 经济学组负责人
剑桥大学经济学本硕
曾负责知名机构经济学教学体系建设
具备丰富的经济学研究与申请指导经验
✅ Li —— 数学组负责人
牛津大学数学系本硕
竞赛教学经验丰富，长期教授 STEP、MAT、AMC 等高难度课程
指导多名学生成功申请牛剑数学相关专业
✅ Dr. Laura Yuan —— 生物组负责人
剑桥大学自然科学本硕 & 神经科学博士
5+ 年 G5 及牛剑生物相关专业辅导经验
✅ Christian —— 化学组负责人
牛津大学化学系本硕
累计辅导时长超 1000 小时，多名学员成功申请牛剑化学相关专业
课程特色 & 核心优势
独家笔面试题库 —— 深度解析历年真题，精准模拟考试环境
高效训练体系 —— 强化逻辑思维，提升学术表达能力
精准个性化辅导 —— 针对薄弱环节查漏补缺，制定最优备考策略
笔试 & 面试无缝衔接 —— 笔试通过后，第一时间匹配最优面试导师
培训成果
95% 面邀率 —— 绝大多数学员成功获得面试邀请
30% 录取率 —— 显著高于全球平均录取水平
北京修斯教育科技`,
  },
  {
    id: 'advanced',
    title: '学科先修课程',
    content: `学科先修课程
产品概述
北京修斯学科先修课程是一门区别于传统应试教育的精英课程，旨在教授学科知识、激发学术兴趣，并培养学生的独立思考与探索能力。课程涵盖高中至大学基础内容，并拓展至竞赛难度，适用于A-Level、IB、AP等标化考试、各类学科竞赛及世界顶尖大学的自主招生考核。
课程由全牛津-剑桥导师团队打造，采用小班全英文授课模式，确保学生在深入理解学科知识的同时，建立国际化学术思维，为未来学术道路奠定坚实基础。
课程定位
本课程区别于市面上常规的考前培训，而是强调学术思维训练，帮助学生：
夯实核心学科知识，拓展前沿内容
培养严谨的逻辑思维与问题解决能力
为顶尖大学申请（牛津、剑桥、G5、常春藤等）做好充分学术准备
目标学员
本课程适用于：
高一年级及同等国际课程（如GCSE）学生，具备良好数学及科学基础
希望深度探索学科知识、提升学术竞争力的学生
计划申请世界顶尖大学，需提前适应大学学习方式的学员
希望提高标化考试（A-Level / IB / AP）及学科竞赛成绩 的学生
课程结构
课程时长：每门学科共80小时（40周，每周2小时）
授课模式：小班制，全英文教学
教学方式：无PPT授课，全黑板书写，课堂不做笔记，学生课后整理笔记
配套教材：北京修斯独家编写讲义，涵盖所有授课内容
开设学科
数学（核心学科，建议所有学生参加）
物理（适合考虑物理、工程、材料科学方向的学生）
化学（适合考虑化学、生物化学方向的学生）
生物（适合考虑生物、医学方向的学生）
经济（适合考虑经济学、商科方向的学生）
课程特色
全牛津-剑桥导师团队：所有导师均毕业于世界顶尖学府，具备丰富的学术与教学经验
高密度精讲：课程内容涵盖高中至大学基础知识，并拓展至竞赛难度
非应试导向，注重学术提升：强调逻辑思维、问题解决能力
适用多种学术场景：标化考试、学科竞赛、大学自主招生考核
严格作业与学习要求：课堂无笔记，课后整理讲义，确保自主学习能力提升
授课要求
课堂全黑板书写，不使用PPT，学生不做笔记，确保课堂专注度
课后配备详细讲义，学生需整理笔记作为作业，培养自学能力
每节课后配备高质量练习题，确保知识吸收和应用
课程价值
培养学生的学术能力，而非短期应试技巧
提前适应世界顶级大学的学习方式，提高竞争力
立扎实的学科基础，为未来深造提供保障
北京修斯教育科技`,
  },
];
