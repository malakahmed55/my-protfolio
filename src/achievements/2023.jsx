import React, { useState } from "react";
import "./Achievements2023.css";

const achievements = [
  {
    title: "Marketing Segment at IEEE",
    image: "/images/ieee.png",
    description_en:
      "One of the first and most important achievements that I am proud of in my career is my acceptance into the IEEE organization that teaches young people many important specializations such as marketing, organization, and robotics programming. I was honored to be accepted into the Social Marketing Department, and I learned many things, the most important of which are the editing and Photoshop course, as well as the soft skills course",
    description_ar:
      "من أوائل وأهم الإنجازات التي أفتخر بها في مسيرتي المهنية قبولي في معهد مهندسي الكهرباء والإلكترونيات (IEEE) الذي يُدرّس الشباب تخصصات مهمة كالتسويق والتنظيم وبرمجة الروبوتات. تشرفتُ بقبولي في قسم التسويق الاجتماعي، وتعلمتُ فيه الكثير، أهمها دورة التحرير والفوتوشوب، بالإضافة إلى دورة المهارات الشخصية."
  },
  {
    title: "Entrepreneurship Competition",
    image: "/images/nterper.jpeg",
    description_en:
      "Another achievement that I am proud of is my participation in an entrepreneurship competition with a project to help people get rid of bullying and direct them to doctors who can help them. I gained a lot of experience in that competition, which helped me in the future in other achievements.",
    description_ar:
      "من إنجازاتي الأخرى التي أفتخر بها مشاركتي في مسابقة ريادة الأعمال بمشروع لمساعدة الناس على التخلص من التنمر وتوجيههم إلى الأطباء القادرين على مساعدتهم. اكتسبتُ خبرةً واسعةً في تلك المسابقة، مما ساعدني مستقبلًا في تحقيق إنجازاتٍ أخرى."
  },
  {
    title: "Excellence in the first year",
    image: "/images/وي.jpeg",
    description_en:
      "My final achievement that year was achieving a distinction in my first year at We School of Applied Technology. It was a difficult year for a 15-year-old student who had no idea about information technology. Furthermore, all subjects were taught in English, while I was a student studying only in Arabic.",
    description_ar:
      "كان إنجازي الأخير في ذلك العام حصولي على درجة امتياز في سنتي الأولى في مدرسة وي للتكنولوجيا التطبيقية. كان عامًا صعبًا على طالبة في الخامسة عشرة من عمرها لم تكن لديها أدنى فكرة عن تكنولوجيا المعلومات. علاوة على ذلك، كانت جميع المواد تُدرّس باللغة الإنجليزية، بينما كنتُ طالبة أدرس باللغة العربية فقط."
  }
];

export default function Achievements2023() {
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
