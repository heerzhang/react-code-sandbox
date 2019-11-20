# render-from-controlled-jsx-string
把受到安全自主控制下的js,jsx代码动态插入到浏览器端来执行，支持数据页面都是动态的。
注意，注入代码必须是可以确保安全的源代码，否则有安全隐患。

 The JS and JSX codes under the independent control of security are dynamically inserted into the browser to execute, and the supporting data pages are all dynamic.
Note that the injected code must be safe source code, otherwise there is a security risk.
                                  

## Install

```sh
yarn add render-from-controlled-jsx-string
# or
npm install render-from-controlled-jsx-string --save
```

## Usage　例子 1

```jsx
import CodeSandbox from 'render-from-controlled-jsx-string'
import React from 'react'
import { Text } from 'sancho'
//dynamic inject source

const code = `
import { render } from 'react-dom'
import React from 'react'
import { Text } from 'sancho'
renderReturn(
  <div>
    <Text> This is a source string </Text>
  </div>
)
`
// add this to your app
<CodeSandbox imports={{ React, Text }}>
  {code}
</CodeSandbox>
```

## Render

`renderReturn` is a special global variable that is injected into the code parser.
When you call `renderReturn`, the source code of the first argument to it will be
returned from the sandbox.

This part is only used for display purposes and does not effect the source code.
```
import { render } from 'react-dom'
```
renderReturn()才是连接动态代码的关键点。
renderReturn() is the key to connecting dynamic code.

## Imports　依赖导入

Any imports that you specify in the source code have no actual effects and are
removed by the parser. They are replaced with variables injected by
the `imports` prop. When looking at the rendered code example,
it appears that libraries are imported, but they are just passed as local
variables under the scenes.

## Usage　例子 2

```/** @jsx jsx */
   import { jsx, css } from "@emotion/core";
   import CodeSandbox from "render-from-controlled-jsx-string";
   import React, { useCallback, useReducer, useState } from 'react'
   export default function PrintReport({printing, }:{printing?:boolean, },props) {
     const Parameters={padding:'38px',name: 'heerzhang', id:23};
     //let codeOnline =` Online code 在线代码` ;   可用 ` $  (ES6 template string)
     //let codeGetFromBackendStorage= codeOnline代码语法转换 Code syntax conversion。不可用 ` $ 除了css={{内部}}
     let codeGetFromBackendStorage = "/** @jsx jsx */ "+
       "let     mycss=Parameters.padding+' 0 9px'; "+
       "renderReturn( "+
       "<div css={{margin:`${Parameters.padding}`}}> " +
       "   <div css={{padding: mycss}}>"+
       "③钢丝绳直径小于其公称直径{Parameters.id}的90%；<br/>"+
       "④钢丝绳严重锈蚀，铁锈填满绳股间隙。【{Parameters.name}】<br/>报废指标"+
       "</div>  </div>)";
     return (
       <React.Fragment>
         <CodeSandbox imports={{css,jsx,Parameters}}>
           {codeGetFromBackendStorage}
         </CodeSandbox>
       </React.Fragment>
     );
   }
```

## How it works　内部解析

It uses [babel](https://babeljs.io) in the browser to parse and convert the
source string into a usable JSX component. It will return parsed component
that was returned through `render` in the source code.

页面代码存数据库的缺点：tsx移植到jsx，import注入，参数注入，\` $变量要改写；{boolean} 要改成 {\`${boolean}`}
　运行速度损失，代码管理更麻烦，源代码搜索失效了。　优点：源代码看起来简洁需要路由页面规模小了，大量代码藏数据库。

## Complex example　复杂例子3 ,
注入一个完整的tsx例子代码
Inject a complete TSX example code.

```
下面tsx例子renderReturn(<Example></Example>)才是返回真实的DOM-render。
`


/** @jsx jsx */

import { jsx, css, Global } from "@emotion/core";

import CodeSandbox from "render-from-controlled-jsx-string";

import React from "react";

import {
  Text,
  Toolbar,
  Navbar,
  useTheme,
  IconButton,
  Button,
  Tabs,
  Tab,
  TabIcon,
  Layer,
  TabPanel,
  MenuList,
  MenuItem,
  Tooltip,
  ResponsivePopover,
  IconChevronDown,
  IconPlus,
  DarkMode,
  LightMode,
  Pager,
  IconUmbrella,
  IconTrash,
  IconArchive,
  IconAperture,
  IconActivity,
  Stack,
  StackTitle,
  StackItem,
  ScrollView,
  List,
  ListItem,
  IconChevronRight,
  Avatar,
  Sheet,
  MenuDivider,
  IconHome,
  IconList,
  IconUser,
  IconInstagram,
  IconPackage,
  IconMoreVertical,
  Skeleton,
  useInfiniteScroll,
  Embed
} from "customize-easy-ui-component";

import { FadeImage } from "../FadeImage";

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Cell,
  CCell
} from "../comp/TableExt";

import InfiniteScroll from "react-intersection-observing-infinity-scroll";

import Axios from "axios";

export default function PrintReport(

  { printing }: { printing?: boolean },
  
  props
  
) {

  const values = "sfasf华算的好fgsdf支持";
  
  const dynamipic = "19px";

  const code = `
  
/** @jsx jsx */

import { jsx, css } from "@emotion/core";

import * as React from "react";

import Axios from "axios";

import InfiniteScroll from "react-intersection-observing-infinity-scroll";

class Example extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        page: 1,
        commits: [],
        isLoading: false
      };
    }
     componentDidMount() {
      const { page } = this.state;
    }
    render() {
      const { commits, isLoading } = this.state;
      const commitList = commits.map(commit => {
        return (
          <div
            key={commit.sha}
            style={{
              width: 700,
              margin: "0 auto 30px auto",
              border: "1px solid #efefef",
              borderRadius: "5px",
              padding: 8
            }}
          >
            <img
              style={{
                display: "inline-block",
                verticalAlign: "top",
                margin: "0 8px 16px 0",
                borderRadius: "5px"
              }}
              width={50}
              height={50}
              src={commit.author.avatar_url}
            />
            <strong style={{ display: "inline-block", verticalAlign: "top" }}>
              {commit.commit.author.name}
            </strong>
            <div>{commit.commit.message}</div>
          </div>
        );
      });
      return (
        <div   css={{
          overflowY: "scroll",
          height: "477px",
        }}>
          <InfiniteScroll
            loadMoreFunc={this.fetchCommits}
            hasMore={true}
            isLoading={isLoading}
            thresholdMargin="100px"
            loaderComponent={
              <div
                style={{
                  height: "300px",
                  fontSize: "30px",
                  textAlign: "center"
                }}
              >
                正在努力 发货123！！ 加载更多中.......
              </div>
            }
          >
            {commitList}
          </InfiniteScroll>
        </div>
      );
    }
    fetchCommits = async (page) => {
      console.log("============FIRED");
      this.setState(prevState => ({ ...prevState, isLoading: true }));
      const res = await Axios(
        "https://api.github.com/repos/pluto-net/scinapse-web-client/commits",
        {
          headers: {
            Accept: "application/vnd.github.v3+json"
          },
          params: {
            type: "all",
            page: page || this.state.page
          }
        }
      );
      this.setState(prevState => ({
        ...prevState,
        commits: [...prevState.commits, ...res.data],
        isLoading: false,
        page: prevState.page + 1
      }));
    };
}

renderReturn(<Example></Example>)
`;


  return (
  
    <React.Fragment>
      <CodeSandbox
        imports={{
          React,
          Text,
          Embed,
          FadeImage,
          Table,
          TableBody,
          TableHead,
          TableRow,
          Cell,
          CCell,
          jsx,
          css,
          InfiniteScroll,
          Axios
        }}
      >
        {code}
      </CodeSandbox>
    </React.Fragment>
    
  );
}

