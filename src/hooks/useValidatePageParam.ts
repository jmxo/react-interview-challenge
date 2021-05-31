import qs from "query-string";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

/** Make sure `page` query param is :
 * - a valid number,
 * - less than `totalPageCount`,
 * - explicitly specified when `page` is 1.
 */
export default function useValidatePageParam(totalPageCount?: number) {
  const history = useHistory();
  const location = useLocation();
  const search = qs.parse(location.search);
  const pageString = search.page;
  const page = parseInt(pageString as string);

  useEffect(() => {
    if (
      Number.isNaN(page) ||
      !pageString ||
      (totalPageCount && page > totalPageCount) ||
      page < 1
    ) {
      history.push({
        pathname: location.pathname,
        search: qs.stringify({
          ...search,
          page: 1,
        }),
      });
    }
  }, [history, location.pathname, page, pageString, search, totalPageCount]);
}
