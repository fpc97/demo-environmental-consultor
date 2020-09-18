import CMS from 'netlify-cms-app'
import { es } from 'netlify-cms-locales'

import SobreNosotrosPageTemplate from './preview-templates/sobre-nosotros'

CMS.registerPreviewTemplate('sobre-nosotros', SobreNosotrosPageTemplate)

CMS.registerLocale('es', es)