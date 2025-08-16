import React, { useState } from "react";
import "./Achievements2023.css";

const achievements = [
  {
    title: "First place in the Innovative Youth Competition",
    image: "/images/yoth.png",
    description_en:
    "The series of achievements continued with my team and I winning first place at the governorate level in the Innovative Youth Competition with a social communication project for people with mental disabilities, which greatly impressed the judges. We were qualified to attend online meetings and received financial support from the state to implement our project.",
    description_ar:"تواصلت سلسلة الإنجازات بفوزي أنا وفريقي بالمركز الأول على مستوى المحافظة في مسابقة شباب مبتكر بمشروع تواصل اجتماعي لذوي الإعاقة الذهنية، والذي نال إعجاب لجنة التحكيم. تأهلنا لحضور اجتماعات إلكترونية، وحصلنا على دعم مالي من الدولة لتنفيذ مشروعنا."
  },
  {
    title: "Utopia website",
    image: "/images/utopia.png",
    description_en:
    "After attending online meetings, we got funding from the competition. We finished our website, Utopia, and uploaded it to Google after we got a Hostinger subscription and learned how to use it and upload a website to it, which we consider one of our most important achievements as well.",
    description_ar:
    "بعد حضور اجتماعات عبر الإنترنت، حصلنا على تمويل من المسابقة. أنهينا موقعنا الإلكتروني (يوتوبيا) ورفعناه على جوجل بعد اشتراكنا في هوستنجر وتعلمنا كيفية استخدامه ورفع موقع إلكتروني عليه، وهو ما نعتبره أيضًا أحد أهم إنجازاتنا."
  },
  {
    title: "Another achievement outside my field",
    image: "/images/story.jpeg",
    description_en:
    "In 2022, I wrote a novel that I did not expect anyone to like, but in 2025, I had the opportunity to participate in a cultural competition at my school level. I qualified and took first place at the governorate level, and I was honored by my school for that achievement, which I am very proud of.",
    description_ar:
    "في عام ٢٠٢٢، كتبتُ روايةً لم أتوقع أن تُعجب أحدًا، ولكن في عام ٢٠٢٥، أتيحت لي فرصة المشاركة في مسابقة ثقافية على مستوى مدرستي، وتأهلتُ وحصلتُ على المركز الأول على مستوى المحافظة، وكُرِّمتُ من مدرستي على هذا الإنجاز الذي أفتخر به كثيرًا."
  },
    {
    title: "life maker",
    image: "/images/life maker.jpeg",
    description_en:
    "Achievements continue and I am honored to have you attend the training of the Life Makers Foundation and obtain its training certificate. I have truly benefited greatly from the training.",
    description_ar:"تتوالى الإنجازات، ويشرفني حضوري دورة مؤسسة صناع الحياة وحصولي على شهادة التدريب. لقد استفدتُ كثيرًا من التدريب.",
  },
      {
    title: "Focus on the Republic in the online qualifiers",
    image: "/images/online youth.jpeg",
    description_en:
    "God has blessed me for the countless times that my team has secured a spot in the online qualifiers at the republic level, out of 4,000 participants. We were among 100 teams that qualified to attend the camp and qualifiers in Cairo.",
    description_ar:
    "لقد منّ الله عليّ  للمرة التي لا اعرف عددها بحصول فريقي على مكان في التصفيات الإلكترونية على مستوى الجمهورية ، من بين 4000 مشارك. كنا من بين 100 فريق تأهلوا لحضور المعسكر والتصفيات في القاهرة."

  },

        {
    title: "Honored on Thanksgiving Day",
    image: "/images/thank day.jpeg",
    description_en:"Another success not in my field. My team and I participated in an economics competition at school. My role was to create a detailed feasibility study for the project, which took second place at the school level.",
    description_ar:"نجاحٌ آخر ليس في مجالي. شاركتُ أنا وفريقي في مسابقةٍ اقتصاديةٍ مدرسية. كان دوري إعداد دراسة جدوى مفصلة للمشروع، الذي حصد المركز الثاني على مستوى المدرسة."

  },
          {
    title: "Innovative youth camp",
    image: "/images/camp.jpeg",
    description_en:"The Innovative Youth Competition Camp was a unique experience in which I learned many things and attended many lectures.",
    description_ar:
    "كان معسكر مسابقه شباب مبتكر تجربة فريدة من نوعها تعلمت فيها الكثير من الأشياء وحضرت العديد من المحاضرات."

  },
            {
    title: "Final competition exhibition",
    image: "/images/معرض.jpeg",
    description_en:
    "Finally, I attended the Republic Youth Innovator Competition Exhibition, which was attended by many important people, and it was truly a beneficial experience.",
    description_ar:
    "وأخيراً، قمت بحضور معرض مسابقة الشباب المبتكرين علي مستوي الجمهورية، والذي حضره العديد من الشخصيات المهمة، وكانت تجربة مفيدة حقاً."

  },
              {
    title: "Excellence for the third year in a row",
    image: "/images/شهادة.jpeg",
    description_en:
    "Finally, after all these achievements, I concluded it with the greatest achievement, which was excellence in the diploma year, with a total of 95%.",
    description_ar:
    "وأخيراً وبعد كل هذه الإنجازات أنهيتها بالإنجاز الأعظم وهو التفوق في سنة الدبلوم بمجموع 95%."

  },








];

export default function Achievements2025() {
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
