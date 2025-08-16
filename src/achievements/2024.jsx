import React, { useState } from "react";
import "./Achievements2023.css";

const achievements = [
  {
    title: "Writing a research paper on the effect of three letters on children with Down syndrome",
    image: "/images/searsh.jpeg",
    description_en:
    "My work in helping children with Down syndrome began when I researched the effect of three-dimensional letters in teaching children with Down syndrome and attracting their attention. From there, I started to establish my Down Up project.",
    description_ar:"بدأ عملي في مساعدة الأطفال المصابين بمتلازمة داون عندما بحثتُ في تأثير الحروف ثلاثية الأبعاد في تعليم الأطفال المصابين بمتلازمة داون وجذب انتباههم. ومن هنا، بدأتُ بتأسيس مشروع (داون اب)"
  },
  {
    title: "isf Competition",
    image: "/images/isf.jpeg",
    description_en:
    "Then I created a website for them and participated with the website in the ISEF competition at the level of Suez Governorate, which lasted for three days, during which I gained a great deal of experience and was admired by many of the judges, and I was chosen to advance to the final stage at the level of the governorate.",
    description_ar:
    "ثم قمت بإنشاء موقع لهم وشاركت بالموقع في مسابقة معرض أيسف على مستوى محافظة السويس والتي استمرت لمدة ثلاثة أيام اكتسبت خلالها خبرة كبيرة ونالت إعجاب الكثير من الحكام وتم اختياري للتأهل للمرحلة النهائية على مستوى المحافظة."
  },
  {
    title: "Governorate level center",
    image: "/images/final isf.jpeg",
    description_en:
    "The competition ended with me winning a position at the governorate level in the ISEF competition, and I was promoted to the republic level online.",
    description_ar:
      "وانتهت المسابقة بحصولي على مركز على مستوى المحافظة في مسابقة معرض ISEF، وتم ترقيتي إلى مستوى الجمهورية عن طريق الإنترنت."
  },
    {
    title: "Excellence in the first year",
    image: "/images/chain.jpeg",
    description_en:
    "Then I was one of my school's representatives in front of the Chinese delegation that visited my school and I explained my project to them in detail, which I consider one of my most important achievements because I explained it in English in front of a large number of Chinese visitors, cameras, and translators.",
    description_ar:
      "ثم كنت أحد ممثلي مدرستي أمام الوفد الصيني الذي زار مدرستي وشرحت لهم مشروعي بالتفصيل والذي أعتبره أحد أهم إنجازاتي لأنني شرحته باللغة الإنجليزية أمام عدد كبير من الزوار الصينيين والكاميرات والمترجمين."
  },
      {
    title: "Excellence for the second year in a row",
    image: "/images/وي.jpeg",
    description_en:
    "After I specialized in my school in the programming and website development department, at the end of the year I had obtained an excellent grade for the second time in a row.",
    description_ar:
    "بعد أن تخصصت في مدرستي في قسم البرمجة وتطوير المواقع الإلكترونية، حصلت في نهاية العام على تقدير ممتاز للمرة الثانية على التوالي."

  }



];

export default function Achievements2024() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="achievements-list">
      {achievements.map((item, index) => (
        <div
          className="achievement-row"
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img src={item.image} alt={item.title} className="achievement-image" />
          {hoverIndex === index && (
            <div className="achievement-description">
              <h2>{item.title}</h2>
              <p>{item.description_en}</p>
              <p className="arabic">{item.description_ar}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
