import { Component } from '@angular/core';

@Component({
  selector: 'xs-main-page-business',
  imports: [],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
  standalone: true,
})
export class BusinessComponent {
  desc = {
    // 主标题
    title: "关于申请",

    // 主要描述
    mainDesc: `为学子圆梦名校的专业助手。始终秉持"以学生为中心"的原则，提供权威、专业、高效的留学规划与申请服务，努力让每一位同学都找到最适合的学校。`,

    // 核心优势点
    highlights: [
      {
        title: "专业团队",
        desc: "资深教育顾问团队，均毕业于全球知名学府，深谙申请流程与院校特点"
      },
      {
        title: "精准定位",
        desc: "基于大数据分析，结合学生个人特点，量身定制最优申请方案"
      },
      {
        title: "全程指导",
        desc: "从选校、文书、面试到签证，提供一站式留学申请服务"
      },
      {
        title: "成功案例",
        desc: "多年来助力众多学子成功申请世界名校，涵盖各个专业领域"
      }
    ],

    // 服务范围
    services: [
      "申请策略规划",
      "院校选择建议",
      "文书写作指导",
      "材料准备支持",
      "面试技巧培训",
      "签证办理指导"
    ],

    // 品牌承诺
    promise: `坚持以诚信为本，专业为先，助力每一位学子实现留学梦想。十年专注留学申请，用专业创造价值，以实力赢得信赖。`,

    // 号召性用语
    callToAction: "开启您的留学之旅"
  };
}
