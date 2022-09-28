import axios from 'axios';

// Get the cover page url  from Notion
export async function getCoverUrl(pageId) {
  const response = await axios.get(
    `https://api.notion.com/v1/pages/${pageId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': `${process.env.NOTION_VERSION}`,
      },
    }
  );
  return response.data.cover.file.url;
}

// Get the icon of the Notion Page
export async function getIconUrl(pageId) {
  const response = await axios.get(
    `https://api.notion.com/v1/pages/${pageId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': `${process.env.NOTION_VERSION}`,
      },
    }
  );
  return response.data.icon.file.url;
}

// Get the page Headline
export async function getHeadline(pageId) {
  const res = await axios.get(`https://api.notion.com/v1/pages/${pageId}`, {
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': `${process.env.NOTION_VERSION}`,
    },
  });
  return res.data.properties.title.title[0].plain_text;
}

// Get the page children
export async function getChildren(pageId) {
  const res = await axios.get(
    `https://api.notion.com/v1/blocks/${pageId}/children`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': `${process.env.NOTION_VERSION}`,
      },
    }
  );
  const children = res.data.results.map((item) => {
    const result = {
      type: item.type,
      id: item.id,
    };
    switch (item.type) {
      case 'file':
        result['caption'] = item.file.caption[0].plain_text;
        result['url'] = item.file.file.url;
        result['color'] = item.file.caption[0].annotations.color;
        break;
      case 'paragraph':
        // result['text'] = 'testing ...';
        result['text'] =
          (item.paragraph &&
            item.paragraph.rich_text[0] &&
            item.paragraph.rich_text[0].plain_text) ||
          '';
        break;
      default:
        break;
    }
    return result;
  });

  return children;
}


