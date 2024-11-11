import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import SearchIcon from "shared/assets/icons/search.svg";
import AddArticleIcon from "shared/assets/icons/add-article.svg";
import NotificationIcon from "shared/assets/icons/notification.svg";
import UserIcon from "shared/assets/icons/user.svg";
import { Button } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps = {}) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <LangSwitcher />

        <ThemeSwitcher />
        <Button>
          <SearchIcon color="var(--primary-color)" />
        </Button>
      </div>

      <div className={cls.links}>
        <Button>
          <AddArticleIcon color="var(--primary-color)" />
        </Button>

        <Button>
          <NotificationIcon color="var(--primary-color)" />
        </Button>

        <AppLink to="/profile">
          <UserIcon color="var(--primary-color)" />
        </AppLink>
      </div>
    </div>
  );
};
