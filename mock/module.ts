import { Request, Response } from 'express';

const get = (req: Request, res: Response) => {
  res.json({
    "code":0,
    "data": {
      "exact":true,
      "gmtModify":"2019-11-01 10:36:56",
      "icon":"bars",
      "id":"7",
      "isleaf":true,
      "key":"",
      "locale":"menu.sys.module",
      "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
      "name":"模块管理",
      "orders":3,
      "originChildren":[],
      "parentId":"5",
      "path":"/sys/module",
      "pathId":"5,5",
      "resources":[
        {
          "id":"7",
          "moduleId":"7",
          "resourceDesc":"全部资源",
          "resourceType":"",
          "resourceUrl":"**"
        }
      ],
      "status":"9999"
    },
    "success":true
  });
};

const list = (req: Request, res: Response) => {
  res.json({
    "code":0,
    "data":[
      {
        "children":[
          {
            "exact":true,
            "gmtModify":"2019-11-01 10:36:52",
            "icon":"flag",
            "id":"6",
            "isleaf":true,
            "key":"",
            "locale":"menu.sys.organization",
            "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
            "name":"组织管理",
            "orders":0,
            "originChildren":[],
            "parentId":"5",
            "path":"/sys/organization",
            "pathId":"5,5",
            "resources":[
              {
                "id":"6",
                "moduleId":"6",
                "resourceDesc":"全部资源",
                "resourceType":"",
                "resourceUrl":"/**"
              }
            ],
            "status":"9999"
          },
          {
            "exact":true,
            "gmtModify":"2019-11-01 10:36:55",
            "icon":"usergroup-add",
            "id":"8",
            "isleaf":true,
            "key":"",
            "locale":"menu.sys.account",
            "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
            "name":"用户管理",
            "orders":1,
            "originChildren":[],
            "parentId":"5",
            "path":"/sys/account",
            "pathId":"5,5",
            "resources":[
              {
                "id":"8",
                "moduleId":"8",
                "resourceDesc":"全部资源",
                "resourceType":"",
                "resourceUrl":"**"
              }
            ],
            "status":"9999"
          },
          {
            "exact":true,
            "gmtModify":"2019-11-01 10:36:56",
            "icon":"form",
            "id":"9",
            "isleaf":true,
            "key":"",
            "locale":"menu.sys.role",
            "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
            "name":"权限管理",
            "orders":2,
            "originChildren":[],
            "parentId":"5",
            "path":"/sys/role",
            "pathId":"5,5",
            "resources":[
              {
                "id":"9",
                "moduleId":"9",
                "resourceDesc":"全部资源",
                "resourceType":"",
                "resourceUrl":"**"
              }
            ],
            "status":"9999"
          },
          {
            "exact":true,
            "gmtModify":"2019-11-01 10:36:56",
            "icon":"bars",
            "id":"7",
            "isleaf":true,
            "key":"",
            "locale":"menu.sys.module",
            "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
            "name":"模块管理",
            "orders":3,
            "originChildren":[],
            "parentId":"5",
            "path":"/sys/module",
            "pathId":"5,5",
            "resources":[
              {
                "id":"7",
                "moduleId":"7",
                "resourceDesc":"全部资源",
                "resourceType":"",
                "resourceUrl":"**"
              }
            ],
            "status":"9999"
          },
          {
            "exact":true,
            "gmtModify":"2019-11-01 10:36:40",
            "icon":"profile",
            "id":"10",
            "isleaf":true,
            "key":"",
            "locale":"menu.sys.dictionary",
            "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
            "name":"字典管理",
            "orders":4,
            "originChildren":[],
            "parentId":"5",
            "path":"/sys/dictionary",
            "pathId":"5,5",
            "resources":[
              {
                "id":"10",
                "moduleId":"10",
                "resourceDesc":"全部资源",
                "resourceType":"",
                "resourceUrl":"**"
              }
            ],
            "status":"9999"
          }
        ],
        "exact":false,
        "gmtModify":"2019-10-15 12:41:52",
        "icon":"setting",
        "id":"5",
        "isleaf":false,
        "key":"",
        "locale":"menu.sys",
        "name":"系统管理",
        "orders":0,
        "originChildren":[
          {"$ref":"$.data[0].children[0]"},
          {"$ref":"$.data[0].children[1]"},
          {"$ref":"$.data[0].children[2]"},
          {"$ref":"$.data[0].children[3]"},
          {"$ref":"$.data[0].children[4]"}
        ],
        "parentName":"系统管理",
        "path":"/sys",
        "pathId":"5",
        "resources":[],
        "status":"9999"
      },
      {
        "children":[
          {
            "createBy":"9199482d76b443ef9f13fefddcf0046c",
            "exact":true,
            "gmtCreate":"2019-10-21 16:09:48",
            "gmtModify":"2019-10-21 16:11:02",
            "icon":"file",
            "id":"1186192847761297410",
            "isleaf":true,
            "key":"",
            "locale":"menu.monitor.log.biz",
            "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
            "name":"业务日志",
            "orders":1,
            "originChildren":[],
            "parentId":"1186192719776305153",
            "parentName":"系统监控",
            "path":"/monitor/log/biz",
            "pathId":"1186192719776305153",
            "pathName":"系统监控/业务日志",
            "resources":[
              {
                "id":"1186193072919924737",
                "moduleId":"1186192847761297410",
                "resourceDesc":"全部资源",
                "resourceType":"9999",
                "resourceUrl":"/**"
              }
            ],
            "status":"9999"
          },
          {
            "createBy":"9199482d76b443ef9f13fefddcf0046c",
            "exact":true,
            "gmtCreate":"2019-10-21 16:10:19",
            "gmtModify":"2019-10-21 16:11:08",
            "icon":"file",
            "id":"1186192979059789826",
            "isleaf":true,
            "key":"",
            "locale":"menu.monitor.log.error",
            "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
            "name":"异常日志",
            "orders":2,
            "originChildren":[],
            "parentId":"1186192719776305153",
            "parentName":"系统监控",
            "path":"/monitor/log/error",
            "pathId":"1186192719776305153",
            "pathName":"系统监控/异常日志",
            "resources":[
              {
                "id":"1186193037775851522",
                "moduleId":"1186192979059789826",
                "resourceDesc":"全部资源",
                "resourceType":"9999",
                "resourceUrl":"/**"
              }
            ],
            "status":"9999"
          }
        ],
        "createBy":"9199482d76b443ef9f13fefddcf0046c",
        "exact":true,
        "gmtCreate":"2019-10-21 16:09:17",
        "gmtModify":"2019-10-21 16:09:17",
        "icon":"radar-chart",
        "id":"1186192719776305153",
        "isleaf":true,
        "key":"",
        "locale":"menu.monitor",
        "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
        "name":"系统监控",
        "orders":5,
        "originChildren":[
          {"$ref":"$.data[1].children[0]"},
          {"$ref":"$.data[1].children[1]"}
        ],
        "path":"/monitor",
        "resources":[],
        "status":"9999"
      },
      {
        "createBy":"9199482d76b443ef9f13fefddcf0046c",
        "exact":true,
        "gmtCreate":"2019-10-25 12:34:47",
        "gmtModify":"2019-10-25 12:34:47",
        "icon":"rocket",
        "id":"1187588287316574209",
        "isleaf":true,
        "key":"",
        "locale":"menu.dev.generator",
        "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
        "name":"代码生成",
        "orders":6,
        "originChildren":[],
        "path":"/dev/generator",
        "resources":[],
        "status":"9999"
      },
      {
        "children":[
          {
            "createBy":"9199482d76b443ef9f13fefddcf0046c",
            "exact":true,
            "gmtCreate":"2019-10-26 11:39:48",
            "gmtModify":"2019-10-26 11:39:48",
            "id":"1187936839427391490",
            "isleaf":true,
            "key":"",
            "locale":"menu.pdos.purchasing",
            "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
            "name":"采购管理",
            "orders":1,
            "originChildren":[],
            "parentId":"1187919802302926850",
            "parentName":"进销存",
            "path":"/pdos/purchasing",
            "pathId":"1187919802302926850",
            "pathName":"进销存/采购管理",
            "resources":[
              {
                "id":"1187936839473528833",
                "moduleId":"1187936839427391490",
                "resourceDesc":"全部资源",
                "resourceType":"9999",
                "resourceUrl":"/**"
              }
            ],
            "status":"9999"
          }
        ],
        "createBy":"9199482d76b443ef9f13fefddcf0046c",
        "exact":true,
        "gmtCreate":"2019-10-26 10:32:06",
        "gmtModify":"2019-10-26 10:32:06",
        "icon":"home",
        "id":"1187919802302926850",
        "isleaf":true,
        "key":"",
        "locale":"menu.pdos",
        "modifyBy":"9199482d76b443ef9f13fefddcf0046c",
        "name":"进销存",
        "orders":7,
        "originChildren":[
          {"$ref":"$.data[3].children[0]"}
        ],
        "path":"/pdos",
        "resources":[],
        "status":"9999"
      }
    ],
    "success":true
  });
};

export default {
  'GET /sys/module/listNoPage': list,
  'GET /sys/module/get': get,
  'POST /sys/module/checkUnique': list,
  'POST /sys/module/edit': list,
  'POST /sys/module/sort': list,
  'POST /sys/module/del': list,
};
