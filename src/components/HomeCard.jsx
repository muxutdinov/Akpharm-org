import React from "react";
import team from "../assets/imges/team.png";
import student from "../assets/imges/student.png";

import {
  Containers,
  Imgfirst,
  Imgsecond,
  MiniCon,
  Title,
  Wrapperone,
  Wrappertwo,
  Text,
  Statistics,
  MiniTitle,
  Number,
  MiniText,
  Border,
} from "./HomeCardStyle";
// import { useTranslation } from "react-i18next";

const HomeCard = () => {
  // const { t } = useTranslation();
  return (
    <Containers>
      <Wrapperone>
        <Imgfirst src={student} />
        <Imgsecond src={team} />
      </Wrapperone>
      <Wrappertwo>
        <MiniCon start>
          <Title>Biz haqimizda</Title>
        </MiniCon>
        <MiniCon middle>
          <Text>
            Akpharm - bu sheriklar va xodimlar bilan ishonchli, halol
            munosabatlarga asoslangan kompaniya. Biz o'z biznesimizni kompaniya
            tashkil etilganidan buyon o'zgarmagan qadriyatlar va urf -odatlar
            asosida quramiz. Muvaffaqiyatlarimizni biz bilan umumiy biznes bilan
            shug'ullanadigan odamlar bilan bo'lishish biz uchun muhim. Biz
            rivojlanishimizni biz va mijozlarimiz oldida turgan muammolarni
            birgalikda hal qilishda ko'ramiz.
          </Text>
        </MiniCon>
        <MiniCon last>
          <Statistics>
            <MiniTitle>
              <Number>340</Number>
              <MiniText>Xodimlar</MiniText>
            </MiniTitle>
            <Border />
            <MiniTitle>
              <Number>180</Number>
              <MiniText>Taminotchilar</MiniText>
            </MiniTitle>
            <Border />
            <MiniTitle>
              <Number>600</Number>
              <MiniText>Xaridorlar</MiniText>
            </MiniTitle>
          </Statistics>
        </MiniCon>
      </Wrappertwo>
    </Containers>
  );
};

export default HomeCard;
