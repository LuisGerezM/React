export const newsAdapter = (news) => {
  return news.map((item) => ({
    author: item.author,
    title: item.title,
    date: item.date,
    responsibleUser: item.responsibleUser,
    id: item.id,
    newsBody: item.newsBody,
    editedBy: item.editedBy || "",
    editedDate: item.editedDate || "",
    deletedDate: item.deletedDate || "",
    deletedBy: item.deletedBy || "",
    active: item.active,
  }));
};
