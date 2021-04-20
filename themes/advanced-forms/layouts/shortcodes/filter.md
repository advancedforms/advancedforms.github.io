{{ $filter := .Site.GetPage (print "filters/" (.Get 0)) }}
<code><a href="{{ $filter.Permalink }}">{{ $filter.Title }}</a></code>