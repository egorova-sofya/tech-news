import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { t } = useTranslation("profile");
  return <div>{t("Страница профиля")}weedfsfd</div>;
};

export default ProfilePage;
