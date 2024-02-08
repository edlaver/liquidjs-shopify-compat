// Shopify Liquid filters to be implemented:
[
  {
    cart: [{ name: "item_count_for_variant" }, { name: "line_items_for" }],
  },
  {
    collection: [
      { name: "link_to_type" },
      { name: "link_to_vendor" },
      { name: "sort_by" },
      { name: "url_for_type" },
      { name: "url_for_vendor" },
      { name: "within" },
      { name: "highlight_active_tag" },
    ],
  },
  {
    color: [
      { name: "brightness_difference" },
      { name: "color_brightness" },
      { name: "color_contrast" },
      { name: "color_darken" },
      { name: "color_desaturate" },
      { name: "color_difference" },
      { name: "color_extract" },
      { name: "color_lighten" },
      { name: "color_mix" },
      { name: "color_modify" },
      { name: "color_saturate" },
      { name: "color_to_hex" },
      { name: "color_to_hsl" },
      { name: "color_to_rgb" },
      { name: "hex_to_rgba" },
    ],
  },
  {
    string: [
      { name: "hmac_sha1" },
      { name: "hmac_sha256" },
      { name: "md5" },
      { name: "sha1" },
      { name: "sha256" },
      { name: "base64_decode" },
      { name: "base64_encode" },
      { name: "base64_url_safe_decode" },
      { name: "base64_url_safe_encode" },
      { name: "camelize" },
      { name: "handleize" },
      { name: "url_escape" },
      { name: "url_param_escape" },
      { name: "pluralize" },
    ],
  },
  {
    localization: [
      { name: "currency_selector" },
      { name: "translate" },
      { name: "format_address" },
    ],
  },
  {
    customer: [
      { name: "customer_login_link" },
      { name: "customer_logout_link" },
      { name: "customer_register_link" },
      { name: "login_button" },
    ],
  },
  { format: [{ name: "weight_with_unit" }] },
  {
    font: [
      { name: "font_face" },
      { name: "font_modify" },
      { name: "font_url" },
    ],
  },
  {
    default: [{ name: "default_errors" }, { name: "default_pagination" }],
  },
  {
    payment: [
      { name: "payment_button" },
      { name: "payment_terms" },
      { name: "payment_type_img_url" },
      { name: "payment_type_svg_tag" },
    ],
  },
  {
    html: [
      { name: "time_tag" },
      { name: "highlight" },
      { name: "link_to" },
      { name: "placeholder_svg_tag" },
      { name: "preload_tag" },
      { name: "script_tag" },
      { name: "stylesheet_tag" },
    ],
  },
  {
    media: [
      { name: "external_video_tag" },
      { name: "external_video_url" },
      { name: "image_tag" },
      { name: "media_tag" },
      { name: "model_viewer_tag" },
      { name: "video_tag" },
      { name: "article_img_url" },
      { name: "collection_img_url" },
      { name: "image_url" },
      { name: "img_tag" },
      { name: "img_url" },
      { name: "product_img_url" },
    ],
  },
  {
    metafield: [{ name: "metafield_tag" }, { name: "metafield_text" }],
  },
  {
    money: [
      { name: "money" },
      { name: "money_with_currency" },
      { name: "money_without_currency" },
      { name: "money_without_trailing_zeros" },
    ],
  },
  {
    tag: [
      { name: "link_to_add_tag" },
      { name: "link_to_remove_tag" },
      { name: "link_to_tag" },
    ],
  },
  {
    hosted_file: [
      { name: "asset_img_url" },
      { name: "asset_url" },
      { name: "file_img_url" },
      { name: "file_url" },
      { name: "global_asset_url" },
      { name: "shopify_asset_url" },
    ],
  },
];
