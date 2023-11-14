import React from "react";

import { useTranslation } from "../../lib/intl";

const Profile = () => {
  const { t } = useTranslation()
  return (
    <div className="profil mb5">
      <h2 className="h2">{t('PROFILE_TITLE')}</h2>
      <p>
        {t('PROFILE_TEXT')}
      </p>
      <p>
        {t("PROFILE_TEXT_2")}
      </p>
      <p>
        {t("PROFILE_TEXT_3")}
      </p>
    </div>
  );
};

export default Profile;
