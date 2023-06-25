import { useEffect, useState } from "react";

import { sharingInformationService } from "../../services/sharing-information-service";
export const Component2 = () => {
  const [count, setCount] = useState(0);

  const subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => {
      if (!!data) setCount(count + 1);
    });

    return () => {};
  });

  return (
    <div>
      Component2
      <div>{count}</div>
      <hr />
    </div>
  );
};
