function makeBadgeMarkup(url, syntax) {
  let badgeImageUrl;
  badgeBaseUrl = 'https://img.shields.io/static/'
  badgeImageUrl = badgeBaseUrl + "v1.svg";
  badgeImageUrl += "?logo=Jupyter&label=launch&message=MyBinder&color=blue"

  if (syntax === 'markdown') {
    return "[![Binder](" + badgeImageUrl + ")](" + url + ")";
  } else if (syntax === 'rst') {
    return ".. image:: " + badgeImageUrl + "\n :target: " + url;

  }
}
