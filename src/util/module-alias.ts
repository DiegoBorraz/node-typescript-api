import * as path from 'path';
import moduleAlias from 'module-alias';
import { mainModule } from 'node:process';

const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
    '@src':path.join(files, 'src'),
    '@test': path.join(files,'test')
});