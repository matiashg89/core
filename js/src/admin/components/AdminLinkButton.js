/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import LinkButton from '../../common/components/LinkButton';

export default class AdminLinkButton extends LinkButton {
  getButtonContent(children) {
    return [...super.getButtonContent(children), <div className="AdminLinkButton-description">{this.attrs.description}</div>];
  }
}
