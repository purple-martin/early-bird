import type { Alpine } from 'alpinejs';
import ajax from '@imacrayon/alpine-ajax';
import intersect from '@alpinejs/intersect';

export default (Alpine: Alpine) => {
  Alpine.plugin([ajax,intersect]);
};
