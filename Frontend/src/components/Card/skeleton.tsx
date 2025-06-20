import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonContainer } from "./styles";
import { useRemindersAPI } from "../../hooks/useRemindersAPI";

export const CardSkeleton = () => {
  const { isLoading } = useRemindersAPI();

  if (!isLoading) return null;
  return (
    <SkeletonContainer>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <span>
          <Skeleton count={2} width={578} duration={2} height={54} />
        </span>
        <Skeleton count={2} circle  width={50} height={50} duration={2} />
      </SkeletonTheme>
    </SkeletonContainer>
  );
};
