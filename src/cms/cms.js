import CMS from 'netlify-cms-app'
import { es } from 'netlify-cms-locales'

import SobreNosotrosPageTemplate from './preview-templates/sobre-nosotros'
import ServiciosPageTemplate from './preview-templates/servicios'
import PersonalPageTemplate from './preview-templates/personal'
import TrabajosPageTemplate from './preview-templates/trabajos-realizados'
import IndexPageTemplate from './preview-templates/index'

CMS.registerLocale('es', es)

CMS.registerPreviewTemplate('sobre-nosotros', SobreNosotrosPageTemplate)
CMS.registerPreviewTemplate('servicios', ServiciosPageTemplate)
CMS.registerPreviewTemplate('personal', PersonalPageTemplate)
CMS.registerPreviewTemplate('trabajos-realizados', TrabajosPageTemplate)
CMS.registerPreviewTemplate('index', IndexPageTemplate)