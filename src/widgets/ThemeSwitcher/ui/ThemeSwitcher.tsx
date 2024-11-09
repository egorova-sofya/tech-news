import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import ThemeIcon from "shared/assets/icons/theme.svg";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps = {}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.container, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon color="var(--primary-color)" />
      {theme}
    </Button>
  );
};
