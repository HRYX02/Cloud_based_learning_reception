# 云上学堂

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```



# 开发中遇到的问题

## 问题 vue-server-renderer和vue版本不匹配

```bash
Vue packages version mismatch:                                                                                                                                               │
   │   - vue@3.3.4                                                                              │
   │   - vue-server-renderer@2.7.14  
```

### 解决

```bash
npm install vue@2.7.14
```

## 问题

```Package subpath './dist/css/swiper.css' is not defined by "exports"```

### 解决

```bash
npm install swiper@4.5.1
npm install vue-awesome-swiper@3.1.3
```

