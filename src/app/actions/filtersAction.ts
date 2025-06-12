'use server'

export function filtersAction(data: FormData) {
  const search = data.get("search") as string;
  const year = Number(data.get("year"));
  const type = data.get("type") as string;

  const params = new URLSearchParams();
  params.set("search", search);
  params.set("year", String(year));
  params.set("type", type);

}