//  引入组件

import { Button, Message, Notification, Table, TableColumn, Tag } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
Vue.use(Button)
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);
Vue.prototype.$notify = Notification;

Vue.prototype.$message = Message;