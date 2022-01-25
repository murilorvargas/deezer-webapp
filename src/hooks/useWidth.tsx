import { useCallback, useEffect, useState } from 'react';

export const useWidth = (): number => {
  const [width, setWidth] = useState<number>();

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return width;
};

export default useWidth;