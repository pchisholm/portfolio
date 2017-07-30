/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Post from '../api/post/post.model';
import User from '../api/user/user.model';
import Link from '../api/link/link.model';

Post.find({}).remove()
  .then(() => {
    Post.create({
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter1',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body:
        {
          "ops": [
            {
              "attributes": {
                "bold": true
              },
              "insert": "Bold text test"
            },
            {
              "insert": "\n"
            },
            {
              "attributes": {
                "italic": true
              },
              "insert": "Italic text test"
            },
            {
              "insert": "\n"
            },
            {
              "attributes": {
                "underline": true
              },
              "insert": "Underscored text test"
            },
            {
              "insert": "\n"
            },
            {
              "attributes": {
                "strike": true
              },
              "insert": "Strike-through text test"
            },
            {
              "insert": "\n\nQuote test"
            },
            {
              "attributes": {
                "blockquote": true
              },
              "insert": "\n"
            },
            {
              "insert": "\nCode test\n'use strict';"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "import angular from 'angular';"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n\n"
            },
            {
              "insert": "/*@ngInject*/"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "export function searchFilter() {"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": " return (arr, str) => {"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "  if (!str) return arr;"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "  let result = [];"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n\n"
            },
            {
              "insert": "  angular.forEach(arr, (o) => {"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "    result.push(o);"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "  });"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "  console.log(result)"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n\n"
            },
            {
              "insert": "  return result;"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": " }"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "}"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n\n"
            },
            {
              "insert": "export default angular.module('portfolioApp.search', [])"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": " .filter('search', searchFilter)"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": " .name;"
            },
            {
              "attributes": {
                "code-block": true
              },
              "insert": "\n"
            },
            {
              "insert": "\nEnumeration test"
            },
            {
              "attributes": {
                "list": "ordered"
              },
              "insert": "\n"
            },
            {
              "insert": "Enumeration test"
            },
            {
              "attributes": {
                "list": "ordered"
              },
              "insert": "\n"
            },
            {
              "insert": "Enumeration test"
            },
            {
              "attributes": {
                "list": "ordered"
              },
              "insert": "\n"
            },
            {
              "insert": "\nBullet test"
            },
            {
              "attributes": {
                "list": "bullet"
              },
              "insert": "\n"
            },
            {
              "insert": "Bullet test"
            },
            {
              "attributes": {
                "list": "bullet"
              },
              "insert": "\n"
            },
            {
              "insert": "Bullet test"
            },
            {
              "attributes": {
                "list": "bullet"
              },
              "insert": "\n"
            },
            {
              "insert": "\nIndented text test"
            },
            {
              "attributes": {
                "indent": 1
              },
              "insert": "\n"
            },
            {
              "insert": "\nParagraph right align test"
            },
            {
              "attributes": {
                "align": "right",
                "direction": "rtl"
              },
              "insert": "\n"
            },
            {
              "attributes": {
                "size": "small"
              },
              "insert": "Small text size test"
            },
            {
              "insert": "\nNormal Text size test \n"
            },
            {
              "attributes": {
                "size": "large"
              },
              "insert": "Large Text size test"
            },
            {
              "insert": "\n"
            },
            {
              "attributes": {
                "size": "huge"
              },
              "insert": "Huge Text size test"
            },
            {
              "insert": "\n\nHeading 1 test"
            },
            {
              "attributes": {
                "header": 1
              },
              "insert": "\n"
            },
            {
              "insert": "Heading 2 test"
            },
            {
              "attributes": {
                "header": 2
              },
              "insert": "\n"
            },
            {
              "insert": "Heading 3 test "
            },
            {
              "attributes": {
                "header": 3
              },
              "insert": "\n"
            },
            {
              "insert": "Heading 4 test"
            },
            {
              "attributes": {
                "header": 4
              },
              "insert": "\n"
            },
            {
              "insert": "Heading 5 test"
            },
            {
              "attributes": {
                "header": 5
              },
              "insert": "\n"
            },
            {
              "insert": "Heading 6 test"
            },
            {
              "attributes": {
                "header": 6
              },
              "insert": "\n"
            },
            {
              "insert": "\n"
            },
            {
              "attributes": {
                "color": "#9933ff"
              },
              "insert": "Colored text test"
            },
            {
              "insert": "\n"
            },
            {
              "attributes": {
                "background": "#ffff00"
              },
              "insert": "Background color text test"
            },
            {
              "insert": "\n\nSans Serif test\n"
            },
            {
              "attributes": {
                "font": "serif"
              },
              "insert": "Serif test"
            },
            {
              "insert": "\n"
            },
            {
              "attributes": {
                "font": "monospace"
              },
              "insert": "Monospace test"
            },
            {
              "insert": "\n\nCenter text test"
            },
            {
              "attributes": {
                "align": "center"
              },
              "insert": "\n"
            },
            {
              "insert": "Right text test"
            },
            {
              "attributes": {
                "align": "right"
              },
              "insert": "\n"
            },
            {
              "insert": "Left text test\nJustified text test"
            },
            {
              "attributes": {
                "align": "justify"
              },
              "insert": "\n"
            }
          ]
        }
      },
      {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter1',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body:
          {
            "ops": [
              {
                "attributes": {
                  "bold": true
                },
                "insert": "Bold text test"
              },
              {
                "insert": "\n"
              },
              {
                "attributes": {
                  "italic": true
                },
                "insert": "Italic text test"
              },
              {
                "insert": "\n"
              },
              {
                "attributes": {
                  "underline": true
                },
                "insert": "Underscored text test"
              },
              {
                "insert": "\n"
              },
              {
                "attributes": {
                  "strike": true
                },
                "insert": "Strike-through text test"
              },
              {
                "insert": "\n\nQuote test"
              },
              {
                "attributes": {
                  "blockquote": true
                },
                "insert": "\n"
              },
              {
                "insert": "\nCode test\n'use strict';"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "import angular from 'angular';"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n\n"
              },
              {
                "insert": "/*@ngInject*/"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "export function searchFilter() {"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": " return (arr, str) => {"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "  if (!str) return arr;"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "  let result = [];"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n\n"
              },
              {
                "insert": "  angular.forEach(arr, (o) => {"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "    result.push(o);"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "  });"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "  console.log(result)"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n\n"
              },
              {
                "insert": "  return result;"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": " }"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "}"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n\n"
              },
              {
                "insert": "export default angular.module('portfolioApp.search', [])"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": " .filter('search', searchFilter)"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": " .name;"
              },
              {
                "attributes": {
                  "code-block": true
                },
                "insert": "\n"
              },
              {
                "insert": "\nEnumeration test"
              },
              {
                "attributes": {
                  "list": "ordered"
                },
                "insert": "\n"
              },
              {
                "insert": "Enumeration test"
              },
              {
                "attributes": {
                  "list": "ordered"
                },
                "insert": "\n"
              },
              {
                "insert": "Enumeration test"
              },
              {
                "attributes": {
                  "list": "ordered"
                },
                "insert": "\n"
              },
              {
                "insert": "\nBullet test"
              },
              {
                "attributes": {
                  "list": "bullet"
                },
                "insert": "\n"
              },
              {
                "insert": "Bullet test"
              },
              {
                "attributes": {
                  "list": "bullet"
                },
                "insert": "\n"
              },
              {
                "insert": "Bullet test"
              },
              {
                "attributes": {
                  "list": "bullet"
                },
                "insert": "\n"
              },
              {
                "insert": "\nIndented text test"
              },
              {
                "attributes": {
                  "indent": 1
                },
                "insert": "\n"
              },
              {
                "insert": "\nParagraph right align test"
              },
              {
                "attributes": {
                  "align": "right",
                  "direction": "rtl"
                },
                "insert": "\n"
              },
              {
                "attributes": {
                  "size": "small"
                },
                "insert": "Small text size test"
              },
              {
                "insert": "\nNormal Text size test \n"
              },
              {
                "attributes": {
                  "size": "large"
                },
                "insert": "Large Text size test"
              },
              {
                "insert": "\n"
              },
              {
                "attributes": {
                  "size": "huge"
                },
                "insert": "Huge Text size test"
              },
              {
                "insert": "\n\nHeading 1 test"
              },
              {
                "attributes": {
                  "header": 1
                },
                "insert": "\n"
              },
              {
                "insert": "Heading 2 test"
              },
              {
                "attributes": {
                  "header": 2
                },
                "insert": "\n"
              },
              {
                "insert": "Heading 3 test "
              },
              {
                "attributes": {
                  "header": 3
                },
                "insert": "\n"
              },
              {
                "insert": "Heading 4 test"
              },
              {
                "attributes": {
                  "header": 4
                },
                "insert": "\n"
              },
              {
                "insert": "Heading 5 test"
              },
              {
                "attributes": {
                  "header": 5
                },
                "insert": "\n"
              },
              {
                "insert": "Heading 6 test"
              },
              {
                "attributes": {
                  "header": 6
                },
                "insert": "\n"
              },
              {
                "insert": "\n"
              },
              {
                "attributes": {
                  "color": "#9933ff"
                },
                "insert": "Colored text test"
              },
              {
                "insert": "\n"
              },
              {
                "attributes": {
                  "background": "#ffff00"
                },
                "insert": "Background color text test"
              },
              {
                "insert": "\n\nSans Serif test\n"
              },
              {
                "attributes": {
                  "font": "serif"
                },
                "insert": "Serif test"
              },
              {
                "insert": "\n"
              },
              {
                "attributes": {
                  "font": "monospace"
                },
                "insert": "Monospace test"
              },
              {
                "insert": "\n\nCenter text test"
              },
              {
                "attributes": {
                  "align": "center"
                },
                "insert": "\n"
              },
              {
                "insert": "Right text test"
              },
              {
                "attributes": {
                  "align": "right"
                },
                "insert": "\n"
              },
              {
                "insert": "Left text test\nJustified text test"
              },
              {
                "attributes": {
                  "align": "justify"
                },
                "insert": "\n"
              }
            ]
          }
        },{
          created: Date.now(),
          type: 'Project',
          sub_type: 'docker',
          title: 'SVG Converter1',
          sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
          body:
            {
              "ops": [
                {
                  "attributes": {
                    "bold": true
                  },
                  "insert": "Bold text test"
                },
                {
                  "insert": "\n"
                },
                {
                  "attributes": {
                    "italic": true
                  },
                  "insert": "Italic text test"
                },
                {
                  "insert": "\n"
                },
                {
                  "attributes": {
                    "underline": true
                  },
                  "insert": "Underscored text test"
                },
                {
                  "insert": "\n"
                },
                {
                  "attributes": {
                    "strike": true
                  },
                  "insert": "Strike-through text test"
                },
                {
                  "insert": "\n\nQuote test"
                },
                {
                  "attributes": {
                    "blockquote": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "\nCode test\n'use strict';"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "import angular from 'angular';"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n\n"
                },
                {
                  "insert": "/*@ngInject*/"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "export function searchFilter() {"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": " return (arr, str) => {"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "  if (!str) return arr;"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "  let result = [];"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n\n"
                },
                {
                  "insert": "  angular.forEach(arr, (o) => {"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "    result.push(o);"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "  });"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "  console.log(result)"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n\n"
                },
                {
                  "insert": "  return result;"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": " }"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "}"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n\n"
                },
                {
                  "insert": "export default angular.module('portfolioApp.search', [])"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": " .filter('search', searchFilter)"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": " .name;"
                },
                {
                  "attributes": {
                    "code-block": true
                  },
                  "insert": "\n"
                },
                {
                  "insert": "\nEnumeration test"
                },
                {
                  "attributes": {
                    "list": "ordered"
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Enumeration test"
                },
                {
                  "attributes": {
                    "list": "ordered"
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Enumeration test"
                },
                {
                  "attributes": {
                    "list": "ordered"
                  },
                  "insert": "\n"
                },
                {
                  "insert": "\nBullet test"
                },
                {
                  "attributes": {
                    "list": "bullet"
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Bullet test"
                },
                {
                  "attributes": {
                    "list": "bullet"
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Bullet test"
                },
                {
                  "attributes": {
                    "list": "bullet"
                  },
                  "insert": "\n"
                },
                {
                  "insert": "\nIndented text test"
                },
                {
                  "attributes": {
                    "indent": 1
                  },
                  "insert": "\n"
                },
                {
                  "insert": "\nParagraph right align test"
                },
                {
                  "attributes": {
                    "align": "right",
                    "direction": "rtl"
                  },
                  "insert": "\n"
                },
                {
                  "attributes": {
                    "size": "small"
                  },
                  "insert": "Small text size test"
                },
                {
                  "insert": "\nNormal Text size test \n"
                },
                {
                  "attributes": {
                    "size": "large"
                  },
                  "insert": "Large Text size test"
                },
                {
                  "insert": "\n"
                },
                {
                  "attributes": {
                    "size": "huge"
                  },
                  "insert": "Huge Text size test"
                },
                {
                  "insert": "\n\nHeading 1 test"
                },
                {
                  "attributes": {
                    "header": 1
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Heading 2 test"
                },
                {
                  "attributes": {
                    "header": 2
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Heading 3 test "
                },
                {
                  "attributes": {
                    "header": 3
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Heading 4 test"
                },
                {
                  "attributes": {
                    "header": 4
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Heading 5 test"
                },
                {
                  "attributes": {
                    "header": 5
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Heading 6 test"
                },
                {
                  "attributes": {
                    "header": 6
                  },
                  "insert": "\n"
                },
                {
                  "insert": "\n"
                },
                {
                  "attributes": {
                    "color": "#9933ff"
                  },
                  "insert": "Colored text test"
                },
                {
                  "insert": "\n"
                },
                {
                  "attributes": {
                    "background": "#ffff00"
                  },
                  "insert": "Background color text test"
                },
                {
                  "insert": "\n\nSans Serif test\n"
                },
                {
                  "attributes": {
                    "font": "serif"
                  },
                  "insert": "Serif test"
                },
                {
                  "insert": "\n"
                },
                {
                  "attributes": {
                    "font": "monospace"
                  },
                  "insert": "Monospace test"
                },
                {
                  "insert": "\n\nCenter text test"
                },
                {
                  "attributes": {
                    "align": "center"
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Right text test"
                },
                {
                  "attributes": {
                    "align": "right"
                  },
                  "insert": "\n"
                },
                {
                  "insert": "Left text test\nJustified text test"
                },
                {
                  "attributes": {
                    "align": "justify"
                  },
                  "insert": "\n"
                }
              ]
            }
          },{
            created: Date.now(),
            type: 'Project',
            sub_type: 'docker',
            title: 'SVG Converter1',
            sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
            body:
              {
                "ops": [
                  {
                    "attributes": {
                      "bold": true
                    },
                    "insert": "Bold text test"
                  },
                  {
                    "insert": "\n"
                  },
                  {
                    "attributes": {
                      "italic": true
                    },
                    "insert": "Italic text test"
                  },
                  {
                    "insert": "\n"
                  },
                  {
                    "attributes": {
                      "underline": true
                    },
                    "insert": "Underscored text test"
                  },
                  {
                    "insert": "\n"
                  },
                  {
                    "attributes": {
                      "strike": true
                    },
                    "insert": "Strike-through text test"
                  },
                  {
                    "insert": "\n\nQuote test"
                  },
                  {
                    "attributes": {
                      "blockquote": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "\nCode test\n'use strict';"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "import angular from 'angular';"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n\n"
                  },
                  {
                    "insert": "/*@ngInject*/"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "export function searchFilter() {"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": " return (arr, str) => {"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "  if (!str) return arr;"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "  let result = [];"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n\n"
                  },
                  {
                    "insert": "  angular.forEach(arr, (o) => {"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "    result.push(o);"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "  });"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "  console.log(result)"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n\n"
                  },
                  {
                    "insert": "  return result;"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": " }"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "}"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n\n"
                  },
                  {
                    "insert": "export default angular.module('portfolioApp.search', [])"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": " .filter('search', searchFilter)"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": " .name;"
                  },
                  {
                    "attributes": {
                      "code-block": true
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "\nEnumeration test"
                  },
                  {
                    "attributes": {
                      "list": "ordered"
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Enumeration test"
                  },
                  {
                    "attributes": {
                      "list": "ordered"
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Enumeration test"
                  },
                  {
                    "attributes": {
                      "list": "ordered"
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "\nBullet test"
                  },
                  {
                    "attributes": {
                      "list": "bullet"
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Bullet test"
                  },
                  {
                    "attributes": {
                      "list": "bullet"
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Bullet test"
                  },
                  {
                    "attributes": {
                      "list": "bullet"
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "\nIndented text test"
                  },
                  {
                    "attributes": {
                      "indent": 1
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "\nParagraph right align test"
                  },
                  {
                    "attributes": {
                      "align": "right",
                      "direction": "rtl"
                    },
                    "insert": "\n"
                  },
                  {
                    "attributes": {
                      "size": "small"
                    },
                    "insert": "Small text size test"
                  },
                  {
                    "insert": "\nNormal Text size test \n"
                  },
                  {
                    "attributes": {
                      "size": "large"
                    },
                    "insert": "Large Text size test"
                  },
                  {
                    "insert": "\n"
                  },
                  {
                    "attributes": {
                      "size": "huge"
                    },
                    "insert": "Huge Text size test"
                  },
                  {
                    "insert": "\n\nHeading 1 test"
                  },
                  {
                    "attributes": {
                      "header": 1
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Heading 2 test"
                  },
                  {
                    "attributes": {
                      "header": 2
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Heading 3 test "
                  },
                  {
                    "attributes": {
                      "header": 3
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Heading 4 test"
                  },
                  {
                    "attributes": {
                      "header": 4
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Heading 5 test"
                  },
                  {
                    "attributes": {
                      "header": 5
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Heading 6 test"
                  },
                  {
                    "attributes": {
                      "header": 6
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "\n"
                  },
                  {
                    "attributes": {
                      "color": "#9933ff"
                    },
                    "insert": "Colored text test"
                  },
                  {
                    "insert": "\n"
                  },
                  {
                    "attributes": {
                      "background": "#ffff00"
                    },
                    "insert": "Background color text test"
                  },
                  {
                    "insert": "\n\nSans Serif test\n"
                  },
                  {
                    "attributes": {
                      "font": "serif"
                    },
                    "insert": "Serif test"
                  },
                  {
                    "insert": "\n"
                  },
                  {
                    "attributes": {
                      "font": "monospace"
                    },
                    "insert": "Monospace test"
                  },
                  {
                    "insert": "\n\nCenter text test"
                  },
                  {
                    "attributes": {
                      "align": "center"
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Right text test"
                  },
                  {
                    "attributes": {
                      "align": "right"
                    },
                    "insert": "\n"
                  },
                  {
                    "insert": "Left text test\nJustified text test"
                  },
                  {
                    "attributes": {
                      "align": "justify"
                    },
                    "insert": "\n"
                  }
                ]
              }
            },{
              created: Date.now(),
              type: 'Project',
              sub_type: 'docker',
              title: 'SVG Converter1',
              sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
              body:
                {
                  "ops": [
                    {
                      "attributes": {
                        "bold": true
                      },
                      "insert": "Bold text test"
                    },
                    {
                      "insert": "\n"
                    },
                    {
                      "attributes": {
                        "italic": true
                      },
                      "insert": "Italic text test"
                    },
                    {
                      "insert": "\n"
                    },
                    {
                      "attributes": {
                        "underline": true
                      },
                      "insert": "Underscored text test"
                    },
                    {
                      "insert": "\n"
                    },
                    {
                      "attributes": {
                        "strike": true
                      },
                      "insert": "Strike-through text test"
                    },
                    {
                      "insert": "\n\nQuote test"
                    },
                    {
                      "attributes": {
                        "blockquote": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "\nCode test\n'use strict';"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "import angular from 'angular';"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n\n"
                    },
                    {
                      "insert": "/*@ngInject*/"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "export function searchFilter() {"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": " return (arr, str) => {"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "  if (!str) return arr;"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "  let result = [];"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n\n"
                    },
                    {
                      "insert": "  angular.forEach(arr, (o) => {"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "    result.push(o);"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "  });"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "  console.log(result)"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n\n"
                    },
                    {
                      "insert": "  return result;"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": " }"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "}"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n\n"
                    },
                    {
                      "insert": "export default angular.module('portfolioApp.search', [])"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": " .filter('search', searchFilter)"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": " .name;"
                    },
                    {
                      "attributes": {
                        "code-block": true
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "\nEnumeration test"
                    },
                    {
                      "attributes": {
                        "list": "ordered"
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Enumeration test"
                    },
                    {
                      "attributes": {
                        "list": "ordered"
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Enumeration test"
                    },
                    {
                      "attributes": {
                        "list": "ordered"
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "\nBullet test"
                    },
                    {
                      "attributes": {
                        "list": "bullet"
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Bullet test"
                    },
                    {
                      "attributes": {
                        "list": "bullet"
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Bullet test"
                    },
                    {
                      "attributes": {
                        "list": "bullet"
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "\nIndented text test"
                    },
                    {
                      "attributes": {
                        "indent": 1
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "\nParagraph right align test"
                    },
                    {
                      "attributes": {
                        "align": "right",
                        "direction": "rtl"
                      },
                      "insert": "\n"
                    },
                    {
                      "attributes": {
                        "size": "small"
                      },
                      "insert": "Small text size test"
                    },
                    {
                      "insert": "\nNormal Text size test \n"
                    },
                    {
                      "attributes": {
                        "size": "large"
                      },
                      "insert": "Large Text size test"
                    },
                    {
                      "insert": "\n"
                    },
                    {
                      "attributes": {
                        "size": "huge"
                      },
                      "insert": "Huge Text size test"
                    },
                    {
                      "insert": "\n\nHeading 1 test"
                    },
                    {
                      "attributes": {
                        "header": 1
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Heading 2 test"
                    },
                    {
                      "attributes": {
                        "header": 2
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Heading 3 test "
                    },
                    {
                      "attributes": {
                        "header": 3
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Heading 4 test"
                    },
                    {
                      "attributes": {
                        "header": 4
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Heading 5 test"
                    },
                    {
                      "attributes": {
                        "header": 5
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Heading 6 test"
                    },
                    {
                      "attributes": {
                        "header": 6
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "\n"
                    },
                    {
                      "attributes": {
                        "color": "#9933ff"
                      },
                      "insert": "Colored text test"
                    },
                    {
                      "insert": "\n"
                    },
                    {
                      "attributes": {
                        "background": "#ffff00"
                      },
                      "insert": "Background color text test"
                    },
                    {
                      "insert": "\n\nSans Serif test\n"
                    },
                    {
                      "attributes": {
                        "font": "serif"
                      },
                      "insert": "Serif test"
                    },
                    {
                      "insert": "\n"
                    },
                    {
                      "attributes": {
                        "font": "monospace"
                      },
                      "insert": "Monospace test"
                    },
                    {
                      "insert": "\n\nCenter text test"
                    },
                    {
                      "attributes": {
                        "align": "center"
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Right text test"
                    },
                    {
                      "attributes": {
                        "align": "right"
                      },
                      "insert": "\n"
                    },
                    {
                      "insert": "Left text test\nJustified text test"
                    },
                    {
                      "attributes": {
                        "align": "justify"
                      },
                      "insert": "\n"
                    }
                  ]
                }
              },{
                created: Date.now(),
                type: 'Project',
                sub_type: 'docker',
                title: 'SVG Converter1',
                sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                body:
                  {
                    "ops": [
                      {
                        "attributes": {
                          "bold": true
                        },
                        "insert": "Bold text test"
                      },
                      {
                        "insert": "\n"
                      },
                      {
                        "attributes": {
                          "italic": true
                        },
                        "insert": "Italic text test"
                      },
                      {
                        "insert": "\n"
                      },
                      {
                        "attributes": {
                          "underline": true
                        },
                        "insert": "Underscored text test"
                      },
                      {
                        "insert": "\n"
                      },
                      {
                        "attributes": {
                          "strike": true
                        },
                        "insert": "Strike-through text test"
                      },
                      {
                        "insert": "\n\nQuote test"
                      },
                      {
                        "attributes": {
                          "blockquote": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "\nCode test\n'use strict';"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "import angular from 'angular';"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n\n"
                      },
                      {
                        "insert": "/*@ngInject*/"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "export function searchFilter() {"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": " return (arr, str) => {"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "  if (!str) return arr;"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "  let result = [];"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n\n"
                      },
                      {
                        "insert": "  angular.forEach(arr, (o) => {"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "    result.push(o);"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "  });"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "  console.log(result)"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n\n"
                      },
                      {
                        "insert": "  return result;"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": " }"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "}"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n\n"
                      },
                      {
                        "insert": "export default angular.module('portfolioApp.search', [])"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": " .filter('search', searchFilter)"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": " .name;"
                      },
                      {
                        "attributes": {
                          "code-block": true
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "\nEnumeration test"
                      },
                      {
                        "attributes": {
                          "list": "ordered"
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Enumeration test"
                      },
                      {
                        "attributes": {
                          "list": "ordered"
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Enumeration test"
                      },
                      {
                        "attributes": {
                          "list": "ordered"
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "\nBullet test"
                      },
                      {
                        "attributes": {
                          "list": "bullet"
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Bullet test"
                      },
                      {
                        "attributes": {
                          "list": "bullet"
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Bullet test"
                      },
                      {
                        "attributes": {
                          "list": "bullet"
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "\nIndented text test"
                      },
                      {
                        "attributes": {
                          "indent": 1
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "\nParagraph right align test"
                      },
                      {
                        "attributes": {
                          "align": "right",
                          "direction": "rtl"
                        },
                        "insert": "\n"
                      },
                      {
                        "attributes": {
                          "size": "small"
                        },
                        "insert": "Small text size test"
                      },
                      {
                        "insert": "\nNormal Text size test \n"
                      },
                      {
                        "attributes": {
                          "size": "large"
                        },
                        "insert": "Large Text size test"
                      },
                      {
                        "insert": "\n"
                      },
                      {
                        "attributes": {
                          "size": "huge"
                        },
                        "insert": "Huge Text size test"
                      },
                      {
                        "insert": "\n\nHeading 1 test"
                      },
                      {
                        "attributes": {
                          "header": 1
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Heading 2 test"
                      },
                      {
                        "attributes": {
                          "header": 2
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Heading 3 test "
                      },
                      {
                        "attributes": {
                          "header": 3
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Heading 4 test"
                      },
                      {
                        "attributes": {
                          "header": 4
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Heading 5 test"
                      },
                      {
                        "attributes": {
                          "header": 5
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Heading 6 test"
                      },
                      {
                        "attributes": {
                          "header": 6
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "\n"
                      },
                      {
                        "attributes": {
                          "color": "#9933ff"
                        },
                        "insert": "Colored text test"
                      },
                      {
                        "insert": "\n"
                      },
                      {
                        "attributes": {
                          "background": "#ffff00"
                        },
                        "insert": "Background color text test"
                      },
                      {
                        "insert": "\n\nSans Serif test\n"
                      },
                      {
                        "attributes": {
                          "font": "serif"
                        },
                        "insert": "Serif test"
                      },
                      {
                        "insert": "\n"
                      },
                      {
                        "attributes": {
                          "font": "monospace"
                        },
                        "insert": "Monospace test"
                      },
                      {
                        "insert": "\n\nCenter text test"
                      },
                      {
                        "attributes": {
                          "align": "center"
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Right text test"
                      },
                      {
                        "attributes": {
                          "align": "right"
                        },
                        "insert": "\n"
                      },
                      {
                        "insert": "Left text test\nJustified text test"
                      },
                      {
                        "attributes": {
                          "align": "justify"
                        },
                        "insert": "\n"
                      }
                    ]
                  }
                },{
                  created: Date.now(),
                  type: 'Project',
                  sub_type: 'docker',
                  title: 'SVG Converter1',
                  sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                  body:
                    {
                      "ops": [
                        {
                          "attributes": {
                            "bold": true
                          },
                          "insert": "Bold text test"
                        },
                        {
                          "insert": "\n"
                        },
                        {
                          "attributes": {
                            "italic": true
                          },
                          "insert": "Italic text test"
                        },
                        {
                          "insert": "\n"
                        },
                        {
                          "attributes": {
                            "underline": true
                          },
                          "insert": "Underscored text test"
                        },
                        {
                          "insert": "\n"
                        },
                        {
                          "attributes": {
                            "strike": true
                          },
                          "insert": "Strike-through text test"
                        },
                        {
                          "insert": "\n\nQuote test"
                        },
                        {
                          "attributes": {
                            "blockquote": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "\nCode test\n'use strict';"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "import angular from 'angular';"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n\n"
                        },
                        {
                          "insert": "/*@ngInject*/"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "export function searchFilter() {"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": " return (arr, str) => {"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "  if (!str) return arr;"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "  let result = [];"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n\n"
                        },
                        {
                          "insert": "  angular.forEach(arr, (o) => {"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "    result.push(o);"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "  });"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "  console.log(result)"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n\n"
                        },
                        {
                          "insert": "  return result;"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": " }"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "}"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n\n"
                        },
                        {
                          "insert": "export default angular.module('portfolioApp.search', [])"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": " .filter('search', searchFilter)"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": " .name;"
                        },
                        {
                          "attributes": {
                            "code-block": true
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "\nEnumeration test"
                        },
                        {
                          "attributes": {
                            "list": "ordered"
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Enumeration test"
                        },
                        {
                          "attributes": {
                            "list": "ordered"
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Enumeration test"
                        },
                        {
                          "attributes": {
                            "list": "ordered"
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "\nBullet test"
                        },
                        {
                          "attributes": {
                            "list": "bullet"
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Bullet test"
                        },
                        {
                          "attributes": {
                            "list": "bullet"
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Bullet test"
                        },
                        {
                          "attributes": {
                            "list": "bullet"
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "\nIndented text test"
                        },
                        {
                          "attributes": {
                            "indent": 1
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "\nParagraph right align test"
                        },
                        {
                          "attributes": {
                            "align": "right",
                            "direction": "rtl"
                          },
                          "insert": "\n"
                        },
                        {
                          "attributes": {
                            "size": "small"
                          },
                          "insert": "Small text size test"
                        },
                        {
                          "insert": "\nNormal Text size test \n"
                        },
                        {
                          "attributes": {
                            "size": "large"
                          },
                          "insert": "Large Text size test"
                        },
                        {
                          "insert": "\n"
                        },
                        {
                          "attributes": {
                            "size": "huge"
                          },
                          "insert": "Huge Text size test"
                        },
                        {
                          "insert": "\n\nHeading 1 test"
                        },
                        {
                          "attributes": {
                            "header": 1
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Heading 2 test"
                        },
                        {
                          "attributes": {
                            "header": 2
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Heading 3 test "
                        },
                        {
                          "attributes": {
                            "header": 3
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Heading 4 test"
                        },
                        {
                          "attributes": {
                            "header": 4
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Heading 5 test"
                        },
                        {
                          "attributes": {
                            "header": 5
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Heading 6 test"
                        },
                        {
                          "attributes": {
                            "header": 6
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "\n"
                        },
                        {
                          "attributes": {
                            "color": "#9933ff"
                          },
                          "insert": "Colored text test"
                        },
                        {
                          "insert": "\n"
                        },
                        {
                          "attributes": {
                            "background": "#ffff00"
                          },
                          "insert": "Background color text test"
                        },
                        {
                          "insert": "\n\nSans Serif test\n"
                        },
                        {
                          "attributes": {
                            "font": "serif"
                          },
                          "insert": "Serif test"
                        },
                        {
                          "insert": "\n"
                        },
                        {
                          "attributes": {
                            "font": "monospace"
                          },
                          "insert": "Monospace test"
                        },
                        {
                          "insert": "\n\nCenter text test"
                        },
                        {
                          "attributes": {
                            "align": "center"
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Right text test"
                        },
                        {
                          "attributes": {
                            "align": "right"
                          },
                          "insert": "\n"
                        },
                        {
                          "insert": "Left text test\nJustified text test"
                        },
                        {
                          "attributes": {
                            "align": "justify"
                          },
                          "insert": "\n"
                        }
                      ]
                    }
                  },{
                    created: Date.now(),
                    type: 'Project',
                    sub_type: 'docker',
                    title: 'SVG Converter1',
                    sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                    body:
                      {
                        "ops": [
                          {
                            "attributes": {
                              "bold": true
                            },
                            "insert": "Bold text test"
                          },
                          {
                            "insert": "\n"
                          },
                          {
                            "attributes": {
                              "italic": true
                            },
                            "insert": "Italic text test"
                          },
                          {
                            "insert": "\n"
                          },
                          {
                            "attributes": {
                              "underline": true
                            },
                            "insert": "Underscored text test"
                          },
                          {
                            "insert": "\n"
                          },
                          {
                            "attributes": {
                              "strike": true
                            },
                            "insert": "Strike-through text test"
                          },
                          {
                            "insert": "\n\nQuote test"
                          },
                          {
                            "attributes": {
                              "blockquote": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "\nCode test\n'use strict';"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "import angular from 'angular';"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n\n"
                          },
                          {
                            "insert": "/*@ngInject*/"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "export function searchFilter() {"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": " return (arr, str) => {"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "  if (!str) return arr;"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "  let result = [];"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n\n"
                          },
                          {
                            "insert": "  angular.forEach(arr, (o) => {"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "    result.push(o);"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "  });"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "  console.log(result)"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n\n"
                          },
                          {
                            "insert": "  return result;"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": " }"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "}"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n\n"
                          },
                          {
                            "insert": "export default angular.module('portfolioApp.search', [])"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": " .filter('search', searchFilter)"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": " .name;"
                          },
                          {
                            "attributes": {
                              "code-block": true
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "\nEnumeration test"
                          },
                          {
                            "attributes": {
                              "list": "ordered"
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Enumeration test"
                          },
                          {
                            "attributes": {
                              "list": "ordered"
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Enumeration test"
                          },
                          {
                            "attributes": {
                              "list": "ordered"
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "\nBullet test"
                          },
                          {
                            "attributes": {
                              "list": "bullet"
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Bullet test"
                          },
                          {
                            "attributes": {
                              "list": "bullet"
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Bullet test"
                          },
                          {
                            "attributes": {
                              "list": "bullet"
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "\nIndented text test"
                          },
                          {
                            "attributes": {
                              "indent": 1
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "\nParagraph right align test"
                          },
                          {
                            "attributes": {
                              "align": "right",
                              "direction": "rtl"
                            },
                            "insert": "\n"
                          },
                          {
                            "attributes": {
                              "size": "small"
                            },
                            "insert": "Small text size test"
                          },
                          {
                            "insert": "\nNormal Text size test \n"
                          },
                          {
                            "attributes": {
                              "size": "large"
                            },
                            "insert": "Large Text size test"
                          },
                          {
                            "insert": "\n"
                          },
                          {
                            "attributes": {
                              "size": "huge"
                            },
                            "insert": "Huge Text size test"
                          },
                          {
                            "insert": "\n\nHeading 1 test"
                          },
                          {
                            "attributes": {
                              "header": 1
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Heading 2 test"
                          },
                          {
                            "attributes": {
                              "header": 2
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Heading 3 test "
                          },
                          {
                            "attributes": {
                              "header": 3
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Heading 4 test"
                          },
                          {
                            "attributes": {
                              "header": 4
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Heading 5 test"
                          },
                          {
                            "attributes": {
                              "header": 5
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Heading 6 test"
                          },
                          {
                            "attributes": {
                              "header": 6
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "\n"
                          },
                          {
                            "attributes": {
                              "color": "#9933ff"
                            },
                            "insert": "Colored text test"
                          },
                          {
                            "insert": "\n"
                          },
                          {
                            "attributes": {
                              "background": "#ffff00"
                            },
                            "insert": "Background color text test"
                          },
                          {
                            "insert": "\n\nSans Serif test\n"
                          },
                          {
                            "attributes": {
                              "font": "serif"
                            },
                            "insert": "Serif test"
                          },
                          {
                            "insert": "\n"
                          },
                          {
                            "attributes": {
                              "font": "monospace"
                            },
                            "insert": "Monospace test"
                          },
                          {
                            "insert": "\n\nCenter text test"
                          },
                          {
                            "attributes": {
                              "align": "center"
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Right text test"
                          },
                          {
                            "attributes": {
                              "align": "right"
                            },
                            "insert": "\n"
                          },
                          {
                            "insert": "Left text test\nJustified text test"
                          },
                          {
                            "attributes": {
                              "align": "justify"
                            },
                            "insert": "\n"
                          }
                        ]
                      }
                    },{
                      created: Date.now(),
                      type: 'Project',
                      sub_type: 'docker',
                      title: 'SVG Converter1',
                      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                      body:
                        {
                          "ops": [
                            {
                              "attributes": {
                                "bold": true
                              },
                              "insert": "Bold text test"
                            },
                            {
                              "insert": "\n"
                            },
                            {
                              "attributes": {
                                "italic": true
                              },
                              "insert": "Italic text test"
                            },
                            {
                              "insert": "\n"
                            },
                            {
                              "attributes": {
                                "underline": true
                              },
                              "insert": "Underscored text test"
                            },
                            {
                              "insert": "\n"
                            },
                            {
                              "attributes": {
                                "strike": true
                              },
                              "insert": "Strike-through text test"
                            },
                            {
                              "insert": "\n\nQuote test"
                            },
                            {
                              "attributes": {
                                "blockquote": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "\nCode test\n'use strict';"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "import angular from 'angular';"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n\n"
                            },
                            {
                              "insert": "/*@ngInject*/"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "export function searchFilter() {"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": " return (arr, str) => {"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "  if (!str) return arr;"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "  let result = [];"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n\n"
                            },
                            {
                              "insert": "  angular.forEach(arr, (o) => {"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "    result.push(o);"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "  });"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "  console.log(result)"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n\n"
                            },
                            {
                              "insert": "  return result;"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": " }"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "}"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n\n"
                            },
                            {
                              "insert": "export default angular.module('portfolioApp.search', [])"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": " .filter('search', searchFilter)"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": " .name;"
                            },
                            {
                              "attributes": {
                                "code-block": true
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "\nEnumeration test"
                            },
                            {
                              "attributes": {
                                "list": "ordered"
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Enumeration test"
                            },
                            {
                              "attributes": {
                                "list": "ordered"
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Enumeration test"
                            },
                            {
                              "attributes": {
                                "list": "ordered"
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "\nBullet test"
                            },
                            {
                              "attributes": {
                                "list": "bullet"
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Bullet test"
                            },
                            {
                              "attributes": {
                                "list": "bullet"
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Bullet test"
                            },
                            {
                              "attributes": {
                                "list": "bullet"
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "\nIndented text test"
                            },
                            {
                              "attributes": {
                                "indent": 1
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "\nParagraph right align test"
                            },
                            {
                              "attributes": {
                                "align": "right",
                                "direction": "rtl"
                              },
                              "insert": "\n"
                            },
                            {
                              "attributes": {
                                "size": "small"
                              },
                              "insert": "Small text size test"
                            },
                            {
                              "insert": "\nNormal Text size test \n"
                            },
                            {
                              "attributes": {
                                "size": "large"
                              },
                              "insert": "Large Text size test"
                            },
                            {
                              "insert": "\n"
                            },
                            {
                              "attributes": {
                                "size": "huge"
                              },
                              "insert": "Huge Text size test"
                            },
                            {
                              "insert": "\n\nHeading 1 test"
                            },
                            {
                              "attributes": {
                                "header": 1
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Heading 2 test"
                            },
                            {
                              "attributes": {
                                "header": 2
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Heading 3 test "
                            },
                            {
                              "attributes": {
                                "header": 3
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Heading 4 test"
                            },
                            {
                              "attributes": {
                                "header": 4
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Heading 5 test"
                            },
                            {
                              "attributes": {
                                "header": 5
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Heading 6 test"
                            },
                            {
                              "attributes": {
                                "header": 6
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "\n"
                            },
                            {
                              "attributes": {
                                "color": "#9933ff"
                              },
                              "insert": "Colored text test"
                            },
                            {
                              "insert": "\n"
                            },
                            {
                              "attributes": {
                                "background": "#ffff00"
                              },
                              "insert": "Background color text test"
                            },
                            {
                              "insert": "\n\nSans Serif test\n"
                            },
                            {
                              "attributes": {
                                "font": "serif"
                              },
                              "insert": "Serif test"
                            },
                            {
                              "insert": "\n"
                            },
                            {
                              "attributes": {
                                "font": "monospace"
                              },
                              "insert": "Monospace test"
                            },
                            {
                              "insert": "\n\nCenter text test"
                            },
                            {
                              "attributes": {
                                "align": "center"
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Right text test"
                            },
                            {
                              "attributes": {
                                "align": "right"
                              },
                              "insert": "\n"
                            },
                            {
                              "insert": "Left text test\nJustified text test"
                            },
                            {
                              "attributes": {
                                "align": "justify"
                              },
                              "insert": "\n"
                            }
                          ]
                        }
                      },{
                        created: Date.now(),
                        type: 'Project',
                        sub_type: 'docker',
                        title: 'SVG Converter1',
                        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                        body:
                          {
                            "ops": [
                              {
                                "attributes": {
                                  "bold": true
                                },
                                "insert": "Bold text test"
                              },
                              {
                                "insert": "\n"
                              },
                              {
                                "attributes": {
                                  "italic": true
                                },
                                "insert": "Italic text test"
                              },
                              {
                                "insert": "\n"
                              },
                              {
                                "attributes": {
                                  "underline": true
                                },
                                "insert": "Underscored text test"
                              },
                              {
                                "insert": "\n"
                              },
                              {
                                "attributes": {
                                  "strike": true
                                },
                                "insert": "Strike-through text test"
                              },
                              {
                                "insert": "\n\nQuote test"
                              },
                              {
                                "attributes": {
                                  "blockquote": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "\nCode test\n'use strict';"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "import angular from 'angular';"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n\n"
                              },
                              {
                                "insert": "/*@ngInject*/"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "export function searchFilter() {"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": " return (arr, str) => {"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "  if (!str) return arr;"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "  let result = [];"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n\n"
                              },
                              {
                                "insert": "  angular.forEach(arr, (o) => {"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "    result.push(o);"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "  });"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "  console.log(result)"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n\n"
                              },
                              {
                                "insert": "  return result;"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": " }"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "}"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n\n"
                              },
                              {
                                "insert": "export default angular.module('portfolioApp.search', [])"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": " .filter('search', searchFilter)"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": " .name;"
                              },
                              {
                                "attributes": {
                                  "code-block": true
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "\nEnumeration test"
                              },
                              {
                                "attributes": {
                                  "list": "ordered"
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Enumeration test"
                              },
                              {
                                "attributes": {
                                  "list": "ordered"
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Enumeration test"
                              },
                              {
                                "attributes": {
                                  "list": "ordered"
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "\nBullet test"
                              },
                              {
                                "attributes": {
                                  "list": "bullet"
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Bullet test"
                              },
                              {
                                "attributes": {
                                  "list": "bullet"
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Bullet test"
                              },
                              {
                                "attributes": {
                                  "list": "bullet"
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "\nIndented text test"
                              },
                              {
                                "attributes": {
                                  "indent": 1
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "\nParagraph right align test"
                              },
                              {
                                "attributes": {
                                  "align": "right",
                                  "direction": "rtl"
                                },
                                "insert": "\n"
                              },
                              {
                                "attributes": {
                                  "size": "small"
                                },
                                "insert": "Small text size test"
                              },
                              {
                                "insert": "\nNormal Text size test \n"
                              },
                              {
                                "attributes": {
                                  "size": "large"
                                },
                                "insert": "Large Text size test"
                              },
                              {
                                "insert": "\n"
                              },
                              {
                                "attributes": {
                                  "size": "huge"
                                },
                                "insert": "Huge Text size test"
                              },
                              {
                                "insert": "\n\nHeading 1 test"
                              },
                              {
                                "attributes": {
                                  "header": 1
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Heading 2 test"
                              },
                              {
                                "attributes": {
                                  "header": 2
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Heading 3 test "
                              },
                              {
                                "attributes": {
                                  "header": 3
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Heading 4 test"
                              },
                              {
                                "attributes": {
                                  "header": 4
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Heading 5 test"
                              },
                              {
                                "attributes": {
                                  "header": 5
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Heading 6 test"
                              },
                              {
                                "attributes": {
                                  "header": 6
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "\n"
                              },
                              {
                                "attributes": {
                                  "color": "#9933ff"
                                },
                                "insert": "Colored text test"
                              },
                              {
                                "insert": "\n"
                              },
                              {
                                "attributes": {
                                  "background": "#ffff00"
                                },
                                "insert": "Background color text test"
                              },
                              {
                                "insert": "\n\nSans Serif test\n"
                              },
                              {
                                "attributes": {
                                  "font": "serif"
                                },
                                "insert": "Serif test"
                              },
                              {
                                "insert": "\n"
                              },
                              {
                                "attributes": {
                                  "font": "monospace"
                                },
                                "insert": "Monospace test"
                              },
                              {
                                "insert": "\n\nCenter text test"
                              },
                              {
                                "attributes": {
                                  "align": "center"
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Right text test"
                              },
                              {
                                "attributes": {
                                  "align": "right"
                                },
                                "insert": "\n"
                              },
                              {
                                "insert": "Left text test\nJustified text test"
                              },
                              {
                                "attributes": {
                                  "align": "justify"
                                },
                                "insert": "\n"
                              }
                            ]
                          }
                        },{
                          created: Date.now(),
                          type: 'Project',
                          sub_type: 'docker',
                          title: 'SVG Converter1',
                          sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                          body:
                            {
                              "ops": [
                                {
                                  "attributes": {
                                    "bold": true
                                  },
                                  "insert": "Bold text test"
                                },
                                {
                                  "insert": "\n"
                                },
                                {
                                  "attributes": {
                                    "italic": true
                                  },
                                  "insert": "Italic text test"
                                },
                                {
                                  "insert": "\n"
                                },
                                {
                                  "attributes": {
                                    "underline": true
                                  },
                                  "insert": "Underscored text test"
                                },
                                {
                                  "insert": "\n"
                                },
                                {
                                  "attributes": {
                                    "strike": true
                                  },
                                  "insert": "Strike-through text test"
                                },
                                {
                                  "insert": "\n\nQuote test"
                                },
                                {
                                  "attributes": {
                                    "blockquote": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "\nCode test\n'use strict';"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "import angular from 'angular';"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n\n"
                                },
                                {
                                  "insert": "/*@ngInject*/"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "export function searchFilter() {"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": " return (arr, str) => {"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "  if (!str) return arr;"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "  let result = [];"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n\n"
                                },
                                {
                                  "insert": "  angular.forEach(arr, (o) => {"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "    result.push(o);"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "  });"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "  console.log(result)"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n\n"
                                },
                                {
                                  "insert": "  return result;"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": " }"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "}"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n\n"
                                },
                                {
                                  "insert": "export default angular.module('portfolioApp.search', [])"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": " .filter('search', searchFilter)"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": " .name;"
                                },
                                {
                                  "attributes": {
                                    "code-block": true
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "\nEnumeration test"
                                },
                                {
                                  "attributes": {
                                    "list": "ordered"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Enumeration test"
                                },
                                {
                                  "attributes": {
                                    "list": "ordered"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Enumeration test"
                                },
                                {
                                  "attributes": {
                                    "list": "ordered"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "\nBullet test"
                                },
                                {
                                  "attributes": {
                                    "list": "bullet"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Bullet test"
                                },
                                {
                                  "attributes": {
                                    "list": "bullet"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Bullet test"
                                },
                                {
                                  "attributes": {
                                    "list": "bullet"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "\nIndented text test"
                                },
                                {
                                  "attributes": {
                                    "indent": 1
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "\nParagraph right align test"
                                },
                                {
                                  "attributes": {
                                    "align": "right",
                                    "direction": "rtl"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "attributes": {
                                    "size": "small"
                                  },
                                  "insert": "Small text size test"
                                },
                                {
                                  "insert": "\nNormal Text size test \n"
                                },
                                {
                                  "attributes": {
                                    "size": "large"
                                  },
                                  "insert": "Large Text size test"
                                },
                                {
                                  "insert": "\n"
                                },
                                {
                                  "attributes": {
                                    "size": "huge"
                                  },
                                  "insert": "Huge Text size test"
                                },
                                {
                                  "insert": "\n\nHeading 1 test"
                                },
                                {
                                  "attributes": {
                                    "header": 1
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Heading 2 test"
                                },
                                {
                                  "attributes": {
                                    "header": 2
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Heading 3 test "
                                },
                                {
                                  "attributes": {
                                    "header": 3
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Heading 4 test"
                                },
                                {
                                  "attributes": {
                                    "header": 4
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Heading 5 test"
                                },
                                {
                                  "attributes": {
                                    "header": 5
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Heading 6 test"
                                },
                                {
                                  "attributes": {
                                    "header": 6
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "\n"
                                },
                                {
                                  "attributes": {
                                    "color": "#9933ff"
                                  },
                                  "insert": "Colored text test"
                                },
                                {
                                  "insert": "\n"
                                },
                                {
                                  "attributes": {
                                    "background": "#ffff00"
                                  },
                                  "insert": "Background color text test"
                                },
                                {
                                  "insert": "\n\nSans Serif test\n"
                                },
                                {
                                  "attributes": {
                                    "font": "serif"
                                  },
                                  "insert": "Serif test"
                                },
                                {
                                  "insert": "\n"
                                },
                                {
                                  "attributes": {
                                    "font": "monospace"
                                  },
                                  "insert": "Monospace test"
                                },
                                {
                                  "insert": "\n\nCenter text test"
                                },
                                {
                                  "attributes": {
                                    "align": "center"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Right text test"
                                },
                                {
                                  "attributes": {
                                    "align": "right"
                                  },
                                  "insert": "\n"
                                },
                                {
                                  "insert": "Left text test\nJustified text test"
                                },
                                {
                                  "attributes": {
                                    "align": "justify"
                                  },
                                  "insert": "\n"
                                }
                              ]
                            }
                          },{
                            created: Date.now(),
                            type: 'Project',
                            sub_type: 'docker',
                            title: 'SVG Converter1',
                            sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                            body:
                              {
                                "ops": [
                                  {
                                    "attributes": {
                                      "bold": true
                                    },
                                    "insert": "Bold text test"
                                  },
                                  {
                                    "insert": "\n"
                                  },
                                  {
                                    "attributes": {
                                      "italic": true
                                    },
                                    "insert": "Italic text test"
                                  },
                                  {
                                    "insert": "\n"
                                  },
                                  {
                                    "attributes": {
                                      "underline": true
                                    },
                                    "insert": "Underscored text test"
                                  },
                                  {
                                    "insert": "\n"
                                  },
                                  {
                                    "attributes": {
                                      "strike": true
                                    },
                                    "insert": "Strike-through text test"
                                  },
                                  {
                                    "insert": "\n\nQuote test"
                                  },
                                  {
                                    "attributes": {
                                      "blockquote": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "\nCode test\n'use strict';"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "import angular from 'angular';"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n\n"
                                  },
                                  {
                                    "insert": "/*@ngInject*/"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "export function searchFilter() {"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": " return (arr, str) => {"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "  if (!str) return arr;"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "  let result = [];"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n\n"
                                  },
                                  {
                                    "insert": "  angular.forEach(arr, (o) => {"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "    result.push(o);"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "  });"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "  console.log(result)"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n\n"
                                  },
                                  {
                                    "insert": "  return result;"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": " }"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "}"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n\n"
                                  },
                                  {
                                    "insert": "export default angular.module('portfolioApp.search', [])"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": " .filter('search', searchFilter)"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": " .name;"
                                  },
                                  {
                                    "attributes": {
                                      "code-block": true
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "\nEnumeration test"
                                  },
                                  {
                                    "attributes": {
                                      "list": "ordered"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Enumeration test"
                                  },
                                  {
                                    "attributes": {
                                      "list": "ordered"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Enumeration test"
                                  },
                                  {
                                    "attributes": {
                                      "list": "ordered"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "\nBullet test"
                                  },
                                  {
                                    "attributes": {
                                      "list": "bullet"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Bullet test"
                                  },
                                  {
                                    "attributes": {
                                      "list": "bullet"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Bullet test"
                                  },
                                  {
                                    "attributes": {
                                      "list": "bullet"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "\nIndented text test"
                                  },
                                  {
                                    "attributes": {
                                      "indent": 1
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "\nParagraph right align test"
                                  },
                                  {
                                    "attributes": {
                                      "align": "right",
                                      "direction": "rtl"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "attributes": {
                                      "size": "small"
                                    },
                                    "insert": "Small text size test"
                                  },
                                  {
                                    "insert": "\nNormal Text size test \n"
                                  },
                                  {
                                    "attributes": {
                                      "size": "large"
                                    },
                                    "insert": "Large Text size test"
                                  },
                                  {
                                    "insert": "\n"
                                  },
                                  {
                                    "attributes": {
                                      "size": "huge"
                                    },
                                    "insert": "Huge Text size test"
                                  },
                                  {
                                    "insert": "\n\nHeading 1 test"
                                  },
                                  {
                                    "attributes": {
                                      "header": 1
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Heading 2 test"
                                  },
                                  {
                                    "attributes": {
                                      "header": 2
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Heading 3 test "
                                  },
                                  {
                                    "attributes": {
                                      "header": 3
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Heading 4 test"
                                  },
                                  {
                                    "attributes": {
                                      "header": 4
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Heading 5 test"
                                  },
                                  {
                                    "attributes": {
                                      "header": 5
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Heading 6 test"
                                  },
                                  {
                                    "attributes": {
                                      "header": 6
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "\n"
                                  },
                                  {
                                    "attributes": {
                                      "color": "#9933ff"
                                    },
                                    "insert": "Colored text test"
                                  },
                                  {
                                    "insert": "\n"
                                  },
                                  {
                                    "attributes": {
                                      "background": "#ffff00"
                                    },
                                    "insert": "Background color text test"
                                  },
                                  {
                                    "insert": "\n\nSans Serif test\n"
                                  },
                                  {
                                    "attributes": {
                                      "font": "serif"
                                    },
                                    "insert": "Serif test"
                                  },
                                  {
                                    "insert": "\n"
                                  },
                                  {
                                    "attributes": {
                                      "font": "monospace"
                                    },
                                    "insert": "Monospace test"
                                  },
                                  {
                                    "insert": "\n\nCenter text test"
                                  },
                                  {
                                    "attributes": {
                                      "align": "center"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Right text test"
                                  },
                                  {
                                    "attributes": {
                                      "align": "right"
                                    },
                                    "insert": "\n"
                                  },
                                  {
                                    "insert": "Left text test\nJustified text test"
                                  },
                                  {
                                    "attributes": {
                                      "align": "justify"
                                    },
                                    "insert": "\n"
                                  }
                                ]
                              }
                            },{
                              created: Date.now(),
                              type: 'Project',
                              sub_type: 'docker',
                              title: 'SVG Converter1',
                              sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                              body:
                                {
                                  "ops": [
                                    {
                                      "attributes": {
                                        "bold": true
                                      },
                                      "insert": "Bold text test"
                                    },
                                    {
                                      "insert": "\n"
                                    },
                                    {
                                      "attributes": {
                                        "italic": true
                                      },
                                      "insert": "Italic text test"
                                    },
                                    {
                                      "insert": "\n"
                                    },
                                    {
                                      "attributes": {
                                        "underline": true
                                      },
                                      "insert": "Underscored text test"
                                    },
                                    {
                                      "insert": "\n"
                                    },
                                    {
                                      "attributes": {
                                        "strike": true
                                      },
                                      "insert": "Strike-through text test"
                                    },
                                    {
                                      "insert": "\n\nQuote test"
                                    },
                                    {
                                      "attributes": {
                                        "blockquote": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "\nCode test\n'use strict';"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "import angular from 'angular';"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n\n"
                                    },
                                    {
                                      "insert": "/*@ngInject*/"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "export function searchFilter() {"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": " return (arr, str) => {"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "  if (!str) return arr;"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "  let result = [];"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n\n"
                                    },
                                    {
                                      "insert": "  angular.forEach(arr, (o) => {"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "    result.push(o);"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "  });"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "  console.log(result)"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n\n"
                                    },
                                    {
                                      "insert": "  return result;"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": " }"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "}"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n\n"
                                    },
                                    {
                                      "insert": "export default angular.module('portfolioApp.search', [])"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": " .filter('search', searchFilter)"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": " .name;"
                                    },
                                    {
                                      "attributes": {
                                        "code-block": true
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "\nEnumeration test"
                                    },
                                    {
                                      "attributes": {
                                        "list": "ordered"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Enumeration test"
                                    },
                                    {
                                      "attributes": {
                                        "list": "ordered"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Enumeration test"
                                    },
                                    {
                                      "attributes": {
                                        "list": "ordered"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "\nBullet test"
                                    },
                                    {
                                      "attributes": {
                                        "list": "bullet"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Bullet test"
                                    },
                                    {
                                      "attributes": {
                                        "list": "bullet"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Bullet test"
                                    },
                                    {
                                      "attributes": {
                                        "list": "bullet"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "\nIndented text test"
                                    },
                                    {
                                      "attributes": {
                                        "indent": 1
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "\nParagraph right align test"
                                    },
                                    {
                                      "attributes": {
                                        "align": "right",
                                        "direction": "rtl"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "attributes": {
                                        "size": "small"
                                      },
                                      "insert": "Small text size test"
                                    },
                                    {
                                      "insert": "\nNormal Text size test \n"
                                    },
                                    {
                                      "attributes": {
                                        "size": "large"
                                      },
                                      "insert": "Large Text size test"
                                    },
                                    {
                                      "insert": "\n"
                                    },
                                    {
                                      "attributes": {
                                        "size": "huge"
                                      },
                                      "insert": "Huge Text size test"
                                    },
                                    {
                                      "insert": "\n\nHeading 1 test"
                                    },
                                    {
                                      "attributes": {
                                        "header": 1
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Heading 2 test"
                                    },
                                    {
                                      "attributes": {
                                        "header": 2
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Heading 3 test "
                                    },
                                    {
                                      "attributes": {
                                        "header": 3
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Heading 4 test"
                                    },
                                    {
                                      "attributes": {
                                        "header": 4
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Heading 5 test"
                                    },
                                    {
                                      "attributes": {
                                        "header": 5
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Heading 6 test"
                                    },
                                    {
                                      "attributes": {
                                        "header": 6
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "\n"
                                    },
                                    {
                                      "attributes": {
                                        "color": "#9933ff"
                                      },
                                      "insert": "Colored text test"
                                    },
                                    {
                                      "insert": "\n"
                                    },
                                    {
                                      "attributes": {
                                        "background": "#ffff00"
                                      },
                                      "insert": "Background color text test"
                                    },
                                    {
                                      "insert": "\n\nSans Serif test\n"
                                    },
                                    {
                                      "attributes": {
                                        "font": "serif"
                                      },
                                      "insert": "Serif test"
                                    },
                                    {
                                      "insert": "\n"
                                    },
                                    {
                                      "attributes": {
                                        "font": "monospace"
                                      },
                                      "insert": "Monospace test"
                                    },
                                    {
                                      "insert": "\n\nCenter text test"
                                    },
                                    {
                                      "attributes": {
                                        "align": "center"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Right text test"
                                    },
                                    {
                                      "attributes": {
                                        "align": "right"
                                      },
                                      "insert": "\n"
                                    },
                                    {
                                      "insert": "Left text test\nJustified text test"
                                    },
                                    {
                                      "attributes": {
                                        "align": "justify"
                                      },
                                      "insert": "\n"
                                    }
                                  ]
                                }
                              },{
                                created: Date.now(),
                                type: 'Project',
                                sub_type: 'docker',
                                title: 'SVG Converter1',
                                sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                body:
                                  {
                                    "ops": [
                                      {
                                        "attributes": {
                                          "bold": true
                                        },
                                        "insert": "Bold text test"
                                      },
                                      {
                                        "insert": "\n"
                                      },
                                      {
                                        "attributes": {
                                          "italic": true
                                        },
                                        "insert": "Italic text test"
                                      },
                                      {
                                        "insert": "\n"
                                      },
                                      {
                                        "attributes": {
                                          "underline": true
                                        },
                                        "insert": "Underscored text test"
                                      },
                                      {
                                        "insert": "\n"
                                      },
                                      {
                                        "attributes": {
                                          "strike": true
                                        },
                                        "insert": "Strike-through text test"
                                      },
                                      {
                                        "insert": "\n\nQuote test"
                                      },
                                      {
                                        "attributes": {
                                          "blockquote": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "\nCode test\n'use strict';"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "import angular from 'angular';"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n\n"
                                      },
                                      {
                                        "insert": "/*@ngInject*/"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "export function searchFilter() {"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": " return (arr, str) => {"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "  if (!str) return arr;"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "  let result = [];"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n\n"
                                      },
                                      {
                                        "insert": "  angular.forEach(arr, (o) => {"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "    result.push(o);"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "  });"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "  console.log(result)"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n\n"
                                      },
                                      {
                                        "insert": "  return result;"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": " }"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "}"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n\n"
                                      },
                                      {
                                        "insert": "export default angular.module('portfolioApp.search', [])"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": " .filter('search', searchFilter)"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": " .name;"
                                      },
                                      {
                                        "attributes": {
                                          "code-block": true
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "\nEnumeration test"
                                      },
                                      {
                                        "attributes": {
                                          "list": "ordered"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Enumeration test"
                                      },
                                      {
                                        "attributes": {
                                          "list": "ordered"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Enumeration test"
                                      },
                                      {
                                        "attributes": {
                                          "list": "ordered"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "\nBullet test"
                                      },
                                      {
                                        "attributes": {
                                          "list": "bullet"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Bullet test"
                                      },
                                      {
                                        "attributes": {
                                          "list": "bullet"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Bullet test"
                                      },
                                      {
                                        "attributes": {
                                          "list": "bullet"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "\nIndented text test"
                                      },
                                      {
                                        "attributes": {
                                          "indent": 1
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "\nParagraph right align test"
                                      },
                                      {
                                        "attributes": {
                                          "align": "right",
                                          "direction": "rtl"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "attributes": {
                                          "size": "small"
                                        },
                                        "insert": "Small text size test"
                                      },
                                      {
                                        "insert": "\nNormal Text size test \n"
                                      },
                                      {
                                        "attributes": {
                                          "size": "large"
                                        },
                                        "insert": "Large Text size test"
                                      },
                                      {
                                        "insert": "\n"
                                      },
                                      {
                                        "attributes": {
                                          "size": "huge"
                                        },
                                        "insert": "Huge Text size test"
                                      },
                                      {
                                        "insert": "\n\nHeading 1 test"
                                      },
                                      {
                                        "attributes": {
                                          "header": 1
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Heading 2 test"
                                      },
                                      {
                                        "attributes": {
                                          "header": 2
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Heading 3 test "
                                      },
                                      {
                                        "attributes": {
                                          "header": 3
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Heading 4 test"
                                      },
                                      {
                                        "attributes": {
                                          "header": 4
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Heading 5 test"
                                      },
                                      {
                                        "attributes": {
                                          "header": 5
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Heading 6 test"
                                      },
                                      {
                                        "attributes": {
                                          "header": 6
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "\n"
                                      },
                                      {
                                        "attributes": {
                                          "color": "#9933ff"
                                        },
                                        "insert": "Colored text test"
                                      },
                                      {
                                        "insert": "\n"
                                      },
                                      {
                                        "attributes": {
                                          "background": "#ffff00"
                                        },
                                        "insert": "Background color text test"
                                      },
                                      {
                                        "insert": "\n\nSans Serif test\n"
                                      },
                                      {
                                        "attributes": {
                                          "font": "serif"
                                        },
                                        "insert": "Serif test"
                                      },
                                      {
                                        "insert": "\n"
                                      },
                                      {
                                        "attributes": {
                                          "font": "monospace"
                                        },
                                        "insert": "Monospace test"
                                      },
                                      {
                                        "insert": "\n\nCenter text test"
                                      },
                                      {
                                        "attributes": {
                                          "align": "center"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Right text test"
                                      },
                                      {
                                        "attributes": {
                                          "align": "right"
                                        },
                                        "insert": "\n"
                                      },
                                      {
                                        "insert": "Left text test\nJustified text test"
                                      },
                                      {
                                        "attributes": {
                                          "align": "justify"
                                        },
                                        "insert": "\n"
                                      }
                                    ]
                                  }
                                },{
                                  created: Date.now(),
                                  type: 'Project',
                                  sub_type: 'docker',
                                  title: 'SVG Converter1',
                                  sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                  body:
                                    {
                                      "ops": [
                                        {
                                          "attributes": {
                                            "bold": true
                                          },
                                          "insert": "Bold text test"
                                        },
                                        {
                                          "insert": "\n"
                                        },
                                        {
                                          "attributes": {
                                            "italic": true
                                          },
                                          "insert": "Italic text test"
                                        },
                                        {
                                          "insert": "\n"
                                        },
                                        {
                                          "attributes": {
                                            "underline": true
                                          },
                                          "insert": "Underscored text test"
                                        },
                                        {
                                          "insert": "\n"
                                        },
                                        {
                                          "attributes": {
                                            "strike": true
                                          },
                                          "insert": "Strike-through text test"
                                        },
                                        {
                                          "insert": "\n\nQuote test"
                                        },
                                        {
                                          "attributes": {
                                            "blockquote": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "\nCode test\n'use strict';"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "import angular from 'angular';"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n\n"
                                        },
                                        {
                                          "insert": "/*@ngInject*/"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "export function searchFilter() {"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": " return (arr, str) => {"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "  if (!str) return arr;"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "  let result = [];"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n\n"
                                        },
                                        {
                                          "insert": "  angular.forEach(arr, (o) => {"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "    result.push(o);"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "  });"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "  console.log(result)"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n\n"
                                        },
                                        {
                                          "insert": "  return result;"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": " }"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "}"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n\n"
                                        },
                                        {
                                          "insert": "export default angular.module('portfolioApp.search', [])"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": " .filter('search', searchFilter)"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": " .name;"
                                        },
                                        {
                                          "attributes": {
                                            "code-block": true
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "\nEnumeration test"
                                        },
                                        {
                                          "attributes": {
                                            "list": "ordered"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Enumeration test"
                                        },
                                        {
                                          "attributes": {
                                            "list": "ordered"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Enumeration test"
                                        },
                                        {
                                          "attributes": {
                                            "list": "ordered"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "\nBullet test"
                                        },
                                        {
                                          "attributes": {
                                            "list": "bullet"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Bullet test"
                                        },
                                        {
                                          "attributes": {
                                            "list": "bullet"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Bullet test"
                                        },
                                        {
                                          "attributes": {
                                            "list": "bullet"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "\nIndented text test"
                                        },
                                        {
                                          "attributes": {
                                            "indent": 1
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "\nParagraph right align test"
                                        },
                                        {
                                          "attributes": {
                                            "align": "right",
                                            "direction": "rtl"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "attributes": {
                                            "size": "small"
                                          },
                                          "insert": "Small text size test"
                                        },
                                        {
                                          "insert": "\nNormal Text size test \n"
                                        },
                                        {
                                          "attributes": {
                                            "size": "large"
                                          },
                                          "insert": "Large Text size test"
                                        },
                                        {
                                          "insert": "\n"
                                        },
                                        {
                                          "attributes": {
                                            "size": "huge"
                                          },
                                          "insert": "Huge Text size test"
                                        },
                                        {
                                          "insert": "\n\nHeading 1 test"
                                        },
                                        {
                                          "attributes": {
                                            "header": 1
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Heading 2 test"
                                        },
                                        {
                                          "attributes": {
                                            "header": 2
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Heading 3 test "
                                        },
                                        {
                                          "attributes": {
                                            "header": 3
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Heading 4 test"
                                        },
                                        {
                                          "attributes": {
                                            "header": 4
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Heading 5 test"
                                        },
                                        {
                                          "attributes": {
                                            "header": 5
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Heading 6 test"
                                        },
                                        {
                                          "attributes": {
                                            "header": 6
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "\n"
                                        },
                                        {
                                          "attributes": {
                                            "color": "#9933ff"
                                          },
                                          "insert": "Colored text test"
                                        },
                                        {
                                          "insert": "\n"
                                        },
                                        {
                                          "attributes": {
                                            "background": "#ffff00"
                                          },
                                          "insert": "Background color text test"
                                        },
                                        {
                                          "insert": "\n\nSans Serif test\n"
                                        },
                                        {
                                          "attributes": {
                                            "font": "serif"
                                          },
                                          "insert": "Serif test"
                                        },
                                        {
                                          "insert": "\n"
                                        },
                                        {
                                          "attributes": {
                                            "font": "monospace"
                                          },
                                          "insert": "Monospace test"
                                        },
                                        {
                                          "insert": "\n\nCenter text test"
                                        },
                                        {
                                          "attributes": {
                                            "align": "center"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Right text test"
                                        },
                                        {
                                          "attributes": {
                                            "align": "right"
                                          },
                                          "insert": "\n"
                                        },
                                        {
                                          "insert": "Left text test\nJustified text test"
                                        },
                                        {
                                          "attributes": {
                                            "align": "justify"
                                          },
                                          "insert": "\n"
                                        }
                                      ]
                                    }
                                  },{
                                    created: Date.now(),
                                    type: 'Project',
                                    sub_type: 'docker',
                                    title: 'SVG Converter1',
                                    sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                    body:
                                      {
                                        "ops": [
                                          {
                                            "attributes": {
                                              "bold": true
                                            },
                                            "insert": "Bold text test"
                                          },
                                          {
                                            "insert": "\n"
                                          },
                                          {
                                            "attributes": {
                                              "italic": true
                                            },
                                            "insert": "Italic text test"
                                          },
                                          {
                                            "insert": "\n"
                                          },
                                          {
                                            "attributes": {
                                              "underline": true
                                            },
                                            "insert": "Underscored text test"
                                          },
                                          {
                                            "insert": "\n"
                                          },
                                          {
                                            "attributes": {
                                              "strike": true
                                            },
                                            "insert": "Strike-through text test"
                                          },
                                          {
                                            "insert": "\n\nQuote test"
                                          },
                                          {
                                            "attributes": {
                                              "blockquote": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "\nCode test\n'use strict';"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "import angular from 'angular';"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n\n"
                                          },
                                          {
                                            "insert": "/*@ngInject*/"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "export function searchFilter() {"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": " return (arr, str) => {"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "  if (!str) return arr;"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "  let result = [];"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n\n"
                                          },
                                          {
                                            "insert": "  angular.forEach(arr, (o) => {"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "    result.push(o);"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "  });"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "  console.log(result)"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n\n"
                                          },
                                          {
                                            "insert": "  return result;"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": " }"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "}"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n\n"
                                          },
                                          {
                                            "insert": "export default angular.module('portfolioApp.search', [])"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": " .filter('search', searchFilter)"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": " .name;"
                                          },
                                          {
                                            "attributes": {
                                              "code-block": true
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "\nEnumeration test"
                                          },
                                          {
                                            "attributes": {
                                              "list": "ordered"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Enumeration test"
                                          },
                                          {
                                            "attributes": {
                                              "list": "ordered"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Enumeration test"
                                          },
                                          {
                                            "attributes": {
                                              "list": "ordered"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "\nBullet test"
                                          },
                                          {
                                            "attributes": {
                                              "list": "bullet"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Bullet test"
                                          },
                                          {
                                            "attributes": {
                                              "list": "bullet"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Bullet test"
                                          },
                                          {
                                            "attributes": {
                                              "list": "bullet"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "\nIndented text test"
                                          },
                                          {
                                            "attributes": {
                                              "indent": 1
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "\nParagraph right align test"
                                          },
                                          {
                                            "attributes": {
                                              "align": "right",
                                              "direction": "rtl"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "attributes": {
                                              "size": "small"
                                            },
                                            "insert": "Small text size test"
                                          },
                                          {
                                            "insert": "\nNormal Text size test \n"
                                          },
                                          {
                                            "attributes": {
                                              "size": "large"
                                            },
                                            "insert": "Large Text size test"
                                          },
                                          {
                                            "insert": "\n"
                                          },
                                          {
                                            "attributes": {
                                              "size": "huge"
                                            },
                                            "insert": "Huge Text size test"
                                          },
                                          {
                                            "insert": "\n\nHeading 1 test"
                                          },
                                          {
                                            "attributes": {
                                              "header": 1
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Heading 2 test"
                                          },
                                          {
                                            "attributes": {
                                              "header": 2
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Heading 3 test "
                                          },
                                          {
                                            "attributes": {
                                              "header": 3
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Heading 4 test"
                                          },
                                          {
                                            "attributes": {
                                              "header": 4
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Heading 5 test"
                                          },
                                          {
                                            "attributes": {
                                              "header": 5
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Heading 6 test"
                                          },
                                          {
                                            "attributes": {
                                              "header": 6
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "\n"
                                          },
                                          {
                                            "attributes": {
                                              "color": "#9933ff"
                                            },
                                            "insert": "Colored text test"
                                          },
                                          {
                                            "insert": "\n"
                                          },
                                          {
                                            "attributes": {
                                              "background": "#ffff00"
                                            },
                                            "insert": "Background color text test"
                                          },
                                          {
                                            "insert": "\n\nSans Serif test\n"
                                          },
                                          {
                                            "attributes": {
                                              "font": "serif"
                                            },
                                            "insert": "Serif test"
                                          },
                                          {
                                            "insert": "\n"
                                          },
                                          {
                                            "attributes": {
                                              "font": "monospace"
                                            },
                                            "insert": "Monospace test"
                                          },
                                          {
                                            "insert": "\n\nCenter text test"
                                          },
                                          {
                                            "attributes": {
                                              "align": "center"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Right text test"
                                          },
                                          {
                                            "attributes": {
                                              "align": "right"
                                            },
                                            "insert": "\n"
                                          },
                                          {
                                            "insert": "Left text test\nJustified text test"
                                          },
                                          {
                                            "attributes": {
                                              "align": "justify"
                                            },
                                            "insert": "\n"
                                          }
                                        ]
                                      }
                                    },{
                                      created: Date.now(),
                                      type: 'Project',
                                      sub_type: 'docker',
                                      title: 'SVG Converter1',
                                      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                      body:
                                        {
                                          "ops": [
                                            {
                                              "attributes": {
                                                "bold": true
                                              },
                                              "insert": "Bold text test"
                                            },
                                            {
                                              "insert": "\n"
                                            },
                                            {
                                              "attributes": {
                                                "italic": true
                                              },
                                              "insert": "Italic text test"
                                            },
                                            {
                                              "insert": "\n"
                                            },
                                            {
                                              "attributes": {
                                                "underline": true
                                              },
                                              "insert": "Underscored text test"
                                            },
                                            {
                                              "insert": "\n"
                                            },
                                            {
                                              "attributes": {
                                                "strike": true
                                              },
                                              "insert": "Strike-through text test"
                                            },
                                            {
                                              "insert": "\n\nQuote test"
                                            },
                                            {
                                              "attributes": {
                                                "blockquote": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "\nCode test\n'use strict';"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "import angular from 'angular';"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n\n"
                                            },
                                            {
                                              "insert": "/*@ngInject*/"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "export function searchFilter() {"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": " return (arr, str) => {"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "  if (!str) return arr;"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "  let result = [];"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n\n"
                                            },
                                            {
                                              "insert": "  angular.forEach(arr, (o) => {"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "    result.push(o);"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "  });"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "  console.log(result)"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n\n"
                                            },
                                            {
                                              "insert": "  return result;"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": " }"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "}"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n\n"
                                            },
                                            {
                                              "insert": "export default angular.module('portfolioApp.search', [])"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": " .filter('search', searchFilter)"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": " .name;"
                                            },
                                            {
                                              "attributes": {
                                                "code-block": true
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "\nEnumeration test"
                                            },
                                            {
                                              "attributes": {
                                                "list": "ordered"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Enumeration test"
                                            },
                                            {
                                              "attributes": {
                                                "list": "ordered"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Enumeration test"
                                            },
                                            {
                                              "attributes": {
                                                "list": "ordered"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "\nBullet test"
                                            },
                                            {
                                              "attributes": {
                                                "list": "bullet"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Bullet test"
                                            },
                                            {
                                              "attributes": {
                                                "list": "bullet"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Bullet test"
                                            },
                                            {
                                              "attributes": {
                                                "list": "bullet"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "\nIndented text test"
                                            },
                                            {
                                              "attributes": {
                                                "indent": 1
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "\nParagraph right align test"
                                            },
                                            {
                                              "attributes": {
                                                "align": "right",
                                                "direction": "rtl"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "attributes": {
                                                "size": "small"
                                              },
                                              "insert": "Small text size test"
                                            },
                                            {
                                              "insert": "\nNormal Text size test \n"
                                            },
                                            {
                                              "attributes": {
                                                "size": "large"
                                              },
                                              "insert": "Large Text size test"
                                            },
                                            {
                                              "insert": "\n"
                                            },
                                            {
                                              "attributes": {
                                                "size": "huge"
                                              },
                                              "insert": "Huge Text size test"
                                            },
                                            {
                                              "insert": "\n\nHeading 1 test"
                                            },
                                            {
                                              "attributes": {
                                                "header": 1
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Heading 2 test"
                                            },
                                            {
                                              "attributes": {
                                                "header": 2
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Heading 3 test "
                                            },
                                            {
                                              "attributes": {
                                                "header": 3
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Heading 4 test"
                                            },
                                            {
                                              "attributes": {
                                                "header": 4
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Heading 5 test"
                                            },
                                            {
                                              "attributes": {
                                                "header": 5
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Heading 6 test"
                                            },
                                            {
                                              "attributes": {
                                                "header": 6
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "\n"
                                            },
                                            {
                                              "attributes": {
                                                "color": "#9933ff"
                                              },
                                              "insert": "Colored text test"
                                            },
                                            {
                                              "insert": "\n"
                                            },
                                            {
                                              "attributes": {
                                                "background": "#ffff00"
                                              },
                                              "insert": "Background color text test"
                                            },
                                            {
                                              "insert": "\n\nSans Serif test\n"
                                            },
                                            {
                                              "attributes": {
                                                "font": "serif"
                                              },
                                              "insert": "Serif test"
                                            },
                                            {
                                              "insert": "\n"
                                            },
                                            {
                                              "attributes": {
                                                "font": "monospace"
                                              },
                                              "insert": "Monospace test"
                                            },
                                            {
                                              "insert": "\n\nCenter text test"
                                            },
                                            {
                                              "attributes": {
                                                "align": "center"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Right text test"
                                            },
                                            {
                                              "attributes": {
                                                "align": "right"
                                              },
                                              "insert": "\n"
                                            },
                                            {
                                              "insert": "Left text test\nJustified text test"
                                            },
                                            {
                                              "attributes": {
                                                "align": "justify"
                                              },
                                              "insert": "\n"
                                            }
                                          ]
                                        }
                                      },{
                                        created: Date.now(),
                                        type: 'Project',
                                        sub_type: 'docker',
                                        title: 'SVG Converter1',
                                        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                        body:
                                          {
                                            "ops": [
                                              {
                                                "attributes": {
                                                  "bold": true
                                                },
                                                "insert": "Bold text test"
                                              },
                                              {
                                                "insert": "\n"
                                              },
                                              {
                                                "attributes": {
                                                  "italic": true
                                                },
                                                "insert": "Italic text test"
                                              },
                                              {
                                                "insert": "\n"
                                              },
                                              {
                                                "attributes": {
                                                  "underline": true
                                                },
                                                "insert": "Underscored text test"
                                              },
                                              {
                                                "insert": "\n"
                                              },
                                              {
                                                "attributes": {
                                                  "strike": true
                                                },
                                                "insert": "Strike-through text test"
                                              },
                                              {
                                                "insert": "\n\nQuote test"
                                              },
                                              {
                                                "attributes": {
                                                  "blockquote": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "\nCode test\n'use strict';"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "import angular from 'angular';"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n\n"
                                              },
                                              {
                                                "insert": "/*@ngInject*/"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "export function searchFilter() {"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": " return (arr, str) => {"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "  if (!str) return arr;"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "  let result = [];"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n\n"
                                              },
                                              {
                                                "insert": "  angular.forEach(arr, (o) => {"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "    result.push(o);"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "  });"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "  console.log(result)"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n\n"
                                              },
                                              {
                                                "insert": "  return result;"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": " }"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "}"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n\n"
                                              },
                                              {
                                                "insert": "export default angular.module('portfolioApp.search', [])"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": " .filter('search', searchFilter)"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": " .name;"
                                              },
                                              {
                                                "attributes": {
                                                  "code-block": true
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "\nEnumeration test"
                                              },
                                              {
                                                "attributes": {
                                                  "list": "ordered"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Enumeration test"
                                              },
                                              {
                                                "attributes": {
                                                  "list": "ordered"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Enumeration test"
                                              },
                                              {
                                                "attributes": {
                                                  "list": "ordered"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "\nBullet test"
                                              },
                                              {
                                                "attributes": {
                                                  "list": "bullet"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Bullet test"
                                              },
                                              {
                                                "attributes": {
                                                  "list": "bullet"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Bullet test"
                                              },
                                              {
                                                "attributes": {
                                                  "list": "bullet"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "\nIndented text test"
                                              },
                                              {
                                                "attributes": {
                                                  "indent": 1
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "\nParagraph right align test"
                                              },
                                              {
                                                "attributes": {
                                                  "align": "right",
                                                  "direction": "rtl"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "attributes": {
                                                  "size": "small"
                                                },
                                                "insert": "Small text size test"
                                              },
                                              {
                                                "insert": "\nNormal Text size test \n"
                                              },
                                              {
                                                "attributes": {
                                                  "size": "large"
                                                },
                                                "insert": "Large Text size test"
                                              },
                                              {
                                                "insert": "\n"
                                              },
                                              {
                                                "attributes": {
                                                  "size": "huge"
                                                },
                                                "insert": "Huge Text size test"
                                              },
                                              {
                                                "insert": "\n\nHeading 1 test"
                                              },
                                              {
                                                "attributes": {
                                                  "header": 1
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Heading 2 test"
                                              },
                                              {
                                                "attributes": {
                                                  "header": 2
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Heading 3 test "
                                              },
                                              {
                                                "attributes": {
                                                  "header": 3
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Heading 4 test"
                                              },
                                              {
                                                "attributes": {
                                                  "header": 4
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Heading 5 test"
                                              },
                                              {
                                                "attributes": {
                                                  "header": 5
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Heading 6 test"
                                              },
                                              {
                                                "attributes": {
                                                  "header": 6
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "\n"
                                              },
                                              {
                                                "attributes": {
                                                  "color": "#9933ff"
                                                },
                                                "insert": "Colored text test"
                                              },
                                              {
                                                "insert": "\n"
                                              },
                                              {
                                                "attributes": {
                                                  "background": "#ffff00"
                                                },
                                                "insert": "Background color text test"
                                              },
                                              {
                                                "insert": "\n\nSans Serif test\n"
                                              },
                                              {
                                                "attributes": {
                                                  "font": "serif"
                                                },
                                                "insert": "Serif test"
                                              },
                                              {
                                                "insert": "\n"
                                              },
                                              {
                                                "attributes": {
                                                  "font": "monospace"
                                                },
                                                "insert": "Monospace test"
                                              },
                                              {
                                                "insert": "\n\nCenter text test"
                                              },
                                              {
                                                "attributes": {
                                                  "align": "center"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Right text test"
                                              },
                                              {
                                                "attributes": {
                                                  "align": "right"
                                                },
                                                "insert": "\n"
                                              },
                                              {
                                                "insert": "Left text test\nJustified text test"
                                              },
                                              {
                                                "attributes": {
                                                  "align": "justify"
                                                },
                                                "insert": "\n"
                                              }
                                            ]
                                          }
                                        },{
                                          created: Date.now(),
                                          type: 'Project',
                                          sub_type: 'docker',
                                          title: 'SVG Converter1',
                                          sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                          body:
                                            {
                                              "ops": [
                                                {
                                                  "attributes": {
                                                    "bold": true
                                                  },
                                                  "insert": "Bold text test"
                                                },
                                                {
                                                  "insert": "\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "italic": true
                                                  },
                                                  "insert": "Italic text test"
                                                },
                                                {
                                                  "insert": "\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "underline": true
                                                  },
                                                  "insert": "Underscored text test"
                                                },
                                                {
                                                  "insert": "\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "strike": true
                                                  },
                                                  "insert": "Strike-through text test"
                                                },
                                                {
                                                  "insert": "\n\nQuote test"
                                                },
                                                {
                                                  "attributes": {
                                                    "blockquote": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "\nCode test\n'use strict';"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "import angular from 'angular';"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n\n"
                                                },
                                                {
                                                  "insert": "/*@ngInject*/"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "export function searchFilter() {"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": " return (arr, str) => {"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "  if (!str) return arr;"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "  let result = [];"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n\n"
                                                },
                                                {
                                                  "insert": "  angular.forEach(arr, (o) => {"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "    result.push(o);"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "  });"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "  console.log(result)"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n\n"
                                                },
                                                {
                                                  "insert": "  return result;"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": " }"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "}"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n\n"
                                                },
                                                {
                                                  "insert": "export default angular.module('portfolioApp.search', [])"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": " .filter('search', searchFilter)"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": " .name;"
                                                },
                                                {
                                                  "attributes": {
                                                    "code-block": true
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "\nEnumeration test"
                                                },
                                                {
                                                  "attributes": {
                                                    "list": "ordered"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Enumeration test"
                                                },
                                                {
                                                  "attributes": {
                                                    "list": "ordered"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Enumeration test"
                                                },
                                                {
                                                  "attributes": {
                                                    "list": "ordered"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "\nBullet test"
                                                },
                                                {
                                                  "attributes": {
                                                    "list": "bullet"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Bullet test"
                                                },
                                                {
                                                  "attributes": {
                                                    "list": "bullet"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Bullet test"
                                                },
                                                {
                                                  "attributes": {
                                                    "list": "bullet"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "\nIndented text test"
                                                },
                                                {
                                                  "attributes": {
                                                    "indent": 1
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "\nParagraph right align test"
                                                },
                                                {
                                                  "attributes": {
                                                    "align": "right",
                                                    "direction": "rtl"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "size": "small"
                                                  },
                                                  "insert": "Small text size test"
                                                },
                                                {
                                                  "insert": "\nNormal Text size test \n"
                                                },
                                                {
                                                  "attributes": {
                                                    "size": "large"
                                                  },
                                                  "insert": "Large Text size test"
                                                },
                                                {
                                                  "insert": "\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "size": "huge"
                                                  },
                                                  "insert": "Huge Text size test"
                                                },
                                                {
                                                  "insert": "\n\nHeading 1 test"
                                                },
                                                {
                                                  "attributes": {
                                                    "header": 1
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Heading 2 test"
                                                },
                                                {
                                                  "attributes": {
                                                    "header": 2
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Heading 3 test "
                                                },
                                                {
                                                  "attributes": {
                                                    "header": 3
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Heading 4 test"
                                                },
                                                {
                                                  "attributes": {
                                                    "header": 4
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Heading 5 test"
                                                },
                                                {
                                                  "attributes": {
                                                    "header": 5
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Heading 6 test"
                                                },
                                                {
                                                  "attributes": {
                                                    "header": 6
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "color": "#9933ff"
                                                  },
                                                  "insert": "Colored text test"
                                                },
                                                {
                                                  "insert": "\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "background": "#ffff00"
                                                  },
                                                  "insert": "Background color text test"
                                                },
                                                {
                                                  "insert": "\n\nSans Serif test\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "font": "serif"
                                                  },
                                                  "insert": "Serif test"
                                                },
                                                {
                                                  "insert": "\n"
                                                },
                                                {
                                                  "attributes": {
                                                    "font": "monospace"
                                                  },
                                                  "insert": "Monospace test"
                                                },
                                                {
                                                  "insert": "\n\nCenter text test"
                                                },
                                                {
                                                  "attributes": {
                                                    "align": "center"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Right text test"
                                                },
                                                {
                                                  "attributes": {
                                                    "align": "right"
                                                  },
                                                  "insert": "\n"
                                                },
                                                {
                                                  "insert": "Left text test\nJustified text test"
                                                },
                                                {
                                                  "attributes": {
                                                    "align": "justify"
                                                  },
                                                  "insert": "\n"
                                                }
                                              ]
                                            }
                                          },{
                                            created: Date.now(),
                                            type: 'Project',
                                            sub_type: 'docker',
                                            title: 'SVG Converter1',
                                            sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                            body:
                                              {
                                                "ops": [
                                                  {
                                                    "attributes": {
                                                      "bold": true
                                                    },
                                                    "insert": "Bold text test"
                                                  },
                                                  {
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "italic": true
                                                    },
                                                    "insert": "Italic text test"
                                                  },
                                                  {
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "underline": true
                                                    },
                                                    "insert": "Underscored text test"
                                                  },
                                                  {
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "strike": true
                                                    },
                                                    "insert": "Strike-through text test"
                                                  },
                                                  {
                                                    "insert": "\n\nQuote test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "blockquote": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "\nCode test\n'use strict';"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "import angular from 'angular';"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n\n"
                                                  },
                                                  {
                                                    "insert": "/*@ngInject*/"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "export function searchFilter() {"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": " return (arr, str) => {"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "  if (!str) return arr;"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "  let result = [];"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n\n"
                                                  },
                                                  {
                                                    "insert": "  angular.forEach(arr, (o) => {"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "    result.push(o);"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "  });"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "  console.log(result)"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n\n"
                                                  },
                                                  {
                                                    "insert": "  return result;"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": " }"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "}"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n\n"
                                                  },
                                                  {
                                                    "insert": "export default angular.module('portfolioApp.search', [])"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": " .filter('search', searchFilter)"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": " .name;"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "code-block": true
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "\nEnumeration test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "list": "ordered"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Enumeration test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "list": "ordered"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Enumeration test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "list": "ordered"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "\nBullet test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "list": "bullet"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Bullet test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "list": "bullet"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Bullet test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "list": "bullet"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "\nIndented text test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "indent": 1
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "\nParagraph right align test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "align": "right",
                                                      "direction": "rtl"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "size": "small"
                                                    },
                                                    "insert": "Small text size test"
                                                  },
                                                  {
                                                    "insert": "\nNormal Text size test \n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "size": "large"
                                                    },
                                                    "insert": "Large Text size test"
                                                  },
                                                  {
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "size": "huge"
                                                    },
                                                    "insert": "Huge Text size test"
                                                  },
                                                  {
                                                    "insert": "\n\nHeading 1 test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "header": 1
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Heading 2 test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "header": 2
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Heading 3 test "
                                                  },
                                                  {
                                                    "attributes": {
                                                      "header": 3
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Heading 4 test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "header": 4
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Heading 5 test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "header": 5
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Heading 6 test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "header": 6
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "color": "#9933ff"
                                                    },
                                                    "insert": "Colored text test"
                                                  },
                                                  {
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "background": "#ffff00"
                                                    },
                                                    "insert": "Background color text test"
                                                  },
                                                  {
                                                    "insert": "\n\nSans Serif test\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "font": "serif"
                                                    },
                                                    "insert": "Serif test"
                                                  },
                                                  {
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "font": "monospace"
                                                    },
                                                    "insert": "Monospace test"
                                                  },
                                                  {
                                                    "insert": "\n\nCenter text test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "align": "center"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Right text test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "align": "right"
                                                    },
                                                    "insert": "\n"
                                                  },
                                                  {
                                                    "insert": "Left text test\nJustified text test"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "align": "justify"
                                                    },
                                                    "insert": "\n"
                                                  }
                                                ]
                                              }
                                            },{
                                              created: Date.now(),
                                              type: 'Project',
                                              sub_type: 'docker',
                                              title: 'SVG Converter1',
                                              sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                              body:
                                                {
                                                  "ops": [
                                                    {
                                                      "attributes": {
                                                        "bold": true
                                                      },
                                                      "insert": "Bold text test"
                                                    },
                                                    {
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "italic": true
                                                      },
                                                      "insert": "Italic text test"
                                                    },
                                                    {
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "underline": true
                                                      },
                                                      "insert": "Underscored text test"
                                                    },
                                                    {
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "strike": true
                                                      },
                                                      "insert": "Strike-through text test"
                                                    },
                                                    {
                                                      "insert": "\n\nQuote test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "blockquote": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "\nCode test\n'use strict';"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "import angular from 'angular';"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n\n"
                                                    },
                                                    {
                                                      "insert": "/*@ngInject*/"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "export function searchFilter() {"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": " return (arr, str) => {"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "  if (!str) return arr;"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "  let result = [];"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n\n"
                                                    },
                                                    {
                                                      "insert": "  angular.forEach(arr, (o) => {"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "    result.push(o);"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "  });"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "  console.log(result)"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n\n"
                                                    },
                                                    {
                                                      "insert": "  return result;"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": " }"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "}"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n\n"
                                                    },
                                                    {
                                                      "insert": "export default angular.module('portfolioApp.search', [])"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": " .filter('search', searchFilter)"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": " .name;"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "code-block": true
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "\nEnumeration test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "list": "ordered"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Enumeration test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "list": "ordered"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Enumeration test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "list": "ordered"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "\nBullet test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "list": "bullet"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Bullet test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "list": "bullet"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Bullet test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "list": "bullet"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "\nIndented text test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "indent": 1
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "\nParagraph right align test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "align": "right",
                                                        "direction": "rtl"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "size": "small"
                                                      },
                                                      "insert": "Small text size test"
                                                    },
                                                    {
                                                      "insert": "\nNormal Text size test \n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "size": "large"
                                                      },
                                                      "insert": "Large Text size test"
                                                    },
                                                    {
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "size": "huge"
                                                      },
                                                      "insert": "Huge Text size test"
                                                    },
                                                    {
                                                      "insert": "\n\nHeading 1 test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "header": 1
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Heading 2 test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "header": 2
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Heading 3 test "
                                                    },
                                                    {
                                                      "attributes": {
                                                        "header": 3
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Heading 4 test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "header": 4
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Heading 5 test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "header": 5
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Heading 6 test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "header": 6
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "color": "#9933ff"
                                                      },
                                                      "insert": "Colored text test"
                                                    },
                                                    {
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "background": "#ffff00"
                                                      },
                                                      "insert": "Background color text test"
                                                    },
                                                    {
                                                      "insert": "\n\nSans Serif test\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "font": "serif"
                                                      },
                                                      "insert": "Serif test"
                                                    },
                                                    {
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "font": "monospace"
                                                      },
                                                      "insert": "Monospace test"
                                                    },
                                                    {
                                                      "insert": "\n\nCenter text test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "align": "center"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Right text test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "align": "right"
                                                      },
                                                      "insert": "\n"
                                                    },
                                                    {
                                                      "insert": "Left text test\nJustified text test"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "align": "justify"
                                                      },
                                                      "insert": "\n"
                                                    }
                                                  ]
                                                }
                                              },{
                                                created: Date.now(),
                                                type: 'Project',
                                                sub_type: 'docker',
                                                title: 'SVG Converter1',
                                                sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                                body:
                                                  {
                                                    "ops": [
                                                      {
                                                        "attributes": {
                                                          "bold": true
                                                        },
                                                        "insert": "Bold text test"
                                                      },
                                                      {
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "italic": true
                                                        },
                                                        "insert": "Italic text test"
                                                      },
                                                      {
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "underline": true
                                                        },
                                                        "insert": "Underscored text test"
                                                      },
                                                      {
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "strike": true
                                                        },
                                                        "insert": "Strike-through text test"
                                                      },
                                                      {
                                                        "insert": "\n\nQuote test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "blockquote": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "\nCode test\n'use strict';"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "import angular from 'angular';"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n\n"
                                                      },
                                                      {
                                                        "insert": "/*@ngInject*/"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "export function searchFilter() {"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": " return (arr, str) => {"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "  if (!str) return arr;"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "  let result = [];"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n\n"
                                                      },
                                                      {
                                                        "insert": "  angular.forEach(arr, (o) => {"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "    result.push(o);"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "  });"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "  console.log(result)"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n\n"
                                                      },
                                                      {
                                                        "insert": "  return result;"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": " }"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "}"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n\n"
                                                      },
                                                      {
                                                        "insert": "export default angular.module('portfolioApp.search', [])"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": " .filter('search', searchFilter)"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": " .name;"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "code-block": true
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "\nEnumeration test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "list": "ordered"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Enumeration test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "list": "ordered"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Enumeration test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "list": "ordered"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "\nBullet test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "list": "bullet"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Bullet test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "list": "bullet"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Bullet test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "list": "bullet"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "\nIndented text test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "indent": 1
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "\nParagraph right align test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "align": "right",
                                                          "direction": "rtl"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "size": "small"
                                                        },
                                                        "insert": "Small text size test"
                                                      },
                                                      {
                                                        "insert": "\nNormal Text size test \n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "size": "large"
                                                        },
                                                        "insert": "Large Text size test"
                                                      },
                                                      {
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "size": "huge"
                                                        },
                                                        "insert": "Huge Text size test"
                                                      },
                                                      {
                                                        "insert": "\n\nHeading 1 test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "header": 1
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Heading 2 test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "header": 2
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Heading 3 test "
                                                      },
                                                      {
                                                        "attributes": {
                                                          "header": 3
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Heading 4 test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "header": 4
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Heading 5 test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "header": 5
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Heading 6 test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "header": 6
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "color": "#9933ff"
                                                        },
                                                        "insert": "Colored text test"
                                                      },
                                                      {
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "background": "#ffff00"
                                                        },
                                                        "insert": "Background color text test"
                                                      },
                                                      {
                                                        "insert": "\n\nSans Serif test\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "font": "serif"
                                                        },
                                                        "insert": "Serif test"
                                                      },
                                                      {
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "font": "monospace"
                                                        },
                                                        "insert": "Monospace test"
                                                      },
                                                      {
                                                        "insert": "\n\nCenter text test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "align": "center"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Right text test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "align": "right"
                                                        },
                                                        "insert": "\n"
                                                      },
                                                      {
                                                        "insert": "Left text test\nJustified text test"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "align": "justify"
                                                        },
                                                        "insert": "\n"
                                                      }
                                                    ]
                                                  }
                                                },{
                                                  created: Date.now(),
                                                  type: 'Project',
                                                  sub_type: 'docker',
                                                  title: 'SVG Converter1',
                                                  sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                                  body:
                                                    {
                                                      "ops": [
                                                        {
                                                          "attributes": {
                                                            "bold": true
                                                          },
                                                          "insert": "Bold text test"
                                                        },
                                                        {
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "italic": true
                                                          },
                                                          "insert": "Italic text test"
                                                        },
                                                        {
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "underline": true
                                                          },
                                                          "insert": "Underscored text test"
                                                        },
                                                        {
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "strike": true
                                                          },
                                                          "insert": "Strike-through text test"
                                                        },
                                                        {
                                                          "insert": "\n\nQuote test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "blockquote": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "\nCode test\n'use strict';"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "import angular from 'angular';"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n\n"
                                                        },
                                                        {
                                                          "insert": "/*@ngInject*/"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "export function searchFilter() {"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": " return (arr, str) => {"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "  if (!str) return arr;"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "  let result = [];"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n\n"
                                                        },
                                                        {
                                                          "insert": "  angular.forEach(arr, (o) => {"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "    result.push(o);"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "  });"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "  console.log(result)"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n\n"
                                                        },
                                                        {
                                                          "insert": "  return result;"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": " }"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "}"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n\n"
                                                        },
                                                        {
                                                          "insert": "export default angular.module('portfolioApp.search', [])"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": " .filter('search', searchFilter)"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": " .name;"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "code-block": true
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "\nEnumeration test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "list": "ordered"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Enumeration test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "list": "ordered"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Enumeration test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "list": "ordered"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "\nBullet test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "list": "bullet"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Bullet test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "list": "bullet"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Bullet test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "list": "bullet"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "\nIndented text test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "indent": 1
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "\nParagraph right align test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "align": "right",
                                                            "direction": "rtl"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "size": "small"
                                                          },
                                                          "insert": "Small text size test"
                                                        },
                                                        {
                                                          "insert": "\nNormal Text size test \n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "size": "large"
                                                          },
                                                          "insert": "Large Text size test"
                                                        },
                                                        {
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "size": "huge"
                                                          },
                                                          "insert": "Huge Text size test"
                                                        },
                                                        {
                                                          "insert": "\n\nHeading 1 test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "header": 1
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Heading 2 test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "header": 2
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Heading 3 test "
                                                        },
                                                        {
                                                          "attributes": {
                                                            "header": 3
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Heading 4 test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "header": 4
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Heading 5 test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "header": 5
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Heading 6 test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "header": 6
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "color": "#9933ff"
                                                          },
                                                          "insert": "Colored text test"
                                                        },
                                                        {
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "background": "#ffff00"
                                                          },
                                                          "insert": "Background color text test"
                                                        },
                                                        {
                                                          "insert": "\n\nSans Serif test\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "font": "serif"
                                                          },
                                                          "insert": "Serif test"
                                                        },
                                                        {
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "font": "monospace"
                                                          },
                                                          "insert": "Monospace test"
                                                        },
                                                        {
                                                          "insert": "\n\nCenter text test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "align": "center"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Right text test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "align": "right"
                                                          },
                                                          "insert": "\n"
                                                        },
                                                        {
                                                          "insert": "Left text test\nJustified text test"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "align": "justify"
                                                          },
                                                          "insert": "\n"
                                                        }
                                                      ]
                                                    }
                                                  },{
                                                    created: Date.now(),
                                                    type: 'Project',
                                                    sub_type: 'docker',
                                                    title: 'SVG Converter1',
                                                    sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                                    body:
                                                      {
                                                        "ops": [
                                                          {
                                                            "attributes": {
                                                              "bold": true
                                                            },
                                                            "insert": "Bold text test"
                                                          },
                                                          {
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "italic": true
                                                            },
                                                            "insert": "Italic text test"
                                                          },
                                                          {
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "underline": true
                                                            },
                                                            "insert": "Underscored text test"
                                                          },
                                                          {
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "strike": true
                                                            },
                                                            "insert": "Strike-through text test"
                                                          },
                                                          {
                                                            "insert": "\n\nQuote test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "blockquote": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "\nCode test\n'use strict';"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "import angular from 'angular';"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n\n"
                                                          },
                                                          {
                                                            "insert": "/*@ngInject*/"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "export function searchFilter() {"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": " return (arr, str) => {"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "  if (!str) return arr;"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "  let result = [];"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n\n"
                                                          },
                                                          {
                                                            "insert": "  angular.forEach(arr, (o) => {"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "    result.push(o);"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "  });"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "  console.log(result)"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n\n"
                                                          },
                                                          {
                                                            "insert": "  return result;"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": " }"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "}"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n\n"
                                                          },
                                                          {
                                                            "insert": "export default angular.module('portfolioApp.search', [])"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": " .filter('search', searchFilter)"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": " .name;"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "code-block": true
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "\nEnumeration test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "list": "ordered"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Enumeration test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "list": "ordered"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Enumeration test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "list": "ordered"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "\nBullet test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "list": "bullet"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Bullet test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "list": "bullet"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Bullet test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "list": "bullet"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "\nIndented text test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "indent": 1
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "\nParagraph right align test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "align": "right",
                                                              "direction": "rtl"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "size": "small"
                                                            },
                                                            "insert": "Small text size test"
                                                          },
                                                          {
                                                            "insert": "\nNormal Text size test \n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "size": "large"
                                                            },
                                                            "insert": "Large Text size test"
                                                          },
                                                          {
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "size": "huge"
                                                            },
                                                            "insert": "Huge Text size test"
                                                          },
                                                          {
                                                            "insert": "\n\nHeading 1 test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "header": 1
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Heading 2 test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "header": 2
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Heading 3 test "
                                                          },
                                                          {
                                                            "attributes": {
                                                              "header": 3
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Heading 4 test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "header": 4
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Heading 5 test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "header": 5
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Heading 6 test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "header": 6
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "color": "#9933ff"
                                                            },
                                                            "insert": "Colored text test"
                                                          },
                                                          {
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "background": "#ffff00"
                                                            },
                                                            "insert": "Background color text test"
                                                          },
                                                          {
                                                            "insert": "\n\nSans Serif test\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "font": "serif"
                                                            },
                                                            "insert": "Serif test"
                                                          },
                                                          {
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "font": "monospace"
                                                            },
                                                            "insert": "Monospace test"
                                                          },
                                                          {
                                                            "insert": "\n\nCenter text test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "align": "center"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Right text test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "align": "right"
                                                            },
                                                            "insert": "\n"
                                                          },
                                                          {
                                                            "insert": "Left text test\nJustified text test"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "align": "justify"
                                                            },
                                                            "insert": "\n"
                                                          }
                                                        ]
                                                      }
                                                    },{
                                                      created: Date.now(),
                                                      type: 'Project',
                                                      sub_type: 'docker',
                                                      title: 'SVG Converter1',
                                                      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                                      body:
                                                        {
                                                          "ops": [
                                                            {
                                                              "attributes": {
                                                                "bold": true
                                                              },
                                                              "insert": "Bold text test"
                                                            },
                                                            {
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "italic": true
                                                              },
                                                              "insert": "Italic text test"
                                                            },
                                                            {
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "underline": true
                                                              },
                                                              "insert": "Underscored text test"
                                                            },
                                                            {
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "strike": true
                                                              },
                                                              "insert": "Strike-through text test"
                                                            },
                                                            {
                                                              "insert": "\n\nQuote test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "blockquote": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "\nCode test\n'use strict';"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "import angular from 'angular';"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n\n"
                                                            },
                                                            {
                                                              "insert": "/*@ngInject*/"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "export function searchFilter() {"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": " return (arr, str) => {"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "  if (!str) return arr;"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "  let result = [];"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n\n"
                                                            },
                                                            {
                                                              "insert": "  angular.forEach(arr, (o) => {"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "    result.push(o);"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "  });"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "  console.log(result)"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n\n"
                                                            },
                                                            {
                                                              "insert": "  return result;"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": " }"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "}"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n\n"
                                                            },
                                                            {
                                                              "insert": "export default angular.module('portfolioApp.search', [])"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": " .filter('search', searchFilter)"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": " .name;"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "code-block": true
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "\nEnumeration test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "list": "ordered"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Enumeration test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "list": "ordered"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Enumeration test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "list": "ordered"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "\nBullet test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "list": "bullet"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Bullet test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "list": "bullet"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Bullet test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "list": "bullet"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "\nIndented text test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "indent": 1
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "\nParagraph right align test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "align": "right",
                                                                "direction": "rtl"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "size": "small"
                                                              },
                                                              "insert": "Small text size test"
                                                            },
                                                            {
                                                              "insert": "\nNormal Text size test \n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "size": "large"
                                                              },
                                                              "insert": "Large Text size test"
                                                            },
                                                            {
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "size": "huge"
                                                              },
                                                              "insert": "Huge Text size test"
                                                            },
                                                            {
                                                              "insert": "\n\nHeading 1 test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "header": 1
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Heading 2 test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "header": 2
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Heading 3 test "
                                                            },
                                                            {
                                                              "attributes": {
                                                                "header": 3
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Heading 4 test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "header": 4
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Heading 5 test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "header": 5
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Heading 6 test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "header": 6
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "color": "#9933ff"
                                                              },
                                                              "insert": "Colored text test"
                                                            },
                                                            {
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "background": "#ffff00"
                                                              },
                                                              "insert": "Background color text test"
                                                            },
                                                            {
                                                              "insert": "\n\nSans Serif test\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "font": "serif"
                                                              },
                                                              "insert": "Serif test"
                                                            },
                                                            {
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "font": "monospace"
                                                              },
                                                              "insert": "Monospace test"
                                                            },
                                                            {
                                                              "insert": "\n\nCenter text test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "align": "center"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Right text test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "align": "right"
                                                              },
                                                              "insert": "\n"
                                                            },
                                                            {
                                                              "insert": "Left text test\nJustified text test"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "align": "justify"
                                                              },
                                                              "insert": "\n"
                                                            }
                                                          ]
                                                        }
                                                      },{
                                                        created: Date.now(),
                                                        type: 'Project',
                                                        sub_type: 'docker',
                                                        title: 'SVG Converter1',
                                                        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                                        body:
                                                          {
                                                            "ops": [
                                                              {
                                                                "attributes": {
                                                                  "bold": true
                                                                },
                                                                "insert": "Bold text test"
                                                              },
                                                              {
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "italic": true
                                                                },
                                                                "insert": "Italic text test"
                                                              },
                                                              {
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "underline": true
                                                                },
                                                                "insert": "Underscored text test"
                                                              },
                                                              {
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "strike": true
                                                                },
                                                                "insert": "Strike-through text test"
                                                              },
                                                              {
                                                                "insert": "\n\nQuote test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "blockquote": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "\nCode test\n'use strict';"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "import angular from 'angular';"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n\n"
                                                              },
                                                              {
                                                                "insert": "/*@ngInject*/"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "export function searchFilter() {"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": " return (arr, str) => {"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "  if (!str) return arr;"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "  let result = [];"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n\n"
                                                              },
                                                              {
                                                                "insert": "  angular.forEach(arr, (o) => {"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "    result.push(o);"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "  });"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "  console.log(result)"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n\n"
                                                              },
                                                              {
                                                                "insert": "  return result;"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": " }"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "}"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n\n"
                                                              },
                                                              {
                                                                "insert": "export default angular.module('portfolioApp.search', [])"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": " .filter('search', searchFilter)"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": " .name;"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "code-block": true
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "\nEnumeration test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "list": "ordered"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Enumeration test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "list": "ordered"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Enumeration test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "list": "ordered"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "\nBullet test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "list": "bullet"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Bullet test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "list": "bullet"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Bullet test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "list": "bullet"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "\nIndented text test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "indent": 1
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "\nParagraph right align test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "align": "right",
                                                                  "direction": "rtl"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "size": "small"
                                                                },
                                                                "insert": "Small text size test"
                                                              },
                                                              {
                                                                "insert": "\nNormal Text size test \n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "size": "large"
                                                                },
                                                                "insert": "Large Text size test"
                                                              },
                                                              {
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "size": "huge"
                                                                },
                                                                "insert": "Huge Text size test"
                                                              },
                                                              {
                                                                "insert": "\n\nHeading 1 test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "header": 1
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Heading 2 test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "header": 2
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Heading 3 test "
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "header": 3
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Heading 4 test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "header": 4
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Heading 5 test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "header": 5
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Heading 6 test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "header": 6
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "color": "#9933ff"
                                                                },
                                                                "insert": "Colored text test"
                                                              },
                                                              {
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "background": "#ffff00"
                                                                },
                                                                "insert": "Background color text test"
                                                              },
                                                              {
                                                                "insert": "\n\nSans Serif test\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "font": "serif"
                                                                },
                                                                "insert": "Serif test"
                                                              },
                                                              {
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "font": "monospace"
                                                                },
                                                                "insert": "Monospace test"
                                                              },
                                                              {
                                                                "insert": "\n\nCenter text test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "align": "center"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Right text test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "align": "right"
                                                                },
                                                                "insert": "\n"
                                                              },
                                                              {
                                                                "insert": "Left text test\nJustified text test"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "align": "justify"
                                                                },
                                                                "insert": "\n"
                                                              }
                                                            ]
                                                          }
                                                        },{
                                                          created: Date.now(),
                                                          type: 'Project',
                                                          sub_type: 'docker',
                                                          title: 'SVG Converter1',
                                                          sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                                          body:
                                                            {
                                                              "ops": [
                                                                {
                                                                  "attributes": {
                                                                    "bold": true
                                                                  },
                                                                  "insert": "Bold text test"
                                                                },
                                                                {
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "italic": true
                                                                  },
                                                                  "insert": "Italic text test"
                                                                },
                                                                {
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "underline": true
                                                                  },
                                                                  "insert": "Underscored text test"
                                                                },
                                                                {
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "strike": true
                                                                  },
                                                                  "insert": "Strike-through text test"
                                                                },
                                                                {
                                                                  "insert": "\n\nQuote test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "blockquote": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "\nCode test\n'use strict';"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "import angular from 'angular';"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n\n"
                                                                },
                                                                {
                                                                  "insert": "/*@ngInject*/"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "export function searchFilter() {"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": " return (arr, str) => {"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "  if (!str) return arr;"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "  let result = [];"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n\n"
                                                                },
                                                                {
                                                                  "insert": "  angular.forEach(arr, (o) => {"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "    result.push(o);"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "  });"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "  console.log(result)"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n\n"
                                                                },
                                                                {
                                                                  "insert": "  return result;"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": " }"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "}"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n\n"
                                                                },
                                                                {
                                                                  "insert": "export default angular.module('portfolioApp.search', [])"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": " .filter('search', searchFilter)"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": " .name;"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "code-block": true
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "\nEnumeration test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "list": "ordered"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Enumeration test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "list": "ordered"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Enumeration test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "list": "ordered"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "\nBullet test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "list": "bullet"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Bullet test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "list": "bullet"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Bullet test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "list": "bullet"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "\nIndented text test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "indent": 1
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "\nParagraph right align test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "align": "right",
                                                                    "direction": "rtl"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "size": "small"
                                                                  },
                                                                  "insert": "Small text size test"
                                                                },
                                                                {
                                                                  "insert": "\nNormal Text size test \n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "size": "large"
                                                                  },
                                                                  "insert": "Large Text size test"
                                                                },
                                                                {
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "size": "huge"
                                                                  },
                                                                  "insert": "Huge Text size test"
                                                                },
                                                                {
                                                                  "insert": "\n\nHeading 1 test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "header": 1
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Heading 2 test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "header": 2
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Heading 3 test "
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "header": 3
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Heading 4 test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "header": 4
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Heading 5 test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "header": 5
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Heading 6 test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "header": 6
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "color": "#9933ff"
                                                                  },
                                                                  "insert": "Colored text test"
                                                                },
                                                                {
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "background": "#ffff00"
                                                                  },
                                                                  "insert": "Background color text test"
                                                                },
                                                                {
                                                                  "insert": "\n\nSans Serif test\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "font": "serif"
                                                                  },
                                                                  "insert": "Serif test"
                                                                },
                                                                {
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "font": "monospace"
                                                                  },
                                                                  "insert": "Monospace test"
                                                                },
                                                                {
                                                                  "insert": "\n\nCenter text test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "align": "center"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Right text test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "align": "right"
                                                                  },
                                                                  "insert": "\n"
                                                                },
                                                                {
                                                                  "insert": "Left text test\nJustified text test"
                                                                },
                                                                {
                                                                  "attributes": {
                                                                    "align": "justify"
                                                                  },
                                                                  "insert": "\n"
                                                                }
                                                              ]
                                                            }
                                                          },{
                                                            created: Date.now(),
                                                            type: 'Project',
                                                            sub_type: 'docker',
                                                            title: 'SVG Converter1',
                                                            sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                                            body:
                                                              {
                                                                "ops": [
                                                                  {
                                                                    "attributes": {
                                                                      "bold": true
                                                                    },
                                                                    "insert": "Bold text test"
                                                                  },
                                                                  {
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "italic": true
                                                                    },
                                                                    "insert": "Italic text test"
                                                                  },
                                                                  {
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "underline": true
                                                                    },
                                                                    "insert": "Underscored text test"
                                                                  },
                                                                  {
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "strike": true
                                                                    },
                                                                    "insert": "Strike-through text test"
                                                                  },
                                                                  {
                                                                    "insert": "\n\nQuote test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "blockquote": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "\nCode test\n'use strict';"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "import angular from 'angular';"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n\n"
                                                                  },
                                                                  {
                                                                    "insert": "/*@ngInject*/"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "export function searchFilter() {"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": " return (arr, str) => {"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "  if (!str) return arr;"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "  let result = [];"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n\n"
                                                                  },
                                                                  {
                                                                    "insert": "  angular.forEach(arr, (o) => {"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "    result.push(o);"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "  });"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "  console.log(result)"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n\n"
                                                                  },
                                                                  {
                                                                    "insert": "  return result;"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": " }"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "}"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n\n"
                                                                  },
                                                                  {
                                                                    "insert": "export default angular.module('portfolioApp.search', [])"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": " .filter('search', searchFilter)"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": " .name;"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "code-block": true
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "\nEnumeration test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "list": "ordered"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Enumeration test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "list": "ordered"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Enumeration test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "list": "ordered"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "\nBullet test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "list": "bullet"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Bullet test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "list": "bullet"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Bullet test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "list": "bullet"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "\nIndented text test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "indent": 1
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "\nParagraph right align test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "align": "right",
                                                                      "direction": "rtl"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "size": "small"
                                                                    },
                                                                    "insert": "Small text size test"
                                                                  },
                                                                  {
                                                                    "insert": "\nNormal Text size test \n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "size": "large"
                                                                    },
                                                                    "insert": "Large Text size test"
                                                                  },
                                                                  {
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "size": "huge"
                                                                    },
                                                                    "insert": "Huge Text size test"
                                                                  },
                                                                  {
                                                                    "insert": "\n\nHeading 1 test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "header": 1
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Heading 2 test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "header": 2
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Heading 3 test "
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "header": 3
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Heading 4 test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "header": 4
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Heading 5 test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "header": 5
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Heading 6 test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "header": 6
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "color": "#9933ff"
                                                                    },
                                                                    "insert": "Colored text test"
                                                                  },
                                                                  {
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "background": "#ffff00"
                                                                    },
                                                                    "insert": "Background color text test"
                                                                  },
                                                                  {
                                                                    "insert": "\n\nSans Serif test\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "font": "serif"
                                                                    },
                                                                    "insert": "Serif test"
                                                                  },
                                                                  {
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "font": "monospace"
                                                                    },
                                                                    "insert": "Monospace test"
                                                                  },
                                                                  {
                                                                    "insert": "\n\nCenter text test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "align": "center"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Right text test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "align": "right"
                                                                    },
                                                                    "insert": "\n"
                                                                  },
                                                                  {
                                                                    "insert": "Left text test\nJustified text test"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "align": "justify"
                                                                    },
                                                                    "insert": "\n"
                                                                  }
                                                                ]
                                                              }
                                                            },{
                                                              created: Date.now(),
                                                              type: 'Project',
                                                              sub_type: 'docker',
                                                              title: 'SVG Converter1',
                                                              sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
                                                              body:
                                                                {
                                                                  "ops": [
                                                                    {
                                                                      "attributes": {
                                                                        "bold": true
                                                                      },
                                                                      "insert": "Bold text test"
                                                                    },
                                                                    {
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "italic": true
                                                                      },
                                                                      "insert": "Italic text test"
                                                                    },
                                                                    {
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "underline": true
                                                                      },
                                                                      "insert": "Underscored text test"
                                                                    },
                                                                    {
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "strike": true
                                                                      },
                                                                      "insert": "Strike-through text test"
                                                                    },
                                                                    {
                                                                      "insert": "\n\nQuote test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "blockquote": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "\nCode test\n'use strict';"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "import angular from 'angular';"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n\n"
                                                                    },
                                                                    {
                                                                      "insert": "/*@ngInject*/"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "export function searchFilter() {"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": " return (arr, str) => {"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "  if (!str) return arr;"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "  let result = [];"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n\n"
                                                                    },
                                                                    {
                                                                      "insert": "  angular.forEach(arr, (o) => {"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "   if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "    result.push(o);"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "  });"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "  console.log(result)"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n\n"
                                                                    },
                                                                    {
                                                                      "insert": "  return result;"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": " }"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "}"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n\n"
                                                                    },
                                                                    {
                                                                      "insert": "export default angular.module('portfolioApp.search', [])"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": " .filter('search', searchFilter)"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": " .name;"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "code-block": true
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "\nEnumeration test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "list": "ordered"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Enumeration test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "list": "ordered"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Enumeration test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "list": "ordered"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "\nBullet test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "list": "bullet"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Bullet test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "list": "bullet"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Bullet test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "list": "bullet"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "\nIndented text test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "indent": 1
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "\nParagraph right align test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "align": "right",
                                                                        "direction": "rtl"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "size": "small"
                                                                      },
                                                                      "insert": "Small text size test"
                                                                    },
                                                                    {
                                                                      "insert": "\nNormal Text size test \n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "size": "large"
                                                                      },
                                                                      "insert": "Large Text size test"
                                                                    },
                                                                    {
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "size": "huge"
                                                                      },
                                                                      "insert": "Huge Text size test"
                                                                    },
                                                                    {
                                                                      "insert": "\n\nHeading 1 test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "header": 1
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Heading 2 test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "header": 2
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Heading 3 test "
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "header": 3
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Heading 4 test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "header": 4
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Heading 5 test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "header": 5
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Heading 6 test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "header": 6
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "color": "#9933ff"
                                                                      },
                                                                      "insert": "Colored text test"
                                                                    },
                                                                    {
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "background": "#ffff00"
                                                                      },
                                                                      "insert": "Background color text test"
                                                                    },
                                                                    {
                                                                      "insert": "\n\nSans Serif test\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "font": "serif"
                                                                      },
                                                                      "insert": "Serif test"
                                                                    },
                                                                    {
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "font": "monospace"
                                                                      },
                                                                      "insert": "Monospace test"
                                                                    },
                                                                    {
                                                                      "insert": "\n\nCenter text test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "align": "center"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Right text test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "align": "right"
                                                                      },
                                                                      "insert": "\n"
                                                                    },
                                                                    {
                                                                      "insert": "Left text test\nJustified text test"
                                                                    },
                                                                    {
                                                                      "attributes": {
                                                                        "align": "justify"
                                                                      },
                                                                      "insert": "\n"
                                                                    }
                                                                  ]
                                                                }
                                                              });
    });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
